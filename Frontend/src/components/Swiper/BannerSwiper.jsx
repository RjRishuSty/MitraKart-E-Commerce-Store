import React from "react";
import { Box, Container } from "@mui/material";
import banner1 from "../../assets/banner/banner1.webp";
import banner2 from "../../assets/banner/banner2.webp";
import banner3 from "../../assets/banner/banner3.webp";
import banner4 from "../../assets/banner/banner4.webp";
import banner5 from "../../assets/banner/banner5.webp";
import banner6 from "../../assets/banner/banner6.webp";
import banner7 from "../../assets/banner/banner7.webp";
import banner8 from "../../assets/banner/banner8.webp";
import banner9 from "../../assets/banner/banner9.webp";
import banner10 from "../../assets/banner/banner10.webp";
import banner11 from "../../assets/banner/banner11.jpg";
import banner12 from "../../assets/banner/banner12.jpg";
import banner13 from "../../assets/banner/banner13.jpg";
//  Correct imports
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// Import required modules
import { Navigation } from "swiper/modules";
import SwiperCard from "../Cards/SwiperCard";

const categories = [
  { id: 1, label: "Fashion", imageUrl: banner1 },
  { id: 2, label: "Electronics", imageUrl: banner2 },
  { id: 3, label: "bags", imageUrl: banner3 },
  { id: 4, label: "Footwear", imageUrl: banner4 },
  { id: 5, label: "Groceries", imageUrl: banner5 },
  { id: 6, label: "Beauty", imageUrl: banner6 },
  { id: 7, label: "Wellness", imageUrl: banner7 },
  { id: 8, label: "Jewellery", imageUrl: banner8 },
  { id: 9, label: "Jewellery", imageUrl: banner9 },
  { id: 10, label: "Beauty", imageUrl: banner10 },
  { id: 11, label: "Wellness", imageUrl: banner11 },
  { id: 12, label: "Jewellery", imageUrl: banner12 },
  { id: 13, label: "Jewellery", imageUrl: banner13 },
];

const BannerSwiper = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 2, mt: 3 }}>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={10}
        className="categorySwiper"
        style={{ width: "100%" }}
      >
        {categories.map((item) => (
          <SwiperSlide key={item.id}>
            <SwiperCard item={item} useIn="banner" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default BannerSwiper;
