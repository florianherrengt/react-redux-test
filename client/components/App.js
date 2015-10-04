import React, { Component } from 'react';
import { Link } from 'react-router';
import { fetchData } from '../actions/app';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, divider } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
      	<Navbar brand="React-Bootstrap">
      	   <Nav navbar right>
      	   		<LinkContainer to='/signin'>
	        		<NavItem eventKey={1} href="/signin">Sign in</NavItem>
	        	</LinkContainer>
	    	</Nav>
      	</Navbar>
      	<div className="container">
        	<div>{ this.props.children }</div>
        </div>
      </div>
    );
  }
}

App.fetchData = fetchData;

export default App;
