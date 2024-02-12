// Peinture.jsx
import React, { useEffect } from "react";
import colors from "../../assets/colors22.jpeg";
import Logo from "../../components/Logo/Logo";
import paint from "../../assets/paint.png";
import Footer from "../../components/Footer/Footer";
import colors3 from "../../assets/colors3.jpg";
import "./Peinture.css";

function Peinture() {
    useEffect(() => {
       
        window.scrollTo(0, 0);
    }, []); 

    return (
        <div class="page-container">
            <div className="peinture-container">
                <Logo />

                <div className="image-overlay">
                    <img
                        src={colors3}
                        alt="peinture"
                        className="peintureimg3"
                    />
                    <img src={colors} alt="peinture" className="peintureimg" />
                    <div className="image-overlaytext">
                        <h1>Peinture</h1>

                        <title>
                            Peinture Professionnelle pour l'Intérieur et
                            l'Extérieur - MCR Plus
                        </title>

                        <p>
                            Découvrez nos services de peinture haut de gamme
                            pour embellir votre intérieur et extérieur. Experts
                            en second œuvre, notre équipe réalise des projets de
                            peinture sur mesure. Contactez-nous pour une
                            consultation gratuite.
                        </p>

                        <h1>Services de Peinture de Qualité Supérieure</h1>

                        <p>
                            Nous sommes fiers de proposer des solutions de
                            peinture exceptionnelles pour transformer votre
                            espace intérieur et extérieur. Nos peintres
                            qualifiés et expérimentés sont engagés à vous offrir
                            des finitions impeccables et durables.
                        </p>

                        <p>
                            Notre équipe de professionnels de la peinture
                            intérieure excelle dans la création d'ambiances
                            uniques. Des choix de couleurs modernes aux
                            techniques de peinture adaptées, nous personnalisons
                            chaque projet pour répondre à vos besoins. Que vous
                            souhaitiez rafraîchir une pièce ou créer une
                            nouvelle atmosphère, nous sommes là pour réaliser
                            votre vision.
                        </p>

                        <p>
                            La peinture extérieure joue un rôle crucial dans la
                            protection de votre propriété. Nos experts en
                            peinture extérieure sont spécialisés dans
                            l'application de revêtements de qualité supérieure
                            pour une durabilité maximale. De la préparation de
                            surface à la sélection de peinture résistante aux
                            intempéries, nous assurons une protection longue
                            durée et une esthétique exceptionnelle.
                        </p>

                        <ul>
                            <li>
                                <strong>Expertise de Second Œuvre :</strong>{" "}
                                Nous sommes spécialisés dans les services de
                                second œuvre, garantissant une approche précise
                                et professionnelle.
                            </li>
                            <li>
                                <strong>Personnalisation :</strong> Chaque
                                projet est adapté à vos goûts et besoins
                                spécifiques.
                            </li>
                            <li>
                                <strong>Qualité Supérieure :</strong> Nous
                                utilisons des matériaux de peinture de haute
                                qualité pour des résultats durables.
                            </li>
                            <li>
                                <strong>Devis Gratuit :</strong> Contactez-nous
                                dès aujourd'hui pour une consultation gratuite
                                et un devis personnalisé.
                            </li>
                        </ul>
                        <div className="imagepaint">
                            <img
                                src={paint}
                                alt="peinture"
                                className="peintureimg2"
                            />
                        </div>
                        <p>
                            Prêt à donner une nouvelle vie à votre espace avec
                            notre expertise en peinture ? Contactez-nous dès
                            aujourd'hui pour discuter de votre projet. Obtenez
                            un devis gratuit et découvrez comment notre équipe
                            peut transformer votre intérieur et extérieur avec
                            des finitions de peinture exceptionnelles.
                        </p>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}

export default Peinture;
