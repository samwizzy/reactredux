import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Elem from './Elem'


const object = [
    {
        'id': 'applications',
        'title': 'Applications',
        'type': 'group',
        'icon': 'apps',
        'exact': true,
        'children': [
            {
                'id': 'dashboard',
                'title': 'Dashboard',
                'type': 'item',
                'icon': 'settings',
                'exact': true,
                'url': '/apps/dashboards/analytics',
                'auth' : ['admin']
            },
            {
                'id': 'accounts',
                'title': 'Users Account',
                'type': 'item',
                'icon': 'account_circle',
                'url': '/users/accounts',
                'exact': true,
                'auth' : ['admin']
            },
            {
                'id': 'chat',
                'title': 'Chat',
                'type': 'item',
                'icon': 'chat',
                'url': '/apps/chat',
                'exact': true,
                'auth' : ['admin']
            },
            {
                'id': 'tickets',
                'title': 'Tickets',
                'type': 'collapse',
                'icon': 'assignment',
                'exact': true,
                'auth' : ['admin'],
                'children': [
                    {
                        'id': 'tickets-dashboard',
                        'title': 'Tickets Dashboard',
                        'type': 'item',
                        'icon': 'dashboard',
                        'url': '/apps/turn-around-time/dashboard',
                    },
                    {
                        'id': 'tickets-list',
                        'title': 'All Tickets',
                        'type': 'item',
                        'icon': 'view_list',
                        'url': '/apps/tickets/all',
                    },
                    {
                        'id': 'tat-response-reports',
                        'title': 'Turning Around Time',
                        'type': 'item',
                        'icon': 'live_help',
                        'url': '/apps/turn-around-time'
                    }
                ],
            },
            {
                'id': 'investment-products-tbills',
                'title': 'Treasury Bills',
                'type': 'item',
                'url': '/tbills/products',
                'icon': 'description',
                'exact': true,
                'auth' : ['admin']
            },
            {
                'id': 'investment-products-bonds',
                'title': 'Bonds',
                'type': 'item',
                'url': '/bonds/products',
                'icon': 'money',
                'exact': true,
                'auth' : ['admin']
            },
            {
                'id': 'product-categories',
                'title': 'Product Categories',
                'type': 'item',
                'icon': 'whatshot',
                'url': '/product/categories',
                'exact': true,
                'auth' : ['admin'],
            },
            {
                'id': 'department',
                'title': 'Departments',
                'type': 'item',
                'icon': 'people',
                'url': '/apps/departments',
                'exact': true,
                'auth' : ['admin'],
            },
            {
                'id': 'pta-manager',
                'title': 'PTA Manager',
                'type': 'item',
                'icon': 'business',
                'url': '/apps/pta/',
                'exact': true,
                'auth' : ['admin'], 
            },
            {
                'id': 'branch-reorder',
                'title': 'Branch Re-Order Unit',
                'type': 'item',
                'icon': 'business',
                'url': '/apps/branch/',
                'exact': true,
                'auth' : ['admin'],
            },
            {
                'id': 'rate',
                'title': 'Exchange Rate',
                'type': 'item',
                'icon': 'money',
                'url': '/rate/new',
                'exact': true,
                'auth' : ['admin'],
            },
            {
                'id': 'report',
                'title': 'Reports',
                'type': 'item',
                'icon': 'subject',
                'url': '/apps/reports',
                'exact': true,
                'auth' : ['admin'],
            },
            {
                'id': 'roles',
                'title': 'Roles',
                'type': 'collapse',
                'icon': 'supervisor_account',
                'exact': true,
                'auth' : ['admin'],
                'children': [
                    {
                        'id': 'admin-roles',
                        'title': 'New Role',
                        'type': 'item',
                        'icon': 'supervisor_account',
                        'url': '/role/new',
                        'exact': true,
                        'auth' : ['admin']
                    },
                    {
                        'id': 'admin-role-mgt',
                        'title': 'Roles Management',
                        'type' : 'item',
                        'icon' : 'supervisor_account',
                        'url'  : '/roles/users',
                        'exact': true,
                        'auth' : ['admin']
                    },
                    {
                        'id': 'admin-rights-mgt',
                        'title': 'Add Rights to Role',
                        'type': 'item',
                        'icon': 'supervisor_account',
                        'url': '/role/asign-rights',
                        'exact': true,
                        'auth' : ['admin']
                    },
                ]
            },
            {
                'id': 'all-admin',
                'title': 'Admin Users',
                'type': 'collapse',
                'icon': 'supervisor_account',
                'auth' : ['admin'],
                'children': [
                    {
                        'id': 'new-admin',
                        'title': 'Create New Admin',
                        'type': 'item',
                        'icon': 'supervisor_account',
                        'url': '/admin/new',
                        'exact': true,
                        'auth' : ['admin']
                    },
                    {
                        'id': 'all-admin',
                        'title': 'Admin List',
                        'type': 'item',
                        'icon': 'supervisor_account',
                        'url': '/admin/accounts',
                        'exact': true,
                        'auth' : ['admin']
                    },
                    {
                        'id'   : 'rms',
                        'title': 'RM',
                        'type' : 'item',
                        'icon' : 'chat',
                        'url'  : '/rms',
                        'exact': true,
                        'auth' : ['admin']
                    },
                    {
                        'id'   : 'customer-services',
                        'title': 'Customer Services',
                        'type' : 'item',
                        'icon' : 'chat',
                        'url'  : '/customer/services',
                        'exact': true,
                        'auth' : ['admin']
                    },
                ]
            },
            {
                'id'   : 'public-holiday',
                'title': 'Holiday Calendar',
                'type' : 'item',
                'icon' : 'calendar_today',
                'url'  : '/app/holiday-calendar',
                'auth' : ['admin'],
            },
            {
                'id'   : 'branches',
                'title': 'Branches',
                'type' : 'item',
                'icon' : 'ballot',
                'url'  : '/branches',
                'auth' : ['admin'],
            },
            {
                'id'   : 'doctypes',
                'title': 'User Document Types',
                'type' : 'item',
                'icon' : 'note',
                'url'  : '/apps/doctypes',
                'auth' : ['admin']
            },
            {
                'id'   : 'user-preferences',
                'title': 'Customer Preferences',
                'type' : 'item',
                'icon' : 'note',
                'url'  : '/tnc/reports',
                'auth' : ['admin']
            },
            {
                'id'   : 'terms-conditions',
                'title': 'Terms & Conditions',
                'type' : 'item',
                'icon' : 'note',
                'url'  : '/apps/tnc',
                'auth' : ['admin']
            },
        ]
    }
]


