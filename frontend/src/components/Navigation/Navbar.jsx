import { Box, Stack, useTheme } from "@mui/material";
import React from "react";
import { CenteredTypography } from "../CenteredTypography";
import { Burger } from "./Burger";
import { StyledAnchor } from "../StyledAnchor";
import { Switch } from "./Switch";

const sections = [
  {
    key: 1,
    section: "Education",
    href: "#education",
  },
  {
    key: 2,
    section: "Experiences",
    href: "#experiences",
  },
  {
    key: 3,
    section: "Skills",
    href: "#skills",
  },
  {
    key: 4,
    section: "Projects",
    href: "#projects",
  },
  {
    key: 5,
    section: "Activity",
    href: "#activity",
  },
];


export const Navbar = (props) => {
  const theme = useTheme()

  return (
    <Box padding={{xs:"3rem", sm:"4rem"}} position="relative" zIndex={1}>
      <Stack
        direction="row"
        spacing={{ sm: 10, xl: 15 }}
        justifyContent="center"
        display={{ xs: "none", lg: "flex" }}
      >
        {sections.map((section) => {
          return (
            <CenteredTypography key={section.key} variant="h5" lineHeight={2.5}>
              <StyledAnchor theme={theme} href={section.href}>{section.section}</StyledAnchor>
            </CenteredTypography>
          );
        })}
      </Stack>
      <Box display={{ sm: "inline-flex", lg: "none" }} sx={{position: "relative", right:{xs:"1.5rem", sm:0}}}>
        <Burger sections={sections} />
      </Box>
      <Switch toggleTheme={props.toggleTheme} />
    </Box>
  );
};
