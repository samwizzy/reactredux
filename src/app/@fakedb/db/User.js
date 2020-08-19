const users = [
    {
        id: 1,
        username: 'samwize',
        email: 'sam@gmail.com',
        password: '123',
        age: 30
    },
    {
        id: 2,
        username: 'howard',
        email: 'hode@gmail.com',
        password: '456',
        age: 26
    },
    {
        id: 3,
        username: 'jason',
        email: 'jason@gmail.com',
        password: 'j53',
        age: 29
    }
];

mock.onGet("/users").reply(200, {
    users: users
});