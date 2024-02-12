// Peinture.jsx
import React, { useEffect } from "react";
import Decorationimg from "../../assets/deco.jpg";
import Logo from "../../components/Logo/Logo";
import Footer from "../../components/Footer/Footer";
import "./Decoration.css";
function Decoration() {
    useEffect(() => {
      
        window.scrollTo(0, 0);
    }, []); 
    return (
        <div>
            <Logo />

            <img
                src={Decorationimg}
                alt="Decoration"
                className="Decorationimg"
            />
            <div className="overlaytextdec">
                <header>
                    <h1>Services de Décoration Intérieure</h1>
                    <p>Bienvenue chez MCR PLUS !</p>
                </header>

                <section>
                    <h2>Conseils Personnalisés</h2>
                    <p>
                        Notre équipe de décorateurs expérimentés vous guide dans
                        le choix des couleurs, des textures et des éléments
                        décoratifs pour créer une ambiance qui vous ressemble.
                    </p>
                </section>

                <section>
                    <h2>Choix de Matériaux de Qualité</h2>
                    <p>
                        Optez pour des matériaux haut de gamme pour vos
                        revêtements de sol, vos peintures et vos accessoires
                        décoratifs, garantissant durabilité et élégance.
                    </p>
                </section>

                <section>
                    <h2>Revêtements Muraux et Peinture</h2>
                    <p>
                        Transformez vos murs avec nos services de revêtements
                        muraux et de peinture, offrant une palette de couleurs
                        et de finitions variées.
                    </p>
                </section>

                <section>
                    <h2>Accessoires Décoratifs</h2>
                    <p>
                        Personnalisez votre espace avec des accessoires
                        soigneusement sélectionnés, apportant une touche unique
                        à chaque pièce.
                    </p>
                </section>

                <section>
                    <h2>Pourquoi Choisir MCR PLUS pour Votre Décoration ?</h2>
                    <ul>
                        <li>
                            <strong>Créativité Inspirée :</strong> Notre équipe
                            créative s'inspire des dernières tendances en
                            décoration pour vous offrir des designs uniques et
                            modernes.
                        </li>
                        <li>
                            <strong>Respect des Délais :</strong> Nous nous
                            engageons à respecter les délais pour que votre
                            projet de décoration soit réalisé selon vos
                            attentes.
                        </li>
                        <li>
                            <strong>Devis Personnalisé :</strong> Contactez-nous
                            dès aujourd'hui pour obtenir un devis personnalisé,
                            adapté à votre budget et à vos besoins spécifiques.
                        </li>
                    </ul>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default Decoration;
