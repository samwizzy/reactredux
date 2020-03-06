import Login from './Login'

const loginConfig = [
    {
        routes: [
            {
                path: '/login',
                exact: true,
                component: Login
            }
        ]
    }
];

export default loginConfig;