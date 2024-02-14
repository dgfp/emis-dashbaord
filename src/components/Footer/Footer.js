/*!

=========================================================
* eMIS Dashboard React - v1.0.0
=========================================================

* Abdul Manann
*/
import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
        <strong>Copyright &copy; 2023 <a href="#">Directorate General of Family Planning</a>.</strong>
        All rights reserved.
        <div className="float-right d-none d-sm-inline-block">
          <b>Version</b> 3.2.0
        </div>
      </footer>
    );
  }
}

export default Footer;
