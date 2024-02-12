import React from "react";
import logoFooter from "../../assets/LogoFooter2.png";
import "./Footer.css";

function footer() {
    return (
        <div className="footer">
            <div className="footerLogo">
                <img
                    src={logoFooter}
                    alt="logo"
                    className="logoFooter"
                    width="100"
                />
            </div>
            {/* <div className="footerText">MCR Plus. Second Oeuvre.</div> */}
        </div>
    );
}

export default footer;
