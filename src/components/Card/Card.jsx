// React element
import { Link } from "react-router-dom";

// Style
import "./Card.scss";

function Card({ accomodation }) {
  return (
    <Link to={`accomodations/${accomodation.id}`}>
      <div key={accomodation.id} className="card__container">
        <img src={accomodation.cover} alt="" />
        <span className="card__container__title">{accomodation.title}</span>
      </div>
    </Link>
  );
}

export default Card;
