// Peinture.jsx
import React, { useEffect } from "react";
import "./Platreries.css";
import Platreriesimg from "../../assets/Plaster.jpg";
import Platreriesimg2 from "../../assets/Plaster2.jpg";
import Platreriesimgmin from "../../assets/plamin.png";
import Logo from "../../components/Logo/Logo";
import Footer from "../../components/Footer/Footer";

function Platreries() {
    useEffect(() => {
       
        window.scrollTo(0, 0);
    }, []); 

    return (
        <div class="page-container">
            <div>
                <Logo />

                <div className="image-overlaypl">
                    <img
                        src={Platreriesimgmin}
                        alt="Platreries"
                        className="Platreriesmin"
                    />
                    <img
                        src={Platreriesimg}
                        alt="Platreries"
                        className="Platreries"
                    />
                    <div className="image-overlaytextpl">
                        <main>
                            <section>
                                <h1>
                                    Bienvenue sur la page dédiée aux plâtreries
                                    chez MCR PLUS.
                                </h1>
                                <p>
                                    Nous sommes spécialisés dans la fourniture
                                    de services de plâtrerie de haute qualité
                                    pour tous projets. Notre équipe d'artisans
                                    qualifiés met à votre disposition son
                                    savoir-faire pour créer des espaces
                                    intérieurs esthétiques et fonctionnels.
                                </p>
                            </section>

                            <section>
                                <h2>Nos Services de Plâtreries :</h2>
                                <ul>
                                    <li>
                                        <strong>
                                            Cloisons et Séparations :
                                        </strong>{" "}
                                        Créez des espaces délimités avec nos
                                        cloisons adaptées à vos besoins, offrant
                                        à la fois fonctionnalité et esthétisme.
                                    </li>
                                    <li>
                                        <strong>Faux Plafonds :</strong>{" "}
                                        Améliorez l'esthétique de vos pièces
                                        avec nos solutions de faux plafonds,
                                        apportant une touche moderne à votre
                                        intérieur.
                                    </li>
                                    <li>
                                        <strong>Staff et Ornements :</strong>{" "}
                                        Ajoutez une touche d'élégance avec nos
                                        éléments en staff et ornements, conçus
                                        pour embellir vos murs et plafonds.
                                    </li>
                                    <li>
                                        <strong>
                                            Réparation et Rénovation :
                                        </strong>{" "}
                                        Confiez-nous la réparation et la
                                        rénovation de vos surfaces en plâtre
                                        pour retrouver l'éclat d'origine de
                                        votre intérieur.
                                    </li>
                                </ul>
                            </section>
                            <img
                                src={Platreriesimg2}
                                alt="Platreries"
                                className="Platreries2"
                            />
                            <section>
                                <h2>
                                    Pourquoi Choisir MCR PLUS pour Vos
                                    Plâtreries ?
                                </h2>
                                <ul>
                                    <li>
                                        <strong>Expertise Artisanale :</strong>{" "}
                                        Notre équipe qualifiée garantit des
                                        finitions impeccables et un travail
                                        artisanal de qualité.
                                    </li>
                                    <li>
                                        <strong>
                                            Matériaux de Première Qualité :
                                        </strong>{" "}
                                        Nous utilisons des matériaux haut de
                                        gamme pour des résultats durables et
                                        esthétiques.
                                    </li>
                                    <li>
                                        <strong>Devis Personnalisé :</strong>{" "}
                                        Contactez-nous pour obtenir un devis
                                        personnalisé, adapté à vos besoins
                                        spécifiques.
                                    </li>
                                </ul>
                            </section>
                        </main>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}

export default Platreries;
