import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { center } from "../../styles/flexStyles";
import { Link } from "react-router-dom";

const SwiperCard = ({ item,useIn }) => {
  const isBannerCard = useIn === 'banner';
  return (
    <Card
      component={Link}
      to={item.path}
      sx={{
        width: "100%",
        bgcolor: "#fff",
        ...center,
        flexDirection: "column",
        p: 1,
        boxShadow: "none",
        borderRadius: 5,
        cursor: "pointer",
        textDecoration: "none",
      }}
    >
      <Box
        component="img"
        src={item.imageUrl}
        alt={item.label}
        sx={{
          width: "100%",
          borderRadius:5,
          height:isBannerCard?'auto': "100px",
          objectFit: isBannerCard?'cover':"contain",
          objectPosition: "center",
          transition: "transform 0.3s ease-in-out",
          "&:hover": { transform: isBannerCard?"scale(1.1) rotate(2deg)":"scale(1.2,1.1)" },
        }}
      />
      {
        !isBannerCard &&<CardContent>
        <Typography
          variant="body1"
          sx={{
            textTransform: "capitalize",
            fontWeight: 500,
            transition:"transform 0.3s ease-in-out",
            "&:hover": {transform:'scale(1.2, 1.2)', color: "action.hover" },
          }}
        >
          {item.label}
        </Typography>
      </CardContent>
      }
    </Card>
  );
};

export default SwiperCard;
