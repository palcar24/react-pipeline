import React, { Component } from "react";
import Routes from "../Routes";
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import RouteNavItem from "./RouteNavItem";
import { authUser, signOutUser } from "../libs/awsLib";


class CustomNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  render() {
  return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            {!this.state.isAuthenticated &&
              <button type="button" id="sidebarCollapse" className="btn btn-info navbar-btn">
                  <i className="glyphicon glyphicon-align-left"></i>
              </button>
            }
          <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {this.state.isAuthenticated
                ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
                : [
                    <RouteNavItem key={1} href="/signup">
                      Signup
                    </RouteNavItem>,
                    <RouteNavItem key={2} href="/login">
                      Login
                    </RouteNavItem>
                  ]}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </div>
    );
  }
}

export default withRouter(CustomNavbar);
