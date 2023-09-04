import IntroSection from "../components/IntroSection";
import { useProductContext } from "../context/productcontex";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Tech Store",
  };

  return (
    <>
      {myName}
      <IntroSection myData={data} />
    </>
  );
};

export default About;
