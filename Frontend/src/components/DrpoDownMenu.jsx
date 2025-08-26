import React, { useState } from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const DropDownMenu = ({ item, open, onToggle }) => {
  const [openChild, setOpenChild] = useState(null);

  const handleChildToggle = (id) => {
    setOpenChild(openChild === id ? null : id);
  };

  return (
    <Box>
      {/* Main category button */}
      <ListItemButton
        onClick={onToggle}
        sx={{ "&:hover": { bgcolor: "action.light" } }}
      >
        <ListItemText
          primary={item.label}
          primaryTypographyProps={{ fontWeight: "500" }}
        />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>

      {/* Sub categories */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.options?.map((option) => (
            <Box key={option.id}>
              <ListItemButton
                sx={{ pl: 4, "&:hover": { bgcolor: "action.light" } }}
                onClick={() => handleChildToggle(option.id)}
              >
                <ListItemText primary={option.label} primaryTypographyProps={{ fontWeight: "500" }} />
                {openChild === option.id ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                )}
              </ListItemButton>

              {/* Child options */}
              <Collapse
                in={openChild === option.id}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {option.childOption?.map((child) => (
                    <ListItemButton
                      key={child.id}
                      sx={{ pl: 6, "&:hover": { bgcolor: "action.light" } }}
                    >
                      <ListItemText primary={child.label} primaryTypographyProps={{ fontWeight: "500" }} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </Box>
          ))}
        </List>
      </Collapse>
    </Box>
  );
};

export default DropDownMenu;
