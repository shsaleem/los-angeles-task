import img1 from "../assets/images/photo-1417021423914-070979c8eb34.jpg";
import img2 from "../assets/images/photo-1443980995706-8d107e98e707.jpg";
import img3 from "../assets/images/photo-1458442310124-dde6edb43d10.jpg";

const images = [
  {
    id: 1,
    src: img1,
    alt: "image 1",
  },
  {
    id: 2,
    src: img2,
    alt: "Image 2",
  },
  {
    id: 3,
    src: img3,
    alt: "Image 3",
  },
  {
    id: 4,
    src: img1,
    alt: "Image 4",
  },
  {
    id: 5,
    src: img3,
    alt: "image 5",
  },
];

const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 4,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        swipeToSlide: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        swipeToSlide: true,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        swipeToSlide: true,
        slidesToShow: 1,
      },
    },
  ],
};

export { images, settings };
