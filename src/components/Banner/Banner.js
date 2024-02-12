import bannerImage from "../../assets/House.png";
import "./Banner.css";

function Banner() {
    return (
        <div className="mcrBanner">
            <h1></h1>
            <img src={bannerImage} alt="banner Image" className="bannerImage" />
        </div>
    );
}

export default Banner;
