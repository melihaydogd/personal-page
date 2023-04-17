import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";

export const Title = () => {
  return (
    <Box
      padding="7.5rem"
      paddingTop={{ xs: "2rem", md: "7.5rem" }}
      paddingBottom="16rem"
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 5, sm: 5 }}
        alignItems="center"
        justifyContent="center"
      >
        <Box
          sx={{
            width: { xs: 300, sm: 360 },
            height: { xs: 300, sm: 360 },
          }}
        >
          <Avatar
            alt="Me"
            src="https://personal-page-static-images.s3.eu-central-1.amazonaws.com/profil.jpg"
            sx={{ width: "inherit", height: "inherit" }}
          />
        </Box>
        <Stack direction="column" justifyContent="center">
          <Typography variant="h2" textAlign={{ xs: "center", md: "left" }}>
            Melih Aydogdu
          </Typography>
          <Typography variant="h4" textAlign={{ xs: "center", md: "left" }}>
            Software Engineer
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
