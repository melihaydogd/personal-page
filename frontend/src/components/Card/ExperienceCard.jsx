import { Box, CardContent, Typography } from "@mui/material";
import React from "react";
import { dateOptions } from "../../utils";
import { MyCard } from "./MyCard";

export const ExperienceCard = (props) => {
  return (
    <MyCard>
      <Box height={300} display="flex" justifyContent="center" alignItems="center">
        <img
          src={props.cardInfo.image}
          alt="experience"
          height={props.cardInfo.company === "Morla Moves" ? 160 : 300}
          width="300"
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" m="0" mt="2rem">
          {props.cardInfo.role}
        </Typography>
        <Typography variant="p" color="text.secondary">
          {props.cardInfo.company}
        </Typography>
        <br />
        <Typography variant="p" color="text.secondary">
          {props.cardInfo.description}
        </Typography>
        <br />
        <br />
        <br />
        <Typography
          variant="p"
          color="text.secondary"
          pt="1rem"
          fontWeight="300"
          fontStyle="italic"
        >
          {props.cardInfo.location}
          <br />
          {props.cardInfo.startDate.toLocaleString(
            "default",
            dateOptions
          )} - {props.cardInfo.endDate.toLocaleString("default", dateOptions)}
        </Typography>
      </CardContent>
    </MyCard>
  );
};
