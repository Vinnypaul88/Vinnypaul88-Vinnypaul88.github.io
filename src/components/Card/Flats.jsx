import React from "react";
import { useNavigate } from "react-router-dom";
import "./Flats.css";
import peintureImage from "../../assets/colors.jpg";
import revetementImage from "../../assets/4.jpg";
import isolationImage from "../../assets/2.jpg";
import platreriesImage from "../../assets/3.jpg";
import decorationImage from "../../assets/deco.jpg";
import contactImage from "../../assets/Phone.png";

function Flats() {
    const navigate = useNavigate();

    const menu = [
        { id: 1, title: "Peinture", cover: peintureImage },
        { id: 2, title: "Revêtement de sols", cover: revetementImage },
        { id: 3, title: "Isolation", cover: isolationImage },
        { id: 4, title: "Plâtreries", cover: platreriesImage },
        { id: 5, title: "Décoration", cover: decorationImage },
        { id: 6, title: "Contact", cover: contactImage },
    ];

    return (
        <div className="BackGround">
            {menu.map((item) => (
                <div
                    className="flat"
                    key={item.id}
                    onClick={() => {
                        const targetRoute =
                            item.title.toLowerCase() === "peinture"
                                ? "/peinture"
                                : item.title.toLowerCase() ===
                                  "revêtement de sols"
                                ? "/revetement"
                                : item.title.toLowerCase() === "isolation"
                                ? "/isolation"
                                : item.title.toLowerCase() === "plâtreries"
                                ? "/platreries"
                                : item.title.toLowerCase() === "décoration"
                                ? "/decoration"
                                : item.title.toLowerCase() === "contact"
                                ? "/contact"
                                : `/apartment/${item.id}`;

                        navigate(targetRoute);
                    }}
                >
                    <div className="flatTitle">{item.title}</div>
                    <img src={item.cover} alt={item.title} />
                </div>
            ))}
        </div>
    );
}

export default Flats;
