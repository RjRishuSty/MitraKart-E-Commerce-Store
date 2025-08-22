import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const [value, setValue] = useState("");

  return (
    <TextField
      type="search"
      placeholder="Search for products..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      size="small"
      sx={{
        width: 500,
        marginLeft: "auto",
        bgcolor: "#f4f6f8",         // softer gray instead of white
        borderRadius: "30px",       // rounded pill style
        "& .MuiOutlinedInput-root": {
          borderRadius: "30px",     // ensures input corners match
          paddingRight: "12px",
          "& fieldset": {
            border: "none",         // removes default border
          },
          "&:hover fieldset": {
            border: "none",
          },
        //   "&.Mui-focused fieldset": {
        //     border: "2px solid #E48A4C", // highlight with orange on focus
        //   },
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
           {
            !value &&  <SearchIcon sx={{ color: "#16375B" }} />
           }
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Search;