const rights = [
    {canview: false, module: { moduleName: 'PTA Manager' }},
    {canview: false, module: { moduleName: 'Chat' }},
    {canview: true, module: { moduleName: 'Holiday Calendar' }},
    {canview: false, module: { moduleName: 'Reports' }},
    {canview: true, module: { moduleName: 'Dashboard' }}
]

class RightMap extends React.Component {

    componentDidMount(){
        let app = {"a": 1};
        let bar = {"b": 2};
        const fruits = {id: 1, name: 'sam', title: 'book'};
        const bags = [{id: 1, name: 'sam', title: 'book'}];
        console.log(_.includes(fruits, 'sam'), "{id: 1, name: 'sam', title: 'book'}")
        console.log(_.some(bags, {name: 'sam'}), "Some lodash");
        console.log(_.includes([app, bar], app), "[app, bar]")
    }

    render(){
        let selectedfoo2 = []

        const { children } = object[0] 
        const selected = children && children.filter(child => {
            return rights.some(r => {
                return r.module.moduleName === child.title && r.canview === true
            })
        })
        const selectedfoo = Object.assign({}, object[0], {children: selected})
        selectedfoo2[0] = selectedfoo

        console.log(selectedfoo, "selectedfoo")
        console.log(selectedfoo2, "selectedfoo2")
        console.log(object, "object")

        return (
            <React.Fragment>
                <Elem>Hello Friend</Elem>
                <p>I am a paragraph</p>
            </React.Fragment>
        );
    }
}


const mapStateToProps = state => {
    return {
    }
}

export default connect(mapStateToProps, null)(RightMap)