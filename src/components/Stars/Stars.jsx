// Style
import "./Stars.scss";

// Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Stars({ rating }) {
  return (
    <div className="rating-stars">
      {Array.from({ length: 5 }).map((rangeElem, index) => (
        <span key={`${index}-${index.toString()}`}>
          <FontAwesomeIcon
            icon={faStar}
            className={
              rating > index
                ? "rating-stars__validated"
                : "rating-stars__not-validated"
            }
          />
        </span>
      ))}
    </div>
  );
}

export default Stars;
