import React, { Component } from 'react';
import { fetchData } from '../actions/signin';
import { ButtonInput } from 'react-bootstrap';

class Signin extends Component {
    onChange(event) {
        event.preventDefault();
        this.props[event.currentTarget.name] = event.currentTarget.value;
    }
    onSubmit(event) {
        event.preventDefault();
        const { email, password } = this.props;
        this.props.doSignup({ payload: { email, password }, history: this.props.history });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <p>Username:</p>
                    <input onChange={this.onChange.bind(this)} name="email" type="text" />
                    <p>Password:</p>
                    <input onChange={this.onChange.bind(this)} type="text" name="password" />
                    <ButtonInput type="submit" value="Submit Button" />
                </form>
            </div>
        );
    }
}

Signin.fetchData = fetchData;

export default Signin;
