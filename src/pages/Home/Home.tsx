import ExploreContainer from "../../components/ExploreContainer/ExploreContainer";
import Layout from "../../components/Layout/Layout";

const Home: React.FC = () => {
  return <Layout children={<ExploreContainer />} title="Home" />;
};

export default Home;
