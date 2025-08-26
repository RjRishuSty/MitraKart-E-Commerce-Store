import React from "react";
import { AppBar, Box, Container, Toolbar } from "@mui/material";
import Search from "../Search";
import Logo from "../Logo";
import BadgeIcon from "../BadgeIcon";
import TopHeader from "./TopHeader";
import AuthButton from "../AuthButton";
import BottomHeader from "./BottomHeader";

const Header = () => {
  return (
    <AppBar position="relative" color="secondary" sx={{ boxShadow: "none" }}>
      <TopHeader />
      <Container maxWidth="xl" sx={{ borderBottom: "1px solid #ccc", py: 1,}}>
        <Toolbar>
          <Logo />
          <Search />
          <AuthButton />
          <BadgeIcon />
        </Toolbar>
      </Container>
      <BottomHeader />
    </AppBar>
  );
};

export default Header;
