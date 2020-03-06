import React from 'react'
import { Redirect } from 'react-router-dom'
import NotFoundConfig from '../main/notFound/NotFoundConfig'
import Root from './../components/Root'
import LoginConfig from '../main/login/LoginConfig'

const routesConfig = [
    LoginConfig,
    NotFoundConfig
]

const setRouter = (configs) => {
    let routes = [];
    configs.forEach(config => {
        config.map(conf => {
            conf.routes.map(route => {
                routes = [
                    ...routes,
                    {...route}
                ]
            })
        })
    });
    return routes
} 

const routes = [
    {
        component: Root,
        routes: [
            {
                path: '/',
                exact: true,
                component: () => <Redirect to="/login" />
            },
            ...setRouter(routesConfig)
        ]
    }
];

export default routes;