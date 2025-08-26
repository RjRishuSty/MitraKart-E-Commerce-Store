import { Box, Container, Stack } from "@mui/material";
import React from "react";
import fashion from "../../assets/products/fashion.png";
import product1 from "../../assets/products/product1.png";
import product2 from "../../assets/products/product2.png";
import product3 from "../../assets/products/product3.png";
import product4 from "../../assets/products/product4.png";
import product5 from "../../assets/products/product5.png";
//  Correct imports
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// Import required modules
import { Navigation } from "swiper/modules";
import SwiperCard from "../Cards/SwiperCard";

const categories = [
  { id: 1, label: "Fashion", imageUrl: fashion },
  { id: 2, label: "Electronics", imageUrl: product1 },
  { id: 3, label: "bags", imageUrl: product2 },
  { id: 4, label: "Footwear", imageUrl: product3 },
  { id: 5, label: "Groceries", imageUrl: product4 },
  { id: 6, label: "Beauty", imageUrl: product5 },
  { id: 7, label: "Wellness", imageUrl: product5 },
  { id: 8, label: "Jewellery", imageUrl: product5 },
];

const HomeCategSlider = () => {
  return (
    <Box sx={{ width: "100%", py: 2, pb: 10 }}>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={6}
        spaceBetween={20}
        className="categorySwiper"
        style={{ width: "90%" }}
        
      >
        {categories.map((item) => (
          <SwiperSlide key={item.id}>
            <SwiperCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HomeCategSlider;
