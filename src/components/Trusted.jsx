import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Trusted = () => {
  const responsiveConfig = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 4,
      // partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };
  const items = [
    {
      id: 1,
      image:
        "https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png",
      imageAlt: "partner1",
    },
    {
      id: 2,
      image:
        "https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png",
      imageAlt: "partner2",
    },
    {
      id: 3,
      image:
        "https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png",
      imageAlt: "partner3",
    },
    {
      id: 4,
      image:
        "https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png",
      imageAlt: "partner4",
    },
    {
      id: 5,
      image:
        "https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png",
      imageAlt: "partner5",
    },
  ];

  return (
    <div className="brand-section">
      <div className="container">
        <h3>Our Partners</h3>
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-padding-bottom"
          dotListClass=""
          // customButtonGroup={buttonGroup}
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={responsiveConfig}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {items &&
            items.map((item) => {
              // console.log("item", item);
              return (
                <div className="" key={item.id}>
                  <img src={item?.image} alt="trusted-brands" />
                </div>
              );
            })}
        </Carousel>
      </div>
    </div>
  );
};

export default Trusted;
