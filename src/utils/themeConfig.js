import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    contrastThreshold: 4.5,
    primary: {
      main: "#BFD732", // globant green
      dark: "#39B54A", // dark green
    },
    secondary: {
      main: "#FFFFFF", // white
      dark: "#444444", // black
    },
  },
  text: {
    primary: {
      main: "#444444",
    },
  },
  typography: {
    fontFamily: "Heebo",
  },
});
