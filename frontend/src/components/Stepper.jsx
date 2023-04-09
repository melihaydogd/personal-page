import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import { ExperienceCard } from "./Card/ExperienceCard";
import { ProjectCard } from "./Card/ProjectCard";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Button } from "@mui/material";

const springConfig = {
  duration: "1s",
  easeFunction: "cubic-bezier(0.15, 0.3, 0.25, 1)",
  delay: "0s",
};

export const Stepper = (props) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = props.cardInfo?.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 320, flexGrow: 1 }}>
      <SwipeableViews
        springConfig={springConfig}
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents={true}
        threshold={1}
      >
        {props.cardInfo?.map((cardInfo) => {
          if (props.title === "Experience") {
            return <ExperienceCard key={cardInfo?._id} cardInfo={cardInfo} />;
          } else {
            return <ProjectCard key={cardInfo?._id} cardInfo={cardInfo} />;
          }
        })}
      </SwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          paddingTop: "2rem",
          justifyContent: "space-between",
          backgroundColor: "transparent",
        }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{
              "&:hover": { color: theme.palette.grey.A700 },
            }}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{
              "&:hover": { color: theme.palette.grey.A700 },
            }}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
};
