import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import { rowStart, spaceBetween } from "../../styles/flexStyles";
import SelectInput from "../SelectInput.jsx";

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

const SubHeader = () => {
  return (
    <Stack sx={{ px: 15, borderBottom: "1px solid #ccc" }}>
      <Grid container rowSpacing={4} columnSpacing={5}>
        <Grid size={{ xs: 12, sm: 12, md: 7 }} sx={{ ...rowStart }}>
          <Typography variant="subtitle1" sx={{ color: "text.main" }}>
            Get up to 50% off new seasson styles,limited time only
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 5 }} sx={{ ...spaceBetween }}>
          {navItems.map((item) =>
            item.type === "select" ? (
              <SelectInput item={item}/>
            ) : (
              <Button variant="button">{item.label}</Button>
            )
          )}
        </Grid>
      </Grid>
    </Stack>
  );
};

export default SubHeader;
