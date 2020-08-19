const firebaseConfig = require('./firebaseConfig')
const firebase = require('firebase/app')
require('firebase/auth')
require('firebase/database')
require('firebase/messaging')

class firebaseService {
    init() {
        if (firebase.apps.length) {
            return;
        }
        firebase.initializeApp(firebaseConfig)
        this.auth = firebase.auth();
        this.db = firebase.database();
    }

    currentUser = () => {
        if (!this.auth) {
            return;
        }

        const user = firebase.auth().currentUser;

        if (user) {
            return user;
        } else {
            this.onAuthStateChanged(user => {
                console.log("logged in")
                return user;
            })
        }
    };

    pushNotification = async () => {
        if (!process.browser) {
            return;
        }
        const messaging = firebase.messaging();
        await messaging.requestPermission()
            .then(() => {
                return messaging.getToken()
            })
            .then((token) => {
                console.log(token, "token gotten")
            })
            .catch((error) => {
                console.log(error, "error fired")
            })
    }

    asyncPromise = async () => {
        return await Promise.resolve('Hello chuks')
    }

    pushUser() {
        const ref = this.db.ref().child('users')
        var postsRef = ref.child("posts");

        const data = {
            author: "gracehop",
            title: "Announcing AngularJS, a New Programming Language"
        }

        var postKey = postsRef.push(data).key;
        const updateData = {}
        //updateData[postKey] = {} // Just incase you want to update using the key
    }

    setUser() {
        const ref = this.db.ref().child('users')
        var postsRef = ref.child("posts");

        const data = {
            author: "gracehop",
            title: "Announcing AngularJS, a New Programming Language"
        }
        var newPostRef = postsRef.push();
        newPostRef.set(data); // this will generate key 
    }

    updateUser(data) {
        if (!firebase.apps.length) {
            return;
        }
        const { userId, displayName } = data
        this.db.ref(`admins/${userId}`).update({
            displayName
        })
        /** OR */
        this.db.ref(`admins/${userId}/displayName`).set(displayName)
    }

    signIn(email, password) {
        this.auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                // logged in
            })
            .catch((error) => {
                console.log(error, 'error')
            });
    }

    createAdmin(data) {
        const { email, password, displayName } = data
        this.auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                let user = firebase.auth().currentUser;
                user.updateProfile({
                    displayName
                })
                this.writeUserData(user, data)
            })
            .catch((error) => {
                console.log(error, "error")
            })
    }

    getUsers = (user) => {
        if (!firebase.apps.length) {
            return;
        }

        return new Promise((resolve, reject) => {
            this.db.ref().child('users')
                .on('value', snapshot => {
                    console.log(snapshot.val())
                })
        })
    }

    getUserData = (userId) => {
        if (!firebase.apps.length) {
            return;
        }
        return new Promise((resolve, reject) => {
            this.db.ref(`users/${userId}`)
                .once('value')
                .then((snapshot) => {
                    const user = snapshot.val();
                    console.log(user, "single user")
                    resolve(user);
                });
        });
    };

    queryUserData = (userId) => {
        if (!firebase.apps.length) {
            return;
        }
        return new Promise((resolve, reject) => {
            const query = this.db.ref('admins').orderByChild('uid').equalTo(userId)
            query.once("child_added", snapshot => {
                return resolve(snapshot.val())
            })
        });
    };

    getChildList = (user) => {
        if (!firebase.apps.length) {
            return;
        }

        return new Promise((resolve, reject) => {
            this.db.ref().child('users').child('hobbies')
                .on('child_added', snapshot => {
                    console.log(snapshot.val())
                })
        })
    }

    checkUserNode = (email) => {
        if (!firebase.apps.length) {
            return;
        }

        return new Promise((resolve, reject) => {
            this.db.ref(`users`)
                .orderByChild('email').equalTo(`${email}`)
                .on('value', snapshot => {
                    const user = snapshot.val();
                    console.log(user, "user checkUserNode")

                    return resolve(user)
                })
        });
    };


    onAuthStateChanged(callback) {
        if (!this.auth) {
            return;
        }

        this.auth.onAuthStateChanged(callback);
    }

    writeUserData(authUser, data) {
        firebase.database().ref().child(`admins/${authUser.uid}`).set({
            id: authUser.uid,
            displayName: data.displayName,
            email: authUser.email,
        });
    }

    signOut = () => {
        if (!this.auth) {
            return;
        }
        this.auth.signOut();
    }
}

const instance = new firebaseService

instance.init()
instance.signIn("samwize.inc@gmail.com", "samwize@123")

const userId = "bcKOWCNAy3V4h0vkNPpf8QF9vdj1"
const query = instance.db.ref().child('admins')
query.on("value", snapshot => {
    console.log(snapshot.val())
})

instance.pushNotification()
instance.asyncPromise().then(console.log)