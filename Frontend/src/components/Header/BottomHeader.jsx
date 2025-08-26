import { Box, Button, Grid, Stack } from "@mui/material";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import ArrowDropDownTwoToneIcon from "@mui/icons-material/ArrowDropDownTwoTone";
import RocketLaunchTwoToneIcon from "@mui/icons-material/RocketLaunchTwoTone";
import React, {  useState } from "react";
import CategoryList from "../CategoryList";
import { spaceBetween } from "../../styles/flexStyles";
import CategorySideBar from "../CategorySideBar";

const BottomHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenCategoryPannel = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <Stack
        sx={{
          width: "100%",
          padding: "5px 25px",
          ...spaceBetween,
          flexDirection: "row",
          mb: 0.7,
        }}
      >
        <Button
          size="large"
          variant="button"
          onClick={handleOpenCategoryPannel}
          sx={{
            letterSpacing: 0.7,
            fontWeight: 600,
            "&:hover": { color: "action.hover" },
          }}
          startIcon={<MenuTwoToneIcon fontSize="large" />}
          endIcon={<ArrowDropDownTwoToneIcon fontSize="large" />}
        >
          Shop By Categories
        </Button>

        <Box>
            <CategoryList />
        </Box>

        <Button
          startIcon={<RocketLaunchTwoToneIcon fontSize="medium" />}
          size="medium"
          variant="button"
          sx={{
            letterSpacing: 0.5,
            textTransform: "capitalize",
            fontWeight: 600,
            "&:hover": { color: "action.hover" },
          }}
        >
          Free International Delivery
        </Button>
      </Stack>

      {/* //* Category Sidebar pannel component */}
      {isOpen && (
        <CategorySideBar
          handlerOnClick={handleOpenCategoryPannel}
          isOpen={isOpen}
        />
      )}
    </>
  );
};

export default BottomHeader;
