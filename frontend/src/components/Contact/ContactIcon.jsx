import { Box } from "@mui/system";
import React from "react";
import { StyledAnchor } from "../StyledAnchor";

export const ContactIcon = (props) => {

  function handleClick() {
    const mailtoUrl = "mailto:amelih6@gmail.com";
    window.open(mailtoUrl);
  }

  return (
    <Box>
      <StyledAnchor href={props.href} target="_blank" onClick={props.href === undefined ? handleClick: null}>
        <props.icon sx={{ fontSize: "5rem" }}  />
      </StyledAnchor>
    </Box>
  );
};
