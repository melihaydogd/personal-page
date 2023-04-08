import { Box, styled, ThemeProvider } from "@mui/material";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "../theme";
import { Contact } from "./Contact/Contact";
import { Navbar } from "./Navigation/Navbar";
import { ScrollToTopButton } from "./ScrollToTopButton";
import { Section } from "./Section";
import { Title } from "./Title";

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

const UniversityInfo = {
  university: "Bogazici University",
  degree: "B.S. in Computer Engineering",
  gpa: "3.63/4",
  image:
    "https://personal-page-static-images.s3.eu-central-1.amazonaws.com/university-logo.png",
  location: "Istanbul, Turkey",
  startDate: new Date(2016, 8),
  endDate: new Date(2022, 5),
};

const ExperienceInfo = [
  {
    id: 2,
    role: "Backend Developer",
    company: "Morla Moves",
    description: "AI Fitness Startup Company",
    location: "Amstelveen, The Netherlands",
    startDate: new Date(2022, 1),
    endDate: new Date(2023, 1),
    image:
      "https://personal-page-static-images.s3.eu-central-1.amazonaws.com/morla.png",
  },
  {
    id: 1,
    role: "Data Engineer",
    company: "OREDATA",
    description: "Digital Transformation and IT Consulting Firm",
    location: "Istanbul, Turkey",
    startDate: new Date(2021, 7),
    endDate: new Date(2022, 1),
    image:
      "https://personal-page-static-images.s3.eu-central-1.amazonaws.com/oredata.png",
  },
];

const SkillsInfo = [
  {
    id: 1,
    term: "Backend",
    skills: ["Spring", "Django", "Flask", "Node"],
  },
  {
    id: 2,
    term: "Programming",
    skills: ["Java", "Python", "JavaScript", "Go", "Kotlin", "C", "C++"],
  },
  {
    id: 3,
    term: "Backend",
    skills: ["Spring", "Django", "Flask", "Node"],
  },
  {
    id: 4,
    term: "Programming",
    skills: ["Java", "Python", "JavaScript", "Go", "Kotlin", "C", "C++"],
  },
  {
    id: 5,
    term: "Backend",
    skills: ["Spring", "Django", "Flask", "Node"],
  },
  {
    id: 6,
    term: "Programming",
    skills: ["Java", "Python", "JavaScript", "Go", "Kotlin", "C", "C++"],
  },
];

const ProjectInfo = [
  {
    id: 1,
    title: "Kubernetes for Beginners: Google Cloud, AWS and Azure",
    image:
      "https://personal-page-static-images.s3.eu-central-1.amazonaws.com/logo-udemy.svg",
    certificate:
      "https://www.udemy.com/certificate/UC-6a413bfc-820f-4b8b-94e6-f46b480abd7c/",
    link: "https://www.udemy.com/course/kubernetes-crash-course-for-java-developers/",
    gitHub: "https://github.com/melihaydogd/web-development-course",
  },
  {
    id: 2,
    title: "Kubernetes for Beginners: Google Cloud, AWS and Azure",
    image:
      "https://personal-page-static-images.s3.eu-central-1.amazonaws.com/project-management.png",
    certificate:
      "https://www.udemy.com/certificate/UC-6a413bfc-820f-4b8b-94e6-f46b480abd7c/",
    link: "https://www.udemy.com/course/kubernetes-crash-course-for-java-developers/",
    gitHub: "https://github.com/melihaydogd/web-development-course",
  },
];

const ActivityInfo = {
  title: "Bogazici University Aviation Club",
  role: "Trainer - Board Member",
  image:
    "https://personal-page-static-images.s3.eu-central-1.amazonaws.com/club.png",
  location: "Istanbul, Turkey",
  startDate: new Date(2017, 1),
  endDate: null,
};

export const App = () => {
  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => {
    const cookieMode = Cookies.get("theme");
    if (cookieMode) {
      setTheme(cookieMode === "dark" ? darkTheme : lightTheme);
    }
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
            "url(https://www.transparenttextures.com/patterns/binding-dark.png)",
        }}
      >
        <Navbar toggleTheme={toggleTheme} />
        <Title />
        <LeftCrookedDivider theme={theme} />
        <Section id="education" title="Education" cardInfo={UniversityInfo} />
        <RightCrookedDivider theme={theme} />
        <Section id="experience" title="Experience" cardInfo={ExperienceInfo} />
        <LeftCrookedDivider theme={theme} />
        <Section id="skills" title="Skills" cardInfo={SkillsInfo} />
        <RightCrookedDivider theme={theme} />
        <Section id="projects" title="Projects" cardInfo={ProjectInfo} />
        <LeftCrookedDivider theme={theme} />
        <Section id="activity" title="Activity" cardInfo={ActivityInfo} />
        <RightCrookedDivider theme={theme} />
        <ScrollToTopButton />
        <Contact />
      </Box>
    </ThemeProvider>
  );
};
