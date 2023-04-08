import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import React from "react";

export const SkillsCard = (props) => {
  const theme = useTheme()
  return (
    <Box padding="0 0.75rem">
      <Card
        sx={{
          width: 190,
          backgroundColor: theme.palette.mode === "dark" ? "#44433d8f": "#a7a39473",
          backgroundImage: "none",
          boxShadow: "none",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" m="0" mt="1rem">
            {props.cardInfo?.term}
          </Typography>
          <ul style={{ padding: "1rem 1.5rem" }}>
            {props.cardInfo?.skills.map((skill, index) => {
              return (
                <li key={index} style={{ padding: "0.5rem 0" }}>
                  <Typography variant="p" color="text.secondary">
                    {skill}
                  </Typography>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>
    </Box>
  );
};
