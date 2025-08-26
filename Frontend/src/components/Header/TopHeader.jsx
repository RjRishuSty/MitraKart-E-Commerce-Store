import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import SelectInput from "../Inputs/SelectInput.jsx";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import { rowStart, spaceBetween } from "../../styles/flexStyles.js";

const navItems = [
  {
    type: "button",
    label: "Help Center",
    href: "/help-center",
  },
  {
    type: "button",
    label: "Order Tracking",
    href: "/order-tracking",
  },
  {
    type: "select",
    label: "Language",
    value: "en",
    options: [
      { label: "English", value: "en" },
      { label: "Español", value: "es" },
      { label: "Français", value: "fr" },
    ],
  },
  {
    type: "select",
    label: "Currency",
    value: "usd",
    options: [
      { label: "USD", value: "usd" },
      { label: "EUR", value: "eur" },
      { label: "INR", value: "inr" },
    ],
  },
];

const TopHeader = () => {
  return (
    <Stack
      sx={{
        borderTop: "1px solid #ccc",
        padding: "5px 25px",
        mb: 1,
        borderBottom: "1px solid #ccc",
      }}
    >
      <Container maxWidth="xl" >
        <Grid container rowSpacing={4} columnSpacing={5}>
          <Grid size={{ xs: 12, sm: 12, md: 7 }} sx={{ ...rowStart }}>
            <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
              Get up to 50% off new seasson styles, limited time only
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 5 }} sx={{ ...spaceBetween }}>
            {navItems.map((item) =>
              item.type === "select" ? (
                <React.Fragment key={item.label}>
                  <SelectInput item={item} />
                </React.Fragment>
              ) : (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.href}
                  variant="button"
                  sx={{
                    textTransform: "capitalize",
                    color: "text.secondary",
                    "&:hover": {
                      color: "action.hover",
                    },
                  }}
                >
                  {item.label}
                </Button>
              )
            )}
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default TopHeader;
