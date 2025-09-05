import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import HeroSwiper from "../components/Swiper/HeroSwiper";
import HomeCategSlider from "../components/Swiper/HomeCategSlider";
import FireTruckTwoToneIcon from "@mui/icons-material/FireTruckTwoTone";
import { center, spaceBetween } from "../styles/flexStyles";
import BannerSwiper from "../components/Swiper/BannerSwiper";
import PopularProductTabs from "../components/Products/PopularProductTabs";
import ProductSwiper from "../components/Swiper/ProductSwiper";
import fashion from '../assets/products/product3.png';

const products = [
  {
    id: 1,
    label: "Men's Casual Shirt",
    description: "Comfortable cotton casual shirt, perfect for daily wear.",
    category: "fashion",
    img: fashion,
    path: "/fashion/men/shirts/casual-shirt"
  },
  {
    id: 2,
    label: "Smartphone Pro X",
    description: "Latest 5G smartphone with high-speed performance and sleek design.",
    category: "electronics",
    img: "/images/products/smartphone.jpg",
    path: "/electronics/mobiles/smartphone-pro-x"
  },
  {
    id: 3,
    label: "Running Shoes",
    description: "Lightweight and durable shoes designed for comfort and speed.",
    category: "footwear",
    img: "/images/products/shoes.jpg",
    path: "/footwear/running-shoes"
  },
  {
    id: 4,
    label: "Diamond Necklace",
    description: "Elegant diamond necklace, perfect for special occasions.",
    category: "jewellery",
    img: "/images/products/necklace.jpg",
    path: "/jewellery/diamond-necklace"
  },
  {
    id: 5,
    label: "Organic Green Tea",
    description: "Refreshing and healthy organic green tea for daily wellness.",
    category: "groceries",
    img: "/images/products/green-tea.jpg",
    path: "/groceries/beverages/organic-green-tea"
  },
  {
    id: 6,
    label: "Laptop Backpack",
    description: "Durable and stylish backpack with multiple compartments.",
    category: "bags",
    img: "/images/products/backpack.jpg",
    path: "/bags-accessories/laptop-backpack"
  },
  {
    id: 7,
    label: "Yoga Mat",
    description: "Non-slip yoga mat designed for stability and comfort.",
    category: "wellness",
    img: "/images/products/yoga-mat.jpg",
    path: "/sports-fitness/yoga-mat"
  },
];

const Home = () => {
  const [productId, setProductId] = useState("");

  const filterData = products.filter((item)=>item.category === productId);
  
  return (
    <>
      <HeroSwiper />
      <HomeCategSlider />
      <Stack
        component="section"
        sx={{
          py: 10,
          mt: 3,
          backgroundColor: "secondary.main",
        }}
      >
        {/* TODO: Popular Products  */}
        <Container maxWidth="xl" sx={{ border: "2px solid red", py: 5 }}>
          <Grid container>
            <Grid size={{ xs: 12, sm: 12, md: 4 }}>
              <Typography gutterBottom variant="h4" sx={{ fontWeight: 600 }}>
                Popular Products
              </Typography>
              <Typography variant="caption" sx={{ fontWeight: 500 }}>
                Browse top-rated and trending products chosen by our shoppers.
              </Typography>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 12, md: 8 }}
              sx={{ border: "3px solid red" }}
            >
              <PopularProductTabs
                setProductId={setProductId}
              />
            </Grid>
            <Grid
              size={{ xs: 12, sm: 12, md: 12 }}
              sx={{ border: "3px solid blue", mt: 3 }}
            >
              <ProductSwiper data={filterData} />
            </Grid>
          </Grid>
        </Container>
        {/* TODO: Card Banner Swiper */}
        <Container
          maxWidth="lg"
          sx={{
            border: "3px solid #cc5500",
            ...spaceBetween,
            p: 2,
            borderRadius: 3,
          }}
        >
          <Box sx={{ ...center }}>
            <FireTruckTwoToneIcon sx={{ fontSize: "5rem" }} />
            <Typography
              variant="h3"
              sx={{ textTransform: "uppercase", fontWeight: 800, ml: 1 }}
            >
              Free Shipping
            </Typography>
          </Box>
          <Box sx={{ ...center }}>
            <Typography
              variant="body1"
              className="no-copy"
              sx={{ fontWeight: 500, textTransform: "capitalize" }}
            >
              Free Devlivery now on your first order and over $200
            </Typography>
          </Box>
          <Box sx={{ ...center }}>
            <Typography
              variant="h3"
              sx={{ textTransform: "uppercase", fontWeight: 800 }}
            >
              -Only $200*
            </Typography>
          </Box>
        </Container>
        <BannerSwiper />
      </Stack>
    </>
  );
};

export default Home;
