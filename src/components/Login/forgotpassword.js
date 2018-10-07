import React, { Component } from 'react';
import Header from './login';
import TopLoginContainer from './login';
import './login.css';
export default class ForgotPassword extends Component {
        debugger;
        render() {    
            return (
                <div className="BOS_Login">
                    <div className="container">
                        <Header />
                        <div className="BOS_Login js_forgotpassword" id="forgotpassword_section">
                            <div className="container">
                                <Header />
                                <div className="login-form">
                                    <div className="main-div resetpassword">
                                        <div className="panel">
                                            <h1>Reset Password</h1>
                                            <p>Please enter your new password</p>
                                        </div>
                                        <form id="forgotpassword">
                                            <div className="form-group">

                                                <input type="password" className="form-control" id="inputEmail" placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" id="inputPassword" placeholder="Retype Password" />
                                            </div>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>                                               
            );
          }
    }



    