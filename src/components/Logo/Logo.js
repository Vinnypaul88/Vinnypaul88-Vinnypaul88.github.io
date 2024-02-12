import React from "react";
import logo from "../../assets/Logo.png";

import "./Logo.css";
import { NavLink } from "react-router-dom";

function Logo() {
    return (
        <div className="Top">
            <NavLink to="/">
                <div className="mcrlogo">
                    <h3></h3>
                    <img src={logo} alt="logomcr" className="logoMcr" />
                </div>
            </NavLink>
            <nav>
                <div className="tab">
                    <NavLink to="/">
                        <h3>Accueil</h3>
                    </NavLink>
                    <NavLink to="/contact">
                        <h3>Contact</h3>
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Logo;
