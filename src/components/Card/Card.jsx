// React element
import { Link } from "react-router-dom";

// Style
import "./Card.scss";

function Card({ accommodation }) {
  return (
    <Link to={`accommodations/${accommodation.id}`}>
      <div key={accommodation.id} className="card__container">
        <img src={accommodation.cover} alt="" />
        <span className="card__container__title">{accommodation.title}</span>
      </div>
    </Link>
  );
}

export default Card;
