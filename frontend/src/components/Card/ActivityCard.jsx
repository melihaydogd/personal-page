import { Box, CardContent, Typography } from "@mui/material";
import React from "react";
import { getYear } from "../../utils";
import { MyCard } from "./MyCard";

export const ActivityCard = (props) => {
  return (
    <MyCard>
      <Box display="flex" justifyContent="center">
        <img
          src={props.cardInfo?.image}
          alt="activity"
          width="330"
          height="320"
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" m="0" mt="2rem">
          {props.cardInfo?.title}
        </Typography>
        <Typography variant="p" color="text.secondary">
          {props.cardInfo?.role}
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
          {getYear(props.cardInfo?.startDate)} -{" "}
          {getYear(props.cardInfo?.endDate)}
        </Typography>
      </CardContent>
    </MyCard>
  );
};
