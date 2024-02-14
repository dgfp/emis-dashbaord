/*!
Abdul Mannan
*/
import React, { Component } from "react";
import { Container,Nav } from "react-bootstrap";

class TopNavbar extends Component {
  render() {
    return (
        <Nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item" >
                    <img src={require("assets/img/emis.png")} style={{width: "40%",marginLeft: "10px"}}/>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
    
                <li className="nav-item">
                    <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                        <img src={require("assets/img/emis.png")} style={{height: "90%"}}/>
                    </a>
                </li>
            </ul>
        </Nav>
    );
  }
}

export default TopNavbar;
