import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import { ExperienceCard } from "./Card/ExperienceCard";
import { ProjectCard } from "./Card/ProjectCard";

const springConfig = {
  duration: "1s",
  easeFunction: "cubic-bezier(0.15, 0.3, 0.25, 1)",
  delay: "0s",
};

export const Stepper = (props) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = props.cardInfo.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 320, flexGrow: 1 }}>
      <SwipeableViews
        springConfig={springConfig}
        interval={10000}
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents={true}
        threshold={1}
      >
        {props.cardInfo?.map((cardInfo) => {
          if (props.title === "Experience") {
            return <ExperienceCard key={cardInfo._id} cardInfo={cardInfo} />
          } else {
            return <ProjectCard key={cardInfo._id} cardInfo={cardInfo} />
          }
        })}
      </SwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          paddingTop: "2rem",
          justifyContent: "center",
          backgroundColor: "transparent"
        }}
      />
    </Box>
  );
};
