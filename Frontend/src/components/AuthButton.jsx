import { Box, Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import React from "react";
import { Link } from "react-router-dom";

const authButtons = [
  {
    label: "Login",
    to: "/login",
    variant: "contained",
    size: "medium",
    startIcon: <LoginIcon fontSize="medium" />,
    sx: {
      mr: 2,
      color: "secondary.main",
      bgcolor: "action.hover",
      "&:hover": { bgcolor: "primary.main" },
    },
  },
  {
    label: "Register",
    to: "/register",
    variant: "outlined",
    size: "medium",
    endIcon: <PersonAddIcon fontSize="medium" />,
    sx: {
      mr: 2,
      color: "inherit",
      "&:hover": {
        borderColor: "action.hover",
        color: "action.hover",
        bgcolor: "action.light",
      },
    },
  },
];

const AuthButton = () => {
  return (
    <Box sx={{ marginLeft: "auto" }}>
      {authButtons.map((item) => (
        <Button
          key={item.label}
          component={Link}
          to={item.to}
          variant={item.variant}
          size={item.size}
          startIcon={item.startIcon}
          endIcon={item.endIcon}
          sx={item.sx}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );
};

export default AuthButton;
