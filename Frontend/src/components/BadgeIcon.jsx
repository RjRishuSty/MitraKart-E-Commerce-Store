import React from "react";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import CompareTwoToneIcon from "@mui/icons-material/CompareTwoTone";
import { Badge, IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

const headerActions = [
  {
    id: "wishlist",
    label: "Wishlist",
    icon: <FavoriteTwoToneIcon sx={{color:'action.hover'}} fontSize="medium" />,
    badgeContent: 0,
    badgeColor: "error",
    to: "/wishlist",
  },
  {
    id: "cart",
    label: "Cart",
    icon: <ShoppingBagTwoToneIcon sx={{color:'action.hover'}} fontSize="medium" />,
    badgeContent: 0,
    badgeColor: "error",
    to: "/cart",
  },
  {
    id: "compare",
    label: "Compare",
    icon: <CompareTwoToneIcon sx={{color:'action.hover'}} fontSize="medium" />,
    badgeContent: 0,
    badgeColor: "error",
    to: "/compare",
  },
];

const BadgeIcon = () => {
  return (
    <>
      {headerActions.map((item) => (
        <Tooltip title={item.label} key={item.id}>
          <IconButton sx={{mx:0.5,'&:hover':{bgcolor:'action.light'}}}>
            <Badge
              badgeContent={item.badgeContent}
              color={item.badgeColor}
            >
              <Link to={item.to}>{item.icon}</Link>
            </Badge>
          </IconButton>
        </Tooltip>
      ))}
    </>
  );
};

export default BadgeIcon;
