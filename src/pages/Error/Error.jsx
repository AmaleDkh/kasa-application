// React element
import { Link } from "react-router-dom";

// Component
import Layout from "../../components/Layout/Layout";

// Style
import "./Error.scss";

function Error() {
  return (
    <Layout>
      <div className="error">
        <div className="error__404">404</div>
        <div className="error__paragraph">
          Oups ! La page que vous demandez n'existe pas.
        </div>
        <Link to="/" className="error__redirection">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </Layout>
  );
}

export default Error;
