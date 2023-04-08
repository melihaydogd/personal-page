import { Box, CardContent, Typography } from "@mui/material";
import React from "react";
import { MyCard } from "./MyCard";

export const ActivityCard = (props) => {
  return (
    <MyCard sx={{ maxWidth: "max-content" }}>
      <Box display="flex" justifyContent="center">
        <img src={props.cardInfo.image} alt="activity" height="320" />
      </Box>
      <CardContent sx={{ width: "max-content" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          m="0"
          mt="2rem"
          whiteSpace="nowrap"
          width="fit-content"
        >
          {props.cardInfo.title}
        </Typography>
        <Typography variant="p" color="text.secondary">
          {props.cardInfo.role}
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
          {props.cardInfo.startDate.toLocaleString("default", {
            year: "numeric",
          })}{" "}
          -{" "}
          {props.cardInfo.endDate === null
            ? "Present"
            : props.cardInfo.endDate.toLocaleString("default", {
                year: "numeric",
              })}
        </Typography>
      </CardContent>
    </MyCard>
  );
};
