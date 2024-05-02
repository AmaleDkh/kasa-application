// Data
import accomodationsList from "../../assets/data/accomodationsList.json";

// Components
import Layout from "../../components/Layout/Layout";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";

function Home() {
  return (
    <Layout>
      <Banner location="Home" />
      <div className="card">
        {accomodationsList.map((accomodation) => (
          <div key={accomodation.id}>
            <Card accomodation={accomodation} />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Home;
