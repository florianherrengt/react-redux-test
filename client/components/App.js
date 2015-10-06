import React, { Component } from 'react';
import { Link } from 'react-router';
import { fetchData } from '../actions/app';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, divider } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import docCookies from '../utils/docCookies';

class App extends Component {
    render() {
        const accountBtn = (
            <LinkContainer to='/account'>
                <NavItem eventKey={1} href="/account">Account</NavItem>
            </LinkContainer>
        );
        const signinBtn = (
            <LinkContainer to='/signin'>
                <NavItem eventKey={1} href="/signin">Sign in</NavItem>
            </LinkContainer>
        );
        return (
            <div>
                <Navbar brand="React-Bootstrap">
                    <Nav navbar right>
                        { this.props.signin ? accountBtn : signinBtn }
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
