import { createTheme } from "@mui/material";

const lightDefault = "#dfdbcd";
const blackDefault = "black";

const MuiAvatar = {
    styleOverrides: {
        img: {
            transform: "scale(1.3)",
        },
    },
};

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
        MuiAvatar,
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
        MuiAvatar,
    },
});
