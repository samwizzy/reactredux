import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import _ from 'lodash';
import AppContext from './../utils/AppContext'

const object = {
    form: {
        firstname: 'sam',
        lastname: 'okeke',
        age: 28,
        role: { id: '' }
    },
    obj: [
        { firstname: 'sam', lastname: 'okeke', age: 28 },  
        { firstname: 'dave', lastname: 'king', age: 22 },  
        { firstname: 'tinubu', lastname: 'shola', age: 32 },  
    ] 
}

const requiredKeys = ['firstname', 'lastname', 'email'],
    params = {
        "firstname": "thefourtheye",
        "lastname": "thefourtheye",
        "email": "NONE",
    };

const required = ['firstname', 'age'];


class Param extends React.Component {

    componentDidMount(){
        console.log(this.props.match.params);
        console.log(object.form);
    }
    componentWillMount(){
        _.set(object, 'form.color', 'green');
        console.log(_.find(object.obj, {age: 32}), "lodash find");
        console.log(_.pickBy(object.form, (value, key) => {
            return _.startsWith(key, 'firstname');
        }), "lodash includes");
        console.log(_.pick(object.form, ['firstname', 'age']), "Pick up Required");
        console.log(_.every(requiredKeys, _.partial(_.has, params)), "Partial Required");
        console.log(_.set({...object.form}, 'firstname', "Set Example Required"));
        console.log(_.set({...object.form}, 'role', {id: 10}), "Minimumio");
    }


    render(){
        console.log(this.props, "Render")

        return (
            <AppContext.Consumer>
                {(context => (
                    <section>
                        <p>
                            {object.form.color}
                            {context}
                        </p>

                        <h3>Router Params with Link</h3>
                        
                        <h2>{this.props.match.params.id}</h2>
                        <ul>
                            <li><Link to="0">{this.props.count}</Link></li>
                            <li><Link to="1">Go to 1</Link></li>
                            <li><Link to="2">Go to 2</Link></li>
                            <li><Link to="3">Go to 3</Link></li>
                        </ul>

                        <h3>Router Params with Navbar</h3>
                        <ul>
                            <li><NavLink to="4">Go to 4</NavLink></li>
                            <li><NavLink to="5">Go to 5</NavLink></li>
                            <li><NavLink to="6">Go to 6</NavLink></li>
                            <li><a href="7">Go to 7</a></li>
                        </ul>
                    </section>
                ))}
                
            </AppContext.Consumer>
        );
    }
}


const mapStateToProps = state => {
    console.log(state, "Param Component");
    const { todo } = state.todoReducer;
    return {
        count : todo.count
    }
}

export default connect(mapStateToProps, null)(Param)