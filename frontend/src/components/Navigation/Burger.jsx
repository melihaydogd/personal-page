import { Menu } from "@mui/icons-material";
import { Button, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { CenteredTypography } from "../CenteredTypography";
import { StyledAnchor } from "../StyledAnchor";

export const Burger = (props) => {
  const theme = useTheme();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Box>
      <Button
        sx={{
          color: "text.primary",
          "&:hover": {
            color: theme.palette.grey.A700,
            backgroundColor: "transparent",
          },
        }}
        onClick={() =>
          setOpenMenu((prevValue) => {
            return !prevValue;
          })
        }
      >
        <Menu sx={{ width: "3rem", height: "3rem" }} />
      </Button>
      <ul
        className="slide"
        style={{ paddingTop: "0.3rem", maxHeight: openMenu ? "500px" : 0 }}
      >
        {props.sections.map((section) => {
          return (
            <CenteredTypography
              key={section.key}
              variant="h5"
              padding="0.3rem 0"
            >
              <StyledAnchor
                theme={theme}
                href={section.href}
                onClick={() =>
                  setOpenMenu((prevValue) => {
                    return !prevValue;
                  })
                }
              >
                {section.section}
              </StyledAnchor>
            </CenteredTypography>
          );
        })}
      </ul>
    </Box>
  );
};
