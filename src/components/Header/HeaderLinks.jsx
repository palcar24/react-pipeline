import React, {Component} from 'react';
import { NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';


class HeaderLinks extends Component{
    render(){
        const notification = (
            <div>
                <i className="fa fa-globe"></i>
                <b className="caret"></b>
                <span className="notification">5</span>
                <p className="hidden-lg hidden-md">Notification</p>
            </div>
        );
        return (
            <div>
                <Nav>
                    <NavItem eventKey={1} href="/#/dashboard">
                        <i className="fa fa-dashboard"></i>
                        <p className="hidden-lg hidden-md">Dashboard</p>
                    </NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="/#/signup">Signup</NavItem>

                    <NavItem eventKey={3} href="/#/login">Login</NavItem>
                </Nav>
            </div>
        );
    }
}

export default HeaderLinks;
