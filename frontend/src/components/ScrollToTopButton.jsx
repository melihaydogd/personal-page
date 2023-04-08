import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box>
      <Tooltip
        onClick={() => handleClick()}
        sx={{
          position: "fixed",
          bottom: 30,
          right: 50,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
          backgroundColor: "text.primary"
        }}
      >
        <Fab aria-label="scroll-to-top">
          <KeyboardArrowUp sx={{fontSize:"2.5rem", color:"background.default"}}/>
        </Fab>
      </Tooltip>
    </Box>
  );
};
