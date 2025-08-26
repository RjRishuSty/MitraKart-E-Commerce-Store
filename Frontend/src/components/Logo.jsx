import { Box, Typography } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { center } from "../styles/flexStyles";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Box component={Link} to='/' sx={{ ...center,textDecoration:'none' }}>
      <ShoppingCartIcon sx={{ fontSize: "4rem", color: "action.hover" }} />
      <Box>
        <Typography component="span" variant="h2">
          MitraKart
        </Typography>
        <Typography
          component="p"
          variant="caption"
          sx={{ fontWeight: 600, color: "primary.contrastText",letterSpacing:3,wordSpacing:4,textTransform:'uppercase' }}
        >
          Big Mega Store
        </Typography>
      </Box>
    </Box>
  );
};

export default Logo;
