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
      {commitmentsList.map((element, index) => (
        <div className="commitment-container" key={`${index}-${element}`}>
          <Collapse
            key={element.id}
            name={element.name}
            content={element.content}
          />
        </div>
      ))}
    </Layout>
  );
}

export default About;
