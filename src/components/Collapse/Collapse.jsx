// React elements
import { useState } from "react";

// Style
import "./Collapse.scss";

// Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

function Collapse({ name, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse-container">
      <div className="collapse-container__card">
        <p className="collapse-container__card__name">{name}</p>
        <FontAwesomeIcon
          icon={faAngleUp}
          className={`collapse-container__card__icon ${isOpen ? `angle-down` : ""}`}
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        />
      </div>

      <div
        className={`collapse-container__content ${isOpen ? "expanded" : "closed"}`}
      >
        {Array.isArray(content)
          ? content.map((element, index) => (
              <div key={`${index}-${element}`}>{element}</div>
            ))
          : content}
      </div>
    </div>
  );
}

export default Collapse;
