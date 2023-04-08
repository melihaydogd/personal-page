import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

export const SkillsCard = (props) => {
  return (
    <Box padding="0 0.75rem">
      <Card
        sx={{
          width: 190,
          backgroundColor: "#363636",
          backgroundImage: "none",
          boxShadow: "none",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" m="0" mt="2rem">
            {props.cardInfo.term}
          </Typography>
          <ul style={{padding: "1rem 1.5rem"}}>
            {props.cardInfo.skills.map((skill, index) => {
              return (
                <li key={index} style={{padding: "1rem 0"}}>
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
