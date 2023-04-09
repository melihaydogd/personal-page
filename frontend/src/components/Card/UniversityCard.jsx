import { CardContent, Typography } from "@mui/material";
import React from "react";
import { getMonthAndYear } from "../../utils";
import { MyCard } from "./MyCard";

export const UniversityCard = (props) => {
  return (
    <MyCard>
      <img src={props.cardInfo?.image} alt="university" height="320" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" m="0" mt="2rem">
          {props.cardInfo?.university}
        </Typography>
        <Typography variant="p" color="text.secondary">
          {props.cardInfo?.degree} - GPA: {props.cardInfo?.gpa}
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
