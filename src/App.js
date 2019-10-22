import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './base/components/Header'
import RegisterScreen from './auth/register/containers/RegisterScreen';
import Movies from './movie/containers/Movies';
import LoginScreen from './auth/login/LoginScreen';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Movies',
            loginScreen: []
        }
        this.hideLoginScreen = this.hideLoginScreen.bind(this);
    }

    componentWillMount() {
        const loginScreen = [];
        loginScreen.push(<LoginScreen hideLoginScreen={ this.hideLoginScreen }/>);
        this.setState({
            loginScreen: loginScreen
        });
    }

    hideLoginScreen() {
        this.setState({
            loginScreen: []
        })
    }

    render() {
        return (
            <div className="">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                      crossOrigin="anonymous"/>
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                      rel="stylesheet"
                      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                      crossOrigin="anonymous"/>

                <Router>
                    <Header title={this.state.title}/>
                    { this.state.loginScreen }
                    <div>
                        <Switch>
                            <Route exact path='/' component={Movies}/>
                            <Route path='/register' component={RegisterScreen}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
