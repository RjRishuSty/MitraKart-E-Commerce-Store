import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// Import required modules
import { Navigation } from "swiper/modules";
import ProductCard from "../Products/ProductCard";

const ProductSwiper = ({data}) => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      slidesPerView={5}
      spaceBetween={10}
      className="productSwiper"
      style={{ width: "100%" }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <ProductCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSwiper;
