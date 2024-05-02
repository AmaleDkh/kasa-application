// Style
import "../Banner/Banner.scss";

// Images
import homePageImage from "../../assets/images/banner/banner-home-page-image.jpg";
import aboutPageImage from "../../assets/images/banner/banner-about-page-image.jpg";

function Banner({ location }) {
  return (
    <>
      {location === "Home" ? (
        <div className="banner">
          <img src={homePageImage} className="banner__image" alt="" />
          <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
        </div>
      ) : (
        <div className="banner">
          <img src={aboutPageImage} className="banner__image" alt="" />
        </div>
      )}
    </>
  );
}

export default Banner;
