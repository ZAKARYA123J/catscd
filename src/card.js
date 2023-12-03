import { Box, IconButton } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Assuming you have FontAwesome icons

import image1 from './slide/1147a.jpg';
import image2 from './slide/1148a.jpg';
import image3 from './slide/1149a.jpg';
import image4 from './slide/1150a.jpg';
import image5 from './slide/1151a.jpg';
import image6 from './slide/1152a.jpg';

function Card() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const NextArrow = ({ onClick }) => (
    <IconButton
      icon={<FaChevronRight />}
      onClick={onClick}
      position="absolute"
      right="0"
      top="50%"
      transform="translateY(-50%)"
      zIndex="1"
    />
  );

  const PrevArrow = ({ onClick }) => (
    <IconButton
      icon={<FaChevronLeft />}
      onClick={onClick}
      position="absolute"
      left="0"
      top="50%"
      transform="translateY(-50%)"
      zIndex="1"
    />
  );

  return (
    <Box boxSize={400} position="relative">
      <Slider {...sliderSettings} nextArrow={<NextArrow />} prevArrow={<PrevArrow />}>
        <div>
          <img src={image1} alt="slide 1" />
        </div>
        <div>
          <img src={image2} alt="slide 2" />
        </div>
        
        <div >
          <img src={image4} alt="slide 4" />
        </div>
        <div>
          <img src={image5} alt="slide 5" />
        </div>
        <div>
          <img src={image6} alt="slide 6" />
        </div>
      </Slider>
    </Box>
  );
}

export default Card;
