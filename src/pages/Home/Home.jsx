// Data
import accommodationsList from "../../assets/data/accommodationsList.json";

// Components
import Layout from "../../components/Layout/Layout";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";

function Home() {
  return (
    <Layout>
      <Banner location="Home" />
      <div className="card">
        {accommodationsList.map((accommodation) => (
          <div key={accommodation.id}>
            <Card accommodation={accommodation} />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Home;
