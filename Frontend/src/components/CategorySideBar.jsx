import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IconButton, List, Typography } from "@mui/material";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import { spaceBetween } from "../styles/flexStyles";
import DropDownMenu from "./DrpoDownMenu";

const category = [
  {
    id: "fashion",
    label: "Fashion",
    path: "/fashion",
    options: [
      {
        id: "men",
        label: "Men",
        path: "/fashion/men",
        childOption: [
          { id: "shirts", label: "Shirts", path: "/fashion/men/shirts" },
          { id: "tshirts", label: "T-Shirts", path: "/fashion/men/tshirts" },
          { id: "jeans", label: "Jeans", path: "/fashion/men/jeans" },
        ],
      },
      {
        id: "women",
        label: "Women",
        path: "/fashion/women",
        childOption: [
          { id: "dresses", label: "Dresses", path: "/fashion/women/dresses" },
          { id: "tops", label: "Tops", path: "/fashion/women/tops" },
          { id: "skirts", label: "Skirts", path: "/fashion/women/skirts" },
        ],
      },
      {
        id: "kids",
        label: "Kids",
        path: "/fashion/kids",
        childOption: [
          { id: "boys", label: "Boys", path: "/fashion/kids/boys" },
          { id: "girls", label: "Girls", path: "/fashion/kids/girls" },
        ],
      },
    ],
  },
  {
    id: "electronics",
    label: "Electronics",
    path: "/electronics",
    options: [
      {
        id: "mobiles",
        label: "Mobiles",
        path: "/electronics/mobiles",
        childOption: [
          {
            id: "smartphones",
            label: "Smartphones",
            path: "/electronics/mobiles/smartphones",
          },
          {
            id: "featurephones",
            label: "Feature Phones",
            path: "/electronics/mobiles/featurephones",
          },
        ],
      },
      {
        id: "laptops",
        label: "Laptops",
        path: "/electronics/laptops",
        childOption: [
          {
            id: "gaming",
            label: "Gaming Laptops",
            path: "/electronics/laptops/gaming",
          },
          {
            id: "business",
            label: "Business Laptops",
            path: "/electronics/laptops/business",
          },
        ],
      },
      {
        id: "accessories",
        label: "Accessories",
        path: "/electronics/accessories",
        childOption: [
          {
            id: "headphones",
            label: "Headphones",
            path: "/electronics/accessories/headphones",
          },
          {
            id: "chargers",
            label: "Chargers",
            path: "/electronics/accessories/chargers",
          },
        ],
      },
    ],
  },
  {
    id: "bags",
    label: "Bags",
    path: "/bags",
    options: [
      {
        id: "handbags",
        label: "Handbags",
        path: "/bags/handbags",
        childOption: [
          {
            id: "leather",
            label: "Leather Bags",
            path: "/bags/handbags/leather",
          },
          { id: "tote", label: "Tote Bags", path: "/bags/handbags/tote" },
        ],
      },
      {
        id: "backpacks",
        label: "Backpacks",
        path: "/bags/backpacks",
        childOption: [
          {
            id: "school",
            label: "School Backpacks",
            path: "/bags/backpacks/school",
          },
          {
            id: "travel",
            label: "Travel Backpacks",
            path: "/bags/backpacks/travel",
          },
        ],
      },
    ],
  },
  {
    id: "footwear",
    label: "Footwear",
    path: "/footwear",
    options: [
      {
        id: "men",
        label: "Men",
        path: "/footwear/men",
        childOption: [
          { id: "formal", label: "Formal Shoes", path: "/footwear/men/formal" },
          { id: "sneakers", label: "Sneakers", path: "/footwear/men/sneakers" },
        ],
      },
      {
        id: "women",
        label: "Women",
        path: "/footwear/women",
        childOption: [
          { id: "heels", label: "Heels", path: "/footwear/women/heels" },
          { id: "flats", label: "Flats", path: "/footwear/women/flats" },
        ],
      },
    ],
  },
  {
    id: "groceries",
    label: "Groceries",
    path: "/groceries",
    options: [
      {
        id: "fruits",
        label: "Fruits",
        path: "/groceries/fruits",
        childOption: [
          {
            id: "fresh",
            label: "Fresh Fruits",
            path: "/groceries/fruits/fresh",
          },
          { id: "dry", label: "Dry Fruits", path: "/groceries/fruits/dry" },
        ],
      },
      {
        id: "vegetables",
        label: "Vegetables",
        path: "/groceries/vegetables",
        childOption: [
          {
            id: "leafy",
            label: "Leafy Greens",
            path: "/groceries/vegetables/leafy",
          },
          {
            id: "roots",
            label: "Root Vegetables",
            path: "/groceries/vegetables/roots",
          },
        ],
      },
    ],
  },
  {
    id: "beauty",
    label: "Beauty",
    path: "/beauty",
    options: [
      {
        id: "makeup",
        label: "Makeup",
        path: "/beauty/makeup",
        childOption: [
          {
            id: "lipstick",
            label: "Lipsticks",
            path: "/beauty/makeup/lipstick",
          },
          {
            id: "foundation",
            label: "Foundations",
            path: "/beauty/makeup/foundation",
          },
        ],
      },
      {
        id: "skincare",
        label: "Skincare",
        path: "/beauty/skincare",
        childOption: [
          { id: "creams", label: "Creams", path: "/beauty/skincare/creams" },
          { id: "serums", label: "Serums", path: "/beauty/skincare/serums" },
        ],
      },
    ],
  },
  {
    id: "wellness",
    label: "Wellness",
    path: "/wellness",
    options: [
      {
        id: "fitness",
        label: "Fitness",
        path: "/wellness/fitness",
        childOption: [
          { id: "yoga", label: "Yoga Mats", path: "/wellness/fitness/yoga" },
          {
            id: "dumbbells",
            label: "Dumbbells",
            path: "/wellness/fitness/dumbbells",
          },
        ],
      },
      {
        id: "healthcare",
        label: "Healthcare",
        path: "/wellness/healthcare",
        childOption: [
          {
            id: "supplements",
            label: "Supplements",
            path: "/wellness/healthcare/supplements",
          },
          {
            id: "devices",
            label: "Devices",
            path: "/wellness/healthcare/devices",
          },
        ],
      },
    ],
  },
  {
    id: "jewellery",
    label: "Jewellery",
    path: "/jewellery",
    options: [
      {
        id: "gold",
        label: "Gold",
        path: "/jewellery/gold",
        childOption: [
          { id: "rings", label: "Rings", path: "/jewellery/gold/rings" },
          { id: "chains", label: "Chains", path: "/jewellery/gold/chains" },
        ],
      },
      {
        id: "silver",
        label: "Silver",
        path: "/jewellery/silver",
        childOption: [
          {
            id: "bracelets",
            label: "Bracelets",
            path: "/jewellery/silver/bracelets",
          },
          {
            id: "anklets",
            label: "Anklets",
            path: "/jewellery/silver/anklets",
          },
        ],
      },
    ],
  },
];

const CategorySideBar = ({ handlerOnClick, isOpen }) => {
  const [openCategory, setOpenCategory] = useState(null);
  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation">
      <Box sx={{ borderBottom: "1px solid #ccc", p: 1, ...spaceBetween }}>
        <Typography
          variant="body1"
          sx={{ fontWeight: 500, textTransform: "capitalize" }}
        >
          Shop by Categories
        </Typography>
        <IconButton
          onClick={handlerOnClick}
          sx={{ "&:hover": { bgcolor: "action.light" } }}
        >
          <CloseTwoToneIcon fontSize="small" sx={{ color: "primary.main" }} />
        </IconButton>
      </Box>
      <List>
        {category.map((item) => (
          <DropDownMenu
            key={item.id}
            item={item}
            open={openCategory === item.id}
            onToggle={() =>
              setOpenCategory(openCategory === item.id ? null : item.id)
            }
          />
        ))}
      </List>
    </Box>
  );
  return (
    <Drawer open={isOpen} onClose={handlerOnClick}>
      {DrawerList}
    </Drawer>
  );
};

export default CategorySideBar;
