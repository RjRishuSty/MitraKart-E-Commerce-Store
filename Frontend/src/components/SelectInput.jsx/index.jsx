import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React, { useState } from "react";

const SelectInput = ({ item }) => {
  const [value, setValue] = useState(item.options?.[0].value || "");
  return (
    <FormControl size="small" sx={{ minWidth: 120 }}>
      <Select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        sx={{ color: "text.main" }}
      >
        {item.options?.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            sx={{ color: "text.main" }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
