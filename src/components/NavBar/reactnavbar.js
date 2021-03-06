import React, { Component } from "react";

class ReactNavBar extends Component {
  render() {
    return (
      <div className="row-xs-12 navbar-light bg-light">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand mesa-inc" href="#">
            Software Solutions
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="search-btn btn my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default ReactNavBar;

// import {
//   Navbar,
//   Nav,
//   NavItem,
//   MenuItem,
//   NavDropdown
//      } from 'react-bootstrap'

// {/* <Navbar classNameName='navbar' fixedTop>
// <Navbar.Header classNameName='nav-bar-header'>
//   <Navbar.Brand>
//     <a href="#"> GM </a>
//   </Navbar.Brand>
// {/* <Navbar.Toggle /> */}
// </Navbar.Header>
// <Navbar.Collapse>
//   <NavItem eventKey={1} href='#'> Home </NavItem>
//   <NavItem eventKey={2} href='#'> Portfolio </NavItem>
//   <NavItem eventKey={3} href='#'> Pictures </NavItem>
//   {/* <NavDropdown eventKey={4} title="Services" id="basic-nav-dropdown">
//     <MenuItem eventKey={4.1}> Services 1 </MenuItem>
//     <MenuItem eventKey={4.2}> Services 2 </MenuItem>
//     <MenuItem eventKey={4.3}> Services 3 </MenuItem>
//   </NavDropdown> */}
// </Navbar.Collapse>
// </Navbar> */}
