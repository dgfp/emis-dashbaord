/*!
Abdul Mannan
*/
import React, { Component } from "react";
import { Container, Nav } from "react-bootstrap";

class Partners extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12 section-title">
                    <h2>Partners, who are using eMIS data</h2>
                </div>

                <div className="col-md-12 partner-logo">
                    <div className="logo">
                        <a href="#"><img src={require("assets/img/bdris.jpg")}/></a>
                    </div>

                    <div className="logo">
                        <a href="#"><img src={require("assets/img/heu.png")}/></a>
                    </div>

                    <div className="logo">
                        <a href="#"><img src={require("assets/img/a2i-logo-lottie.gif")}/></a>
                    </div>

                    <div className="logo">
                        <a href="#"><img src={require("assets/img/dghs.png")}/></a>
                    </div>

                    <div className="logo">
                        <a href="#"><img src={require("assets/img/UNICEF-logo.png")}/></a>
                    </div>

                    <div className="logo">
                        <a href="#"><img src={require("assets/img/unfpa.png")}/></a>
                    </div>

                    <div className="logo">
                        <a href="#"><img src={require("assets/img/usaid.png")}/></a>
                    </div>

                    <div className="logo">
                        <a href="#"><img src={require("assets/img/icddrb.png")}/></a>
                    </div>

                    <div className="logo">
                        <a href="#"><img src={require("assets/img/sci.png")}/></a>
                    </div>

                    <div className="logo">
                        <a href="#"><img src={require("assets/img/ipas.jpg")}/></a>
                    </div>
                </div>

            </div>
        );
    }
}

export default Partners;
