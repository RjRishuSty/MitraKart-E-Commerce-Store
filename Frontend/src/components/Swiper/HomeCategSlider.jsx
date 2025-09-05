import { Box, Container, Stack } from "@mui/material";
import React from "react";
import fashion from "../../assets/products/fashion.png";
import electronic from "../../assets/products/electronic.png";
import bags from "../../assets/products/bags.png";
import footwear from "../../assets/products/footwear.png";
import groceries from "../../assets/products/groceries.png";
import beauty from "../../assets/products/beauty.png";
import jewelry from "../../assets/products/jewelry.png";
import wellness from "../../assets/products/wellness.png";
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
  { id: 2, label: "Electronics", imageUrl: electronic },
  { id: 3, label: "bags", imageUrl: bags },
  { id: 4, label: "Footwear", imageUrl: footwear },
  { id: 5, label: "Groceries", imageUrl: groceries },
  { id: 6, label: "Beauty", imageUrl: beauty },
  { id: 7, label: "Wellness", imageUrl: wellness },
  { id: 8, label: "Jewellery", imageUrl: beauty },
  { id: 9, label: "Jewellery", imageUrl: jewelry },
];

const HomeCategSlider = () => {
  return (
    <Box sx={{ width: "100%", py: 2}}>
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
