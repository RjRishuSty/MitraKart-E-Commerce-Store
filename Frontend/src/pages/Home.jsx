import { Typography } from "@mui/material";
import React from "react";
import HeroSwiper from "../components/Swiper/HeroSwiper";
import HomeCategSlider from "../components/Swiper/HomeCategSlider";

const Home = () => {
  return (
    <>
      <HeroSwiper />
      <HomeCategSlider/>
    </>
  );
};

export default Home;
