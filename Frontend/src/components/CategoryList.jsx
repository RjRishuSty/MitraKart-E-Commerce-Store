import { Box, Button } from "@mui/material";
import React, { useState } from "react";

const menuItems = [
  {
    id: "fashion",
    label: "Fashion",
    options: [
      {
        id: "men",
        label: "Men",
        childOption: [
          { id: "shirts", label: "Shirts", path: "/fashion/men/shirts" },
          { id: "tshirts", label: "T-Shirts", path: "/fashion/men/tshirts" },
          { id: "jeans", label: "Jeans", path: "/fashion/men/jeans" },
        ],
      },
      {
        id: "women",
        label: "Women",
        childOption: [
          { id: "dresses", label: "Dresses", path: "/fashion/women/dresses" },
          { id: "tops", label: "Tops", path: "/fashion/women/tops" },
          { id: "skirts", label: "Skirts", path: "/fashion/women/skirts" },
        ],
      },
      {
        id: "kids",
        label: "Kids",
        childOption: [
          {
            id: "boys",
            label: "Boys",
            subChildOption: [
              {
                id: "shirts",
                label: "Shirts",
                path: "/fashion/kids/boys/shirts",
              },
              {
                id: "shorts",
                label: "Shorts",
                path: "/fashion/kids/boys/shorts",
              },
            ],
          },
          {
            id: "girls",
            label: "Girls",
            subChildOption: [
              {
                id: "frocks",
                label: "Frocks",
                path: "/fashion/kids/girls/frocks",
              },
              {
                id: "leggings",
                label: "Leggings",
                path: "/fashion/kids/girls/leggings",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "electronics",
    label: "Electronics",
    options: [
      {
        id: "mobiles",
        label: "Mobiles",
        childOption: [
          {
            id: "smartphones",
            label: "Smartphones",
            path: "/electronics/mobiles/smartphones",
          },
          {
            id: "accessories",
            label: "Accessories",
            path: "/electronics/mobiles/accessories",
          },
        ],
      },
      {
        id: "laptops",
        label: "Laptops",
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
    ],
  },
  {
    id: "bags",
    label: "Bags",
    options: [
      { id: "backpacks", label: "Backpacks", path: "/bags/backpacks" },
      { id: "handbags", label: "Handbags", path: "/bags/handbags" },
      { id: "trolley", label: "Trolley Bags", path: "/bags/trolley" },
    ],
  },
  {
    id: "footwear",
    label: "Footwear",
    options: [
      { id: "sports", label: "Sports Shoes", path: "/footwear/sports" },
      { id: "casual", label: "Casual Shoes", path: "/footwear/casual" },
      { id: "sandals", label: "Sandals", path: "/footwear/sandals" },
    ],
  },
  {
    id: "groceries",
    label: "Groceries",
    options: [
      { id: "fruits", label: "Fruits", path: "/groceries/fruits" },
      { id: "vegetables", label: "Vegetables", path: "/groceries/vegetables" },
      { id: "snacks", label: "Snacks", path: "/groceries/snacks" },
    ],
  },
  {
    id: "beauty",
    label: "Beauty",
    options: [
      { id: "makeup", label: "Makeup", path: "/beauty/makeup" },
      { id: "skincare", label: "Skincare", path: "/beauty/skincare" },
      { id: "fragrances", label: "Fragrances", path: "/beauty/fragrances" },
    ],
  },
  {
    id: "wellness",
    label: "Wellness",
    options: [
      { id: "nutrition", label: "Nutrition", path: "/wellness/nutrition" },
      { id: "fitness", label: "Fitness", path: "/wellness/fitness" },
      { id: "yoga", label: "Yoga", path: "/wellness/yoga" },
    ],
  },
  {
    id: "jewellery",
    label: "Jewellery",
    options: [
      { id: "gold", label: "Gold", path: "/jewellery/gold" },
      { id: "silver", label: "Silver", path: "/jewellery/silver" },
      { id: "diamond", label: "Diamond", path: "/jewellery/diamond" },
    ],
  },
];


const CategoryList = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredChild, setHoveredChild] = useState(null);
  const [hoveredSubChild, setHoveredSubChild] = useState(null);

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      {menuItems.map((item) => (
        <Box
          key={item.id}
          onMouseEnter={() => setHoveredCategory(item.id)}
          onMouseLeave={() => setHoveredCategory(null)}
          sx={{ position: "relative" }}
        >
          {/* Top-level categories */}
          <Button
            variant="button"
            sx={{ fontWeight: 600, textTransform: "capitalize","&:hover":{color:'action.hover'} }}
          >
            {item.label}
          </Button>

          {/* 1st level dropdown */}
          {hoveredCategory === item.id && item.options && (
            <Box
              sx={{
                bgcolor: "white",
                borderRadius: 2,
                position: "absolute",
                top: "100%",
                left: 0,
                minWidth: 200,
                // p: 1,
                zIndex: 10,
                boxShadow: 2,
              }}
            >
              {item.options.map((sub) => (
                <Box
                  key={sub.id}
                  sx={{ position: "relative" }}
                  onMouseEnter={() => setHoveredChild(sub.id)}
                  onMouseLeave={() => setHoveredChild(null)}
                >
                  <Button
                    fullWidth
                    sx={{
                      justifyContent: "flex-start",
                      textTransform: "capitalize",
                      "&:hover":{color:'action.hover',fontWeight:600,bgcolor:'action.light'}
                    }}
                    href={sub.path}
                  >
                    {sub.label}
                  </Button>

                  {/* 2nd level dropdown */}
                  {hoveredChild === sub.id && sub.childOption && (
                    <Box
                      sx={{
                        position: "absolute",
                        left: "100%",
                        top: 0,
                        bgcolor: "white",
                        borderRadius:2,
                        minWidth: 180,
                        mt:2,
                        zIndex: 20,
                        boxShadow: 2,
                      }}
                    >
                      {sub.childOption.map((child) => (
                        <Box
                          key={child.id}
                          sx={{ position: "relative" }}
                          onMouseEnter={() => setHoveredSubChild(child.id)}
                          onMouseLeave={() => setHoveredSubChild(null)}
                        >
                          <Button
                            fullWidth
                            sx={{
                              justifyContent: "flex-start",
                              textTransform: "capitalize",
                                "&:hover":{color:'action.hover',fontWeight:600,bgcolor:'action.light'}
                            }}
                            href={child.path}
                          >
                            {child.label}
                          </Button>

                          {/* 3rd level dropdown */}
                          {hoveredSubChild === child.id &&
                            child.subChildOption && (
                              <Box
                                sx={{
                                  position: "absolute",
                                  left: "100%",
                                  top: 0,
                                  bgcolor: "white",
                                  borderRadius:2,
                                  mt:2,
                                  minWidth: 160,
                                  zIndex: 30,
                                  boxShadow: 2,
                                }}
                              >
                                {child.subChildOption.map((subChild) => (
                                  <Button
                                    key={subChild.id}
                                    fullWidth
                                    sx={{
                                      justifyContent: "flex-start",
                                      textTransform: "capitalize",
                                        "&:hover":{color:'action.hover',fontWeight:600,bgcolor:'action.light'}
                                    }}
                                    href={subChild.path}
                                  >
                                    {subChild.label}
                                  </Button>
                                ))}
                              </Box>
                            )}
                        </Box>
                      ))}
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default CategoryList;
