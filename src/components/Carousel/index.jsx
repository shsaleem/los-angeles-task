import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { images, settings } from "../../utils/carouselData";
import "./styles.css";

const Carousel = () => {
  const renderSlides = images.map((image) => {
    const { id, src, alt } = image;
    return (
      <div key={id}>
        <img className="slider-image" src={src} alt={alt} />
      </div>
    );
  });

  return (
    <div className="slider-section">
      <Slider {...settings}>{renderSlides}</Slider>
    </div>
  );
};

export default Carousel;
