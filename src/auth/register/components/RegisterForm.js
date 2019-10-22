import React, { Component } from 'react';


class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            age: '',
            gender: ''
        };
        this.saveUser = this.saveUser.bind(this);
    }

    render() {
        return (
            <form onSubmit={this.saveUser} class="border border-light p-5">
                <div className="form-group">
                    <label>Username</label>
                    <input required="required" className="form-control" onChange={(event) => this.setState({username: event.target.value})}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" required="required" className="form-control" onChange={(event) => this.setState({password: event.target.value})}/>
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="number" required="required" className="form-control" onChange={(event) => this.setState({age: event.target.value})}/>
                </div>
                <div className="form-group">
                    <label>Gender</label>
                    <select required="required" className="form-control" onChange={(event) => this.setState({gender: event.target.value})}>
                        <option></option>
                        <option value={1}>Hombre</option>
                        <option value={2}>Mujer</option>
                    </select>
                </div>
                <div className="col-auto my-1">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        );
    }

    saveUser(event) {
        event.preventDefault();
        const apiBaseUrl = 'http://localhost:8000/';
        const payload = {
            username: this.state.username,
            password: this.state.password,
            age: this.state.age,
            gender: this.state.gender
        };
        const data = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(payload)
        };
        fetch(apiBaseUrl + 'auth/sign-up/', data)
            .then(response => response.json())
            .then(() => {
                window.location.href = "/";
            });
    }
}

export default RegisterForm;
