// React elements
import { Link, useLocation, useNavigate } from "react-router-dom";

// Style
import "../Header/Header.scss";

// Logo
import pinkLogo from "../../assets/images/logo/pink-logo.svg";

function Header() {
  const location = useLocation();

  const navigate = useNavigate();

  function redirectionHome() {
    navigate("/");
  }

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__nav__logo">
          <img src={pinkLogo} alt="" onClick={redirectionHome} />
        </div>

        <div className="header__nav__links">
          <Link to="/" className={location.pathname === "/" ? "active" : null}>
            Accueil
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : null}
          >
            À propos
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
