import React, { Component } from 'react';


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:''
        };
        this.hideLoginScreen = this.props.hideLoginScreen.bind(this);
    }
    render() {
        return (
            <div className="container">
                <br/>
                <div className="row">
                    <div className="form-group col-md-4">
                        <input placeholder="username" className="form-control" onChange={(event) => this.setState({username: event.target.value})}/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="password" placeholder="password" className="form-control" onChange={(event) => this.setState({password: event.target.value})}/>
                    </div>
                    <div className="form-group col-md-4">
                        <button className="btn btn-default" onClick={(event) => this.handleClick(event)}>Login</button>
                    </div>
                </div>
            </div>
        );
    }

    handleClick(){
        const apiBaseUrl = 'http://localhost:8000/';
        const payload = {
            username: this.state.username,
            password: this.state.password
        };
        const init = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(payload)
        };
        fetch(apiBaseUrl + 'auth/login-token/', init)
            .then(response => response.json())
            .then(data_response => {
                localStorage.setItem('token', data_response.access);
                localStorage.setItem('refresh_token', data_response.refresh);
                this.hideLoginScreen();
            });
    }

}

export default Login;
