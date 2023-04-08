import { Box, styled, ThemeProvider } from "@mui/material";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "./theme";
import { Contact } from "./components/Contact/Contact";
import { Navbar } from "./components/Navigation/Navbar";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { Section } from "./components/Section";
import { Title } from "./components/Title";
import { Service } from "./services/Service";

const LeftCrookedDivider = styled(Box)((props) => ({
  width: "100%",
  height: "150px",
  backgroundColor: props.theme.palette.text.primary,
  clipPath: "polygon(-5% 20%, 20% 10%, 110% 60%, 20% 20%)",
}));

const RightCrookedDivider = styled(Box)((props) => ({
  width: "100%",
  height: "150px",
  backgroundColor: props.theme.palette.text.primary,
  clipPath: "polygon(-10% 60%, 80% 90%, 105% 60%, 80% 80%)",
}));

export const App = () => {
  const [theme, setTheme] = useState(darkTheme);
  const [education, setEducation] = useState({});
  const [experience, setExperience] = useState([]);
  const [skill, setSkill] = useState([]);
  const [project, setProject] = useState([]);
  const [activity, setActivity] = useState({});

  useEffect(() => {
    const cookieMode = Cookies.get("theme");
    if (cookieMode) {
      setTheme(cookieMode === "dark" ? darkTheme : lightTheme);
    }

    
    Service("/education").then(response => {
      setEducation(response)
    })
    Service("/experience").then(response => {
      setExperience(response)
    })
    Service("/skill").then(response => {
      setSkill(response)
    })
    Service("/project").then(response => {
      setProject(response)
    })
    Service("/activity").then(response => {
      setActivity(response)
    })
  }, []);

  function toggleTheme(checked) {
    const newMode = checked ? "light" : "dark";
    setTheme(newMode === "dark" ? darkTheme : lightTheme);
    Cookies.set("theme", newMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        bgcolor={"background.default"}
        color={"text.primary"}
        sx={{
          backgroundImage:
            theme.palette.mode === "light" ? "url(https://www.transparenttextures.com/patterns/brushed-alum-dark.png)": "url(https://www.transparenttextures.com/patterns/binding-dark.png)",
        }}
      >
        <Navbar toggleTheme={toggleTheme} />
        <Title />
        <LeftCrookedDivider theme={theme} />
        <Section id="education" title="Education" cardInfo={education} />
        <RightCrookedDivider theme={theme} />
        <Section id="experience" title="Experience" cardInfo={experience} />
        <LeftCrookedDivider theme={theme} />
        <Section id="skills" title="Skills" cardInfo={skill} />
        <RightCrookedDivider theme={theme} />
        <Section id="projects" title="Projects" cardInfo={project} />
        <LeftCrookedDivider theme={theme} />
        <Section id="activity" title="Activity" cardInfo={activity} />
        <RightCrookedDivider theme={theme} />
        <ScrollToTopButton />
        <Contact />
      </Box>
    </ThemeProvider>
  );
};
