import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const [value, setValue] = useState("");

  return (
    <TextField
      type="search"
      placeholder="Search for Products, Brands and More"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      size="small"
      sx={{
        width: 500,
        letterSpacing: 1,
        marginLeft: "auto",
        bgcolor: "action.light",
        borderRadius: 2,
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#ffc499",
            borderRadius: 2,
          },
          "&:hover fieldset": {
            borderColor: "#ffc499",
            borderRadius: 2,
          },
          "&.Mui-focused fieldset": {
            borderColor: "#ffc499",
            borderRadius: 2,
          },
        },
        "& .MuiInputBase-input::placeholder": {
          color: "#807d7dff",
          opacity: 1,
          fontWeight: 400,
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {!value && (
              <SearchIcon fontSize="medium" sx={{ color: "action.hover" }} />
            )}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Search;
