import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ContactIcon } from "./ContactIcon";

export const Contact = () => {
  return (
    <Box>
      <Stack
        p="6rem 0"
        direction="row"
        spacing={{xs:2, sm:10}}
        justifyContent="center"
      >
        <ContactIcon icon={LinkedIn} href="https://www.linkedin.com/in/ahmetmelihaydogdu/" />
        <ContactIcon icon={Mail} />
        <ContactIcon icon={GitHub} href="https://github.com/melihaydogd" />
      </Stack>
    </Box>
  );
};
