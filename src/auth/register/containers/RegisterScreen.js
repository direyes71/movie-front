import React, { Component } from 'react';
import RegisterForm from '../components/RegisterForm';


class RegisterScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <RegisterForm/>
            </div>
        )
    }
}

export default RegisterScreen;
