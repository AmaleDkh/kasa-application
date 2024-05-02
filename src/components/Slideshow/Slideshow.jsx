// React element
import { useState } from "react";

// Style
import "../Slideshow/Slideshow.scss";

// Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Slideshow({ pictures }) {
  const [currentPicture, setCurrentPicture] = useState(pictures[0]);

  function showNextImage() {
    let index = pictures.indexOf(currentPicture);

    if (currentPicture) {
      if (index !== pictures.length - 1) {
        setCurrentPicture(pictures[index + 1]);
      } else {
        setCurrentPicture(pictures[0]);
      }
    }
  }

  function showPreviousImage() {
    let index = pictures.indexOf(currentPicture);

    if (currentPicture) {
      if (index !== 0) {
        setCurrentPicture(pictures[index - 1]);
      } else {
        setCurrentPicture(pictures[pictures.length - 1]);
      }
    }
  }

  return (
    <div className="slideshow-pictures-container">
      {pictures.length > 1 ? (
        <>
          <FontAwesomeIcon icon={faAngleLeft} onClick={showPreviousImage} />
          <img src={currentPicture} alt="" />
          <FontAwesomeIcon icon={faAngleRight} onClick={showNextImage} />
          <div className="slideshow-pictures-container__counter">
            {pictures.indexOf(currentPicture) + 1} / {pictures.length}
          </div>
        </>
      ) : (
        <img src={currentPicture} alt="" />
      )}
    </div>
  );
}

export default Slideshow;
