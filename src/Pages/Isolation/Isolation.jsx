// Peinture.jsx
import React, { useEffect } from "react";
import Isolationimg from "../../assets/Iso.jpg";
import Isolationimg2 from "../../assets/iso2.png";
import Logo from "../../components/Logo/Logo";
import Footer from "../../components/Footer/Footer";
import "./Isolation.css";
function Isolation() {
    useEffect(() => {
      
        window.scrollTo(0, 0);
    }, []); 

    return (
        <div class="page-containeriso">
            <div className="peinture-containeriso">
                <Logo />

                <div className="image-overlayiso">
                    <img
                        src={Isolationimg2}
                        alt="Isolation"
                        className="Isolationimgiso2"
                    />
                    <img
                        src={Isolationimg}
                        alt="Isolation"
                        className="Isolationimgiso"
                    />
                    <div className="image-overlaytextiso">
                        <h1>Isolation</h1>

                        <p>
                            "Découvrez nos solutions d'isolation de haute
                            qualité pour améliorer le confort de votre espace.
                            MCR PLUS offre des services d'isolation
                            professionnelle, alliant expertise technique et
                            matériaux innovants. Isolation thermique, acoustique
                            et écologique pour une maison saine et économe en
                            énergie. Contactez-nous pour un devis personnalisé."
                        </p>
                        <h2>Contenu de la page :</h2>

                        <p>
                            Bienvenue sur la page dédiée à l'isolation MCR PLUS.
                            Nous sommes spécialisés dans la fourniture de
                            solutions d'isolation de haute performance pour les
                            projets du second œuvre. Notre équipe d'experts met
                            à votre disposition son savoir-faire pour assurer
                            une isolation thermique, acoustique et écologique
                            optimale, répondant aux normes les plus strictes.
                        </p>
                        <h2>Nos services d'isolation :</h2>
                        <p>
                            Isolation Thermique : Maximisez l'efficacité
                            énergétique de votre habitat avec nos solutions
                            d'isolation thermique de pointe. Réduisez vos coûts
                            de chauffage et profitez d'un environnement
                            intérieur confortable toute l'année. Isolation
                            Acoustique : Créez un espace paisible et préservé du
                            bruit avec nos techniques d'isolation acoustique.
                            Idéal pour les habitations, les bureaux ou tout lieu
                            nécessitant une tranquillité sonore. Isolation
                            Écologique : Contribuez à la préservation de
                            l'environnement en optant pour nos matériaux
                            d'isolation écologiques. Des solutions durables qui
                            conjuguent performance et respect de la planète.
                        </p>
                        <h2>
                            Pourquoi choisir MCR PLUS pour votre isolation ?
                        </h2>
                        <p>
                            Expertise Technique : Notre équipe qualifiée
                            garantit une installation conforme aux normes et aux
                            meilleures pratiques du secteur. Matériaux de
                            Qualité : Nous utilisons des matériaux de première
                            qualité, assurant une isolation efficace et durable.
                            Devis Personnalisé : Contactez-nous dès aujourd'hui
                            pour obtenir un devis personnalisé adapté à vos
                            besoins spécifiques. Choisissez MCR PLUS pour une
                            isolation de qualité, synonyme de confort,
                            d'économie d'énergie et de bien-être au quotidien.
                            Contactez-nous pour démarrer votre projet
                            d'isolation dès maintenant.
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
                                utilisons des matériaux de haute qualité pour
                                des résultats durables.
                            </li>
                            <li>
                                <strong>Devis Gratuit :</strong> Contactez-nous
                                dès aujourd'hui pour une consultation gratuite
                                et un devis personnalisé.
                            </li>
                        </ul>

                        <p>
                            Prêt à donner une nouvelle vie à votre espace avec
                            notre expertise en isolation ? Contactez-nous dès
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
export default Isolation;
