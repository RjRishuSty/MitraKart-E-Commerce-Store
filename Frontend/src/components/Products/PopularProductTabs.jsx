import { Box, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";

const popularCategories = [
  {
    id: "fashion",
    name: "Fashion",
  },
  {
    id: "electronics",
    name: "Electronics",
  },
  {
    id: "footwear",
    name: "Footwear",
  },
  {
    id: "beauty",
    name: "Beauty & Wellness",
  },
  {
    id: "groceries",
    name: "Groceries",
  },
  {
    id: "jewellery",
    name: "Jewellery",
  },
];

const PopularProductTabs = ({ setProductId }) => {
  const [value, setValue] = useState(popularCategories[0].id);
  useEffect(() => {
    setProductId(value);
  }, [value]);

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        variant="scrollable"
        scrollButtons="auto"
      >
        {popularCategories.map((item) => (
          <Tab
            key={item.id}
            label={item.name}
            value={item.id}
            sx={{
              textTransform: "capitalize",
              "&:hover": { color: "action.hover" },
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default PopularProductTabs;
