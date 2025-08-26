import { Box } from "@mui/material";
import React from "react";
import slider2 from "../../assets/slider-2.jpg";
import slider3 from "../../assets/slider-3.jpg";
import slider4 from "../../assets/slider-4.jpg";
import slider5 from "../../assets/slider-5.jpg";
import slider6 from "../../assets/slider-6.jpg";
import slider7 from "../../assets/slider-7.jpg";
import slider8 from "../../assets/slider-8.jpg";
import slider9 from "../../assets/slider-9.jpg";
import slider10 from "../../assets/slider-10.jpg";
// Correct imports
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import required modules
import { Navigation, Pagination } from "swiper/modules";

const sliderImages = [
  {
    id: 1,
    imageUrl: slider2,
  },
  {
    id: 2,
    imageUrl: slider3,
  },
  {
    id: 3,
    imageUrl: slider4,
  },
  {
    id: 4,
    imageUrl: slider5,
  },
  {
    id: 5,
    imageUrl: slider6,
  },
  {
    id: 6,
    imageUrl: slider7,
  },
  {
    id: 7,
    imageUrl: slider8,
  },

  {
    id: 8,
    imageUrl: slider9,
  },
  {
    id: 9,
    imageUrl: slider10,
  },
];

const HeroSwiper = () => {
  return (
    <Box sx={{py:2}}>
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination]}
        className="heroSwiper"
        slidesPerView={1.1} 
        centeredSlides={true} 
        spaceBetween={10} 
        pagination={{ clickable: true }}
      >
        {sliderImages.map((item) => (
          <SwiperSlide key={item.id}>
            <Box
              component="img"
              src={item.imageUrl}
              alt="slider"
              sx={{
                width: "100%",
                height: 450,
                borderRadius:5,
                objectPosition: "center",
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HeroSwiper;
