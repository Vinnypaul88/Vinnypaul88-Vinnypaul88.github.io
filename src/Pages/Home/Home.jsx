import React, { useState, useEffect } from "react";
import Logo from "../../components/Logo/Logo";
import Banner from "../../components/Banner/Banner";
import Flats from "../../components/Card/Flats";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div>
                <Logo />
                <Banner />
                <Flats />
                <Footer />
            </div>
        </>
    );
}

export default Home;
