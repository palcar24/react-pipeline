import React, { Component } from "react";
import Routes from "./Routes";
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import RouteNavItem from "./components/RouteNavItem";
import { authUser, signOutUser } from "./libs/awsLib";

import SideBar from './components/Sidebar/Sidebar'
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  async componentDidMount() {
    try {
      if (await authUser()) {
        this.userHasAuthenticated(true);
      }
    }
    catch(e) {
      alert(e);
    }

    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleLogout = event => {
    signOutUser();
    this.userHasAuthenticated(false);
    this.props.history.push("/login");
  }

  render() {
  const childProps = {
    isAuthenticated: this.state.isAuthenticated,
    userHasAuthenticated: this.userHasAuthenticated
  };

  return (
    !this.state.isAuthenticating &&
    <div className="wrapper">
      {this.state.isAuthenticated &&
        <SideBar />
      }
      <div id="content">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            {this.state.isAuthenticated &&
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
        <Routes childProps={childProps} />
      </div>
    </div>
    );
  }
}

export default withRouter(App);
