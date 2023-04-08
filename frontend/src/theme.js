import { createTheme } from "@mui/material";

const lightDefault = "#dfdbcd";
const blackDefault = "black";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: lightDefault,
    },
  },
  components: {
    MuiMobileStepper: {
      styleOverrides: {
        dotActive: {
          backgroundColor: blackDefault,
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: blackDefault,
    },
    text: {
      primary: lightDefault,
    },
  },
  components: {
    MuiMobileStepper: {
      styleOverrides: {
        dotActive: {
          backgroundColor: lightDefault,
        },
      },
    },
  },
});
