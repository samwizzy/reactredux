// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyCfiDByZ08uF99UWtiRRIixEn5xS88n9lE",
    authDomain: "firereact-f77a9.firebaseapp.com",
    databaseURL: "https://firereact-f77a9.firebaseio.com",
    projectId: "firereact-f77a9",
    storageBucket: "firereact-f77a9.appspot.com",
    messagingSenderId: "397485737172",
    appId: "1:397485737172:web:86d028fd801292485f2741",
    measurementId: "G-8TEG8TBSQ0"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler((payload) => {
    console.log("Background Messaging: ", payload);
})