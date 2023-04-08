import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { CenteredTypography } from "./CenteredTypography";
import { UniversityCard } from "./Card/UniversityCard";
import { Stepper } from "./Stepper";
import { SkillsCard } from "./Card/SkillsCard";
import { ActivityCard } from "./Card/ActivityCard";

export const Section = (props) => {
  function card() {
    if (props.title === "Education") {
      return <UniversityCard cardInfo={props.cardInfo} />;
    } else if (props.title === "Experience") {
      return <Stepper cardInfo={props.cardInfo} title={props.title} />;
    } else if (props.title === "Skills") {
      return (
        <Box
          className="scrollbar"
          sx={{
            marginLeft: { sm: "0", md: "17rem" },
            padding: "1rem 0",
            width: "50%",
            display: "flex",
            overflowX: "scroll",
          }}
        >
          {props.cardInfo.map((cardInfo) => {
            return <SkillsCard key={cardInfo.id} cardInfo={cardInfo} />;
          })}
        </Box>
      );
    } else if (props.title === "Projects") {
      return <Stepper cardInfo={props.cardInfo} title={props.title} />;
    } else if (props.title === "Activity") {
      return <ActivityCard cardInfo={props.cardInfo} />;
    } else {
      return <Box>Hey</Box>;
    }
  }

  return (
    <Box id={props.id} p="12rem 0">
      <Stack
        m={{md:"0 5rem", lg: "0 12rem", xl: "0 24rem" }}
        direction={{ sm: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
      >
        <CenteredTypography variant="h1" m="3rem 0" textAlign={{ sm: 'center', md: 'inherit' }} fontSize={{xs:"4rem", sm:"6rem"}}>{props.title}</CenteredTypography>
        {card()}
      </Stack>
    </Box>
  );
};
