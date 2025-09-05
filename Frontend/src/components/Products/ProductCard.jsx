import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { center } from "../../styles/flexStyles";

const ProductCard = ({ item }) => {
  console.log("pC", item);
  return (
    <Card
      sx={{
        p: 3,
        bgcolor: "secondary.main",
        boxShadow: "none",
        border: "1px solid #ccc",
        width: "100%",
        ...center,
        flexDirection: "column",
      }}
    >
      <Box
        component="img"
        src={item.img}
        alt="item.label"
        sx={{
          width: "auto",
          height: 150,
          objectFit: "contain",
          transition: "transform 0.3s ease-in-out",
          "&:hover": { transform: "scale(1.1)" },
        }}
      />
      <CardContent>
        <Typography>{item.label}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
