import React, { useEffect } from "react";
import Revetementimg from "../../assets/wood.jpg";
import "./Revetement.css";
import Logo from "../../components/Logo/Logo";

import Footer from "../../components/Footer/Footer";

function Revetement() {
    useEffect(() => {
      
        window.scrollTo(0, 0);
    }, []); 

    return (
        <div className="revetement-containerr">
            <Logo />

            <div className="image-overlayr">
                <img
                    src={Revetementimg}
                    alt="Revetement"
                    className="background-imager"
                />
                <div>
                    <div className="overlay-textr3r">
                        <body>
                            <h1>Revêtement de Sol</h1>

                            <p>
                                Découvrez notre vaste gamme de revêtements de
                                sol de haute qualité pour sublimer votre espace
                                intérieur et le transformez avec des matériaux
                                tels que parquet, carrelage, vinyle, et bien
                                plus encore.
                            </p>

                            <h2>
                                Services Professionnels de Revêtement de Sol :
                            </h2>

                            <p>
                                Notre équipe qualifiée vous propose des
                                solutions complètes, de la sélection minutieuse
                                des matériaux à l'installation professionnelle.
                                Profitez de la durabilité et de la résistance
                                aux usures quotidiennes de nos revêtements, tout
                                en bénéficiant d'un large choix de styles et de
                                designs pour s'adapter à toutes les ambiances.
                            </p>

                            <h2>Avantages de Nos Revêtements de Sol :</h2>

                            <ul>
                                <li>
                                    <strong>Large Gamme de Matériaux :</strong>{" "}
                                    Parquet, carrelage, vinyle, etc.
                                </li>
                                <li>
                                    <strong>Durabilité et Résistance :</strong>{" "}
                                    Adaptés à un usage quotidien intensif.
                                </li>
                                <li>
                                    <strong>Esthétique Variée :</strong> Designs
                                    pour tous les styles et préférences.
                                </li>
                                <li>
                                    <strong>
                                        Installation Professionnelle :
                                    </strong>{" "}
                                    Réalisée par nos experts qualifiés.
                                </li>
                            </ul>

                            <h2>
                                Contactez-Nous pour Votre Projet de Revêtement
                                de Sol :
                            </h2>

                            <p>
                                Nous sommes à votre disposition pour discuter de
                                votre projet de revêtement de sol. Bénéficiez
                                d'une consultation gratuite et d'un devis
                                personnalisé.
                            </p>

                            <p>
                                Explorez notre collection dès aujourd'hui et
                                donnez une nouvelle vie à vos sols avec
                                <strong> MCR PLUS</strong> !
                            </p>
                        </body>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Revetement;
