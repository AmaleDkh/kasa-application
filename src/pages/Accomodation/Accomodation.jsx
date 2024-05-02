// React elements
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

// Data
import accomodationsList from "../../assets/data/accomodationsList.json";

// Components
import Layout from "../../components/Layout/Layout";
import Slideshow from "../../components/Slideshow/Slideshow";
import Stars from "../../components/Stars/Stars";
import Tag from "../../components/Tag/Tag";
import Collapse from "../../components/Collapse/Collapse";

// Style
import "../Accomodation/Accomodation.scss";

function Accomodation() {
  const { id } = useParams();
  const accomodation = accomodationsList.find(
    (accomodation) => accomodation.id === id
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (!accomodation) {
      navigate("/404");
    }
  }, [navigate, accomodation]);

  let firstName;
  let lastName;
  if (accomodation) {
    [firstName, lastName] = accomodation.host.name.split(" ");
  }

  return (
    <Layout>
      {accomodation && (
        <div className="accomodation" key={accomodation.id}>
          <Slideshow pictures={accomodation.pictures} />

          <div className="accomodation__container">
            <div className="accomodation-container__principal-information">
              <div>
                <div className="accomodation__container__principal-information__title">
                  {accomodation.title}
                </div>
                <div className="accomodation__container__principal-information__location">
                  {accomodation.location}
                </div>
              </div>

              <Tag tags={accomodation.tags} />
            </div>

            <div className="accomodation__container__second-content">
              <div className="accomodation__container__principal-information__host">
                <div className="accomodation__container__principal-information__host__identity">
                  <div className="accomodation__container__principal-information__host__identity__firstname">
                    {firstName}
                  </div>
                  <div className="accomodation__container__principal-information__host__identity__lastname">
                    {lastName}
                  </div>
                </div>
                <img
                  src={accomodation.host.picture}
                  alt=""
                  className="accomodation__container__principal-information__host__picture"
                />
              </div>

              <Stars rating={accomodation.rating} />
            </div>
          </div>

          <div className="accomodation__container__third-content">
            <Collapse name={"Description"} content={accomodation.description} />
            <Collapse name={"Équipements"} content={accomodation.equipments} />
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Accomodation;
