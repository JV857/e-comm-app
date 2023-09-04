import { NavLink } from "react-router-dom";
import IntroImage from "../assets/images/5865.jpg";

const HeroSection = ({ myData }) => {
  const { name } = myData;

  return (
    <div className="home_intro_section">
      <div className="container">
        <div className="grid grid-two-column grid_container">
          <div className="hero-section-data">
            <h2>Welcome to </h2>
            <h1> {name} </h1>
            <p>
              Welcome to Tech Store — your tech gadget paradise! In today's
              fast-paced world, tech is essential. We've handpicked the latest
              gadgets to elevate your life, from smartphones to smart home tech.
              Quality and affordability are our priorities. Join us on the
              journey to a smarter life. Shop now at Tech Store.
            </p>
            <NavLink to="/products" className="">
              <button className="shop_now_container">Explore Products</button>
            </NavLink>
          </div>
          <div className="hero-section-image">
            <img src={IntroImage} alt="intro_img" className="img-style" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
