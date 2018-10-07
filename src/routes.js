import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch, Redirect, browserHistory, IndexRoute } from 'react-router-dom';

import APP from './components/App';
import About from './components/About/about';
import NotFound from './components/NotFound/notfound';
import Profile from './components/Profile/profile';
import UserDetails from './components/Users/userDetails';
import Users from './components/Users/users';
import Login from './components/Login/login';
import Register from './components/Login/register';
import ForgotPassword from './components/Login/forgotpassword';
import Calendar from './components/Calendar/calendar';

function loggedIn() {
    debugger;
    var LoginInfo = (sessionStorage.getItem("LoginInfo" !== undefined)) ? JSON.parse(sessionStorage.getItem("LoginInfo" !== undefined)) : null;
    if (LoginInfo === null || LoginInfo === undefined) {
        return false;
    }
    else
        return true;
}

function requireAuth(nextState, replace) {
    if (!loggedIn()) {
        replace({
            pathname: '/login'
        })
    }
}

const Routes = (props) => (
    <Switch>
        <Route path="/login" exact={true} component={Login} />
        <Route path="/register" exact={true} component={Register} />
        <Route path="/forgotpassword" exact={true} component={ForgotPassword} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/profile" component={Profile} onEnter={requireAuth} />
        <Route path="/users" component={Users} />
        <Route path="/user(/:id)" component={UserDetails} />
        <Route path="/about" component={About} />       
        <Route component={NotFound} />
    </Switch> 
);

export default Routes;

   