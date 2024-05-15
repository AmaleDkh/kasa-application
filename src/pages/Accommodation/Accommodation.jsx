// React elements
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

// Data
import accommodationsList from "../../assets/data/accommodationsList.json";

// Components
import Layout from "../../components/Layout/Layout";
import Slideshow from "../../components/Slideshow/Slideshow";
import Stars from "../../components/Stars/Stars";
import Tag from "../../components/Tag/Tag";
import Collapse from "../../components/Collapse/Collapse";

// Style
import "./Accommodation.scss";

function Accommodation() {
  const { id } = useParams();
  const accommodation = accommodationsList.find(
    (accommodation) => accommodation.id === id
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (!accommodation) {
      navigate("/404");
    }
  }, [navigate, accommodation]);

  let firstName;
  let lastName;
  if (accommodation) {
    [firstName, lastName] = accommodation.host.name.split(" ");
  }

  return (
    <Layout>
      {accommodation && (
        <div className="accommodation-container" key={accommodation.id}>
          <Slideshow pictures={accommodation.pictures} />

          <div className="accommodation-container__first-content">
            <div className="accommodation-container__first-content__location-information">
              <div>
                <div className="accommodation-container__first-content__location-information__title">
                  {accommodation.title}
                </div>
                <div className="accommodation-container__first-content__location-information__location">
                  {accommodation.location}
                </div>
              </div>

              <Tag tags={accommodation.tags} />
            </div>

            <div className="accommodation-container__first-content__host">
              <div className="accommodation-container__first-content__host__information">
                <div className="accommodation-container__first-content__host__information__identity">
                  <div>
                    {firstName}
                  </div>
                  <div>
                    {lastName}
                  </div>
                </div>
                <img
                  src={accommodation.host.picture}
                  alt=""
                  className="accommodation-container__first-content__host__information__picture"
                />
              </div>

              <Stars rating={accommodation.rating} />
            </div>
          </div>

          <div className="accommodation-container__second-content">
            <Collapse
              name={"Description"}
              content={accommodation.description}
            />
            <Collapse name={"Équipements"} content={accommodation.equipments} />
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Accommodation;
