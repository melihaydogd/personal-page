import {
  Box,
  Button,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { StyledAnchor } from "../StyledAnchor";
import { MyCard } from "./MyCard";

export const ProjectCard = (props) => {
  return (
    <MyCard sx={{ padding: "3rem 1rem" }}>
      <Box height={300} width={300} display="flex" justifyContent="center" alignItems="center">
        <img
          src={props.cardInfo?.image}
          alt="project"
          height={props.cardInfo?.certificate ? 300:200}
          width={props.cardInfo?.certificate ? 300:170}
        />
      </Box>
      <CardContent sx={{ height: "12rem" }}>
        <Typography gutterBottom variant="h5" component="div" m="0" mt="2rem">
          {props.cardInfo?.title}
        </Typography>
        <Typography variant="p" color="text.secondary">
          {props.cardInfo?.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{
            display: props.cardInfo?.certificate ? "inline-flex" : "none",
          }}
        >
          <StyledAnchor href={props.cardInfo?.certificate} target="_blank">
            Certificate
          </StyledAnchor>
        </Button>
        <Button
          size="small"
          sx={{ display: props.cardInfo?.link ? "inline-flex" : "none" }}
        >
          <StyledAnchor href={props.cardInfo?.link} target="_blank">
            {props.cardInfo?.link?.includes("udemy") ? "Course" : "Wiki"}
          </StyledAnchor>
        </Button>
        <Button
          size="small"
          sx={{ display: props.cardInfo?.gitHub ? "inline-flex" : "none" }}
        >
          <StyledAnchor href={props.cardInfo?.gitHub} target="_blank">
            GitHub
          </StyledAnchor>
        </Button>
      </CardActions>
    </MyCard>
  );
};
