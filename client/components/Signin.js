import React, { Component } from 'react';
import { fetchData } from '../actions/signin';
import { ButtonInput } from 'react-bootstrap';

class Signin extends Component {
	onSubmit(event) {
		event.preventDefault();
		console.log(event);
	}
	render() {
		return (
		  	<div>
		  		<form onSubmit={this.onSubmit}>
		      		<p>Username:</p>
		      		<input type="text" />
		      		<p>Password:</p>
		      		<input type="text" />
		      		<ButtonInput type="submit" value="Submit Button" />
		  		</form>
		  	</div>
		);
	}
}

Signin.fetchData = fetchData;

export default Signin;
