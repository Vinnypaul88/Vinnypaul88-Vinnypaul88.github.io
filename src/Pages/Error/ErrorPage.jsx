import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import "./ErrorPage.css";

function ErrorPage() {
    useEffect(() => {
       
        window.scrollTo(0, 0);
    }, []); 

    return (
        <div className="error">
            <Logo />
            <h4>404</h4>
            <h5>La page que vous demandez n'existe pass.</h5>
            {/* <h6>
                <Link
                    to="/accueil"
                    style={{ color: "#f39321;", textDecoration: "underline" }}
                >
                    Retournez sur la page d'accueil
                </Link>
            </h6> */}
        </div>
    );
}

export default ErrorPage;
