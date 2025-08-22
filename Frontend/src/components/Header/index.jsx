import React from "react";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SubHeader from "./SubHeader";
import logo from "../../assets/logo.svg";
import Search from "../Search/Index";

const Header = () => {
  return (
    <>
      <SubHeader />
      <AppBar position="relative" color="primary" sx={{ px: 9 }}>
        <Toolbar>
          <Box
            component="img"
            src={logo}
            alt="Mitra-Kart"
            sx={{
              padding: 1,
              height: 70,
              width: "auto",
              objectFit: "contain",
            }}
          />
          <Search />
          <Box sx={{ marginLeft: "auto" }}>
            <Button
              variant="outlined"
              startIcon={<LoginIcon />}
              // sx={{ backgroundColor: "secondary.main", color: "#fff", mr: 2 }}
            >
              Login
            </Button>

            <Button
              variant="outlined"
              endIcon={<PersonAddIcon />}
              // sx={{ borderColor: "secondary.main", color: "secondary.main" }}
            >
              Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
