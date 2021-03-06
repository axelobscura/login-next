import React, { Component } from 'react';
import { loginUser } from '../lib/auth';

class LoginForm extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        const { email, password } = this.state;
        event.preventDefault();
        console.log(this.state);
        loginUser(email, password)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input 
                        type="email"
                        name="email"
                        placeholder="email"
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <input 
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit">ENVIAR DATOS</button>
            </form>
        )
    }
};

export default LoginForm;