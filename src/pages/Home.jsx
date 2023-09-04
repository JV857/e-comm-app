import FeatureProduct from "../components/FeatureProduct";
import IntroSection from "../components/IntroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";

const Home = () => {
  const data = {
    name: "Tech Store",
  };

  return (
    <>
      <IntroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
