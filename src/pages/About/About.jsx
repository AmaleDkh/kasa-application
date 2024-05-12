// Data
import commitmentsList from "../../assets/data/commitmentsList.json";

// Components
import Layout from "../../components/Layout/Layout";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";

// Style
import "./About.scss";

function About() {
  return (
    <Layout>
      <Banner location="About" />
      <div className="commitments">
        {commitmentsList.map((element, index) => (
          <Collapse
            key={element.id}
            className="commitment-container"
            name={element.name}
            content={element.content}
          />
        ))}
      </div>
    </Layout>
  );
}

export default About;
