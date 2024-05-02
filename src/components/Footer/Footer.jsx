// React element
import { useNavigate } from "react-router-dom";

// Style
import "../Footer/Footer.scss";

// Logo
import whiteLogo from "../../assets/images/logo/white-logo.svg";

function Footer() {
  const navigate = useNavigate();

  function redirectionHome() {
    navigate("/");
  }

  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer className="footer">
      <img src={whiteLogo} alt="" onClick={redirectionHome} />
      <div>© {currentYear} Kasa. All rights reserved</div>
    </footer>
  );
}

export default Footer;
