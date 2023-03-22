import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    contrastThreshold: 4.5,
    primary: {
      main: "#BFD732", // globant green
    },
    secondary: {
      main: "#FFFFFF", // white
    },
    third: {
      main: "#444444", //black
    },
    fourth: {
      main: "#39B54A", //dark green
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
