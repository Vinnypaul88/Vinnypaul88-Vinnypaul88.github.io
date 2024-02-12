// Peinture.jsx
import React, { useEffect } from "react";
import "./Contact.css";
import Platreriesimg from "../../assets/Plaster.jpg";
import Contactimg from "../../assets/contact1.jpg";
import Platreriesimg2 from "../../assets/Plaster2.jpg";
import Logo from "../../components/Logo/Logo";
import Footer from "../../components/Footer/Footer";
function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div class="page-container">
            <div>
                <Logo />

                <body>
                    <div className="image-overlayc">
                        <img
                            src={Contactimg}
                            alt="contact"
                            className="Contactimg"
                        />
                        <div className="overlaytextc">
                            <header>
                                <h1>Contactez-Nous</h1>
                                <p>
                                    Vous avez des questions ou vous souhaitez
                                    discuter de votre projet ? N'hésitez pas à
                                    nous contacter. Nous sommes là pour vous
                                    aider !
                                </p>
                            </header>

                            <section>
                                <h2>Informations de Contact</h2>
                                <p>Retrouvez ci-dessous nos coordonnées :</p>
                                <ul>
                                    <li>
                                        <strong>Adresse :</strong> 7 impasse de
                                        la Colombière, 82710 BRESSOLS.
                                    </li>
                                    <li>
                                        <strong>Téléphone :</strong> 05 63 63 50
                                        03
                                    </li>
                                    <li>
                                        <strong>Email :</strong>{" "}
                                        contact@mcrpro.fr
                                    </li>
                                </ul>
                            </section>

                            <footer>
                                <p></p>
                            </footer>
                        </div>
                    </div>
                </body>
                <Footer />
            </div>
        </div>
    );
}

export default Contact;
