import { Box, CardContent, Typography } from "@mui/material";
import React from "react";
import { getMonthAndYear } from "../../utils";
import { MyCard } from "./MyCard";

export const ExperienceCard = (props) => {
  return (
    <MyCard>
      <Box
        height={300}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <img
          src={props.cardInfo?.image}
          alt="experience"
          height={props.cardInfo?.company === "Morla Moves" ? 160 : 300}
          width="300"
        />
      </Box>
      <CardContent sx={{ height: "12rem" }}>
        <Typography gutterBottom variant="h5" component="div" m="0" mt="2rem">
          {props.cardInfo?.role}
        </Typography>
        <Typography variant="p" color="text.secondary">
          {props.cardInfo?.company}
        </Typography>
        <br />
        <Typography variant="p" color="text.secondary">
          {props.cardInfo?.description}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography
          variant="p"
          color="text.secondary"
          pt="1rem"
          fontWeight="300"
          fontStyle="italic"
        >
          {props.cardInfo?.location}
          <br />
          {getMonthAndYear(props.cardInfo?.startDate)}{" "}
          -{" "}
          {getMonthAndYear(props.cardInfo?.endDate)}
        </Typography>
      </CardContent>
    </MyCard>
  );
};
