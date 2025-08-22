import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#16375B",
      light:'',
      dark:'',
    },
    secondary: {
      main: "#ff6a00",
      light:'#ffb580',
      dark:'#b34a00',
    },
    background: {
      default: "#ffffff",
      paper: "#f9f9f9",
    },
    text: {
      main: "#555",
      light:"",
      dark:"",
      contrastText:'#0000',
    },
    hover: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      color: "#333",
    },
    body2: {
      fontSize: "0.875rem",
      color: "#555",
    },
    button: {
      textTransform: "none",
      color: "#555",
    },
    caption: {
      fontSize: "0.75rem",
      color: "#777",
    },
  },
  
});

export default theme;
