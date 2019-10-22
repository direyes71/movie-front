import React, {Component} from 'react';
import Login from './Login';
import {Link} from 'react-router-dom';


class LoginScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            loginScreen: [],
            loginMessage: '',
            isLogin: true
        };
        this.hideLoginScreen = this.props.hideLoginScreen.bind(this);
    }
    componentWillMount() {
        const loginScreen = [];
        loginScreen.push(<Login hideLoginScreen={ this.hideLoginScreen }/>);
        const loginMessage = 'Not registered yet, please register';
        this.setState({
            loginScreen: loginScreen,
            loginMessage: loginMessage
        });
    }
    render(){
        return (
            <div className="login_screen">
                {this.state.loginScreen}
                <div>
                    {this.state.loginMessage}
                    <div>
                        <Link to='/register'>Register</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginScreen;
