import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", // Black
      contrastText: "#000",
    },
    secondary: {
      main: "#ffffff", // White
      contrastText: "#000000",
    },
    background: {
      default: "#f5f0f0", // Page background
      paper: "#f5f5f5",   // Cards, sections
    },
    text: {
      primary: "#000000", // Black text
      secondary: "#555555", // Gray text
    },
    action: {
      hover: "#ff6a00", // Orange hover effect
      light:'#fff0e6',
      dark:'#cc5500'
    },
  },

  typography: {
    fontFamily: "Montserrat, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#000",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      color: "#000",
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
      color: "#000",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
      color: "#000",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
      color: "#000",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500,
      color: "#000",
    },
    body1: {
      fontSize: "1rem",
      color: "#000",
    },
    body2: {
      fontSize: "0.875rem",
      color: "#555",
    },
    caption: {
      fontSize: "0.75rem",
      color: "#777",
    },
  },

  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#777", // normal link = black
          textDecoration: "none",
          "&:hover": {
            color: "#ff6a00", // orange on hover
          },
        },
      },
    },
  },
});

export default theme;
