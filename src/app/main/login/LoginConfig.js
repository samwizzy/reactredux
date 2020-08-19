import loadable from '@loadable/component'
import Login from './Login'

const loginConfig = [
    {
        routes: [
            {
                path: '/login',
                exact: true,
                component: loadable(() => import('./Login'))
            }
        ]
    }
];

export default loginConfig;