import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();

const apiVersion = "/api/v1";
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(express.static("public"));
app.use(function (req, res, next) {
    res.header("Content-Type", "application/json");
    next();
});

mongoose.connect("mongodb://3.121.162.63:27017/personalDB?authSource=admin", {
    user: process.env.DB_USERNAME,
    pass: process.env.DB_PASSWORD,
});

const educationSchema = new mongoose.Schema({
    university: String,
    degree: String,
    gpa: String,
    image: String,
    location: String,
    startDate: Date,
    endDate: Date,
});
const Education = mongoose.model("Education", educationSchema);

const experienceSchema = new mongoose.Schema({
    role: String,
    company: String,
    description: String,
    image: String,
    location: String,
    startDate: Date,
    endDate: Date,
});
const Experience = mongoose.model("Experience", experienceSchema);

const skillSchema = new mongoose.Schema({
    term: String,
    skills: [String],
});
const Skill = mongoose.model("Skill", skillSchema);

const projectSchema = new mongoose.Schema({
    title: String,
    image: String,
    certificate: String,
    link: String,
    gitHub: String,
});
const Project = mongoose.model("Project", projectSchema);

const activitySchema = new mongoose.Schema({
    title: String,
    role: String,
    image: String,
    location: String,
    startDate: Date,
    endDate: Date,
});
const Activity = mongoose.model(
    "Activity",
    activitySchema
);


app.route(`${apiVersion}/education`).get(function (req, res) {
    Education.findOne({}, { __v: 0 })
        .then(function (education) {
            if (education) {
                const json = JSON.stringify(education);
                res.send(json);
            } else {
                res.send("No education found.");
            }
        })
        .catch((error) => {
            console.log(error.message);
        });
});

app.route(`${apiVersion}/experience`).get(function (req, res) {
    Experience.find({}, { __v: 0 })
        .then(function (experiences) {
            if (experiences) {
                const json = JSON.stringify(experiences);
                res.send(json);
            } else {
                res.send("No experiences found.");
            }
        })
        .catch((error) => {
            console.log(error.message);
        });
});

app.route(`${apiVersion}/skill`).get(function (req, res) {
    Skill.find({}, { __v: 0 })
        .then(function (skills) {
            if (skills) {
                const json = JSON.stringify(skills);
                res.send(json);
            } else {
                res.send("No skills found.");
            }
        })
        .catch((error) => {
            console.log(error.message);
        });
});

app.route(`${apiVersion}/project`).get(function (req, res) {
    Project.find({}, { __v: 0 })
        .then(function (projects) {
            if (projects) {
                const json = JSON.stringify(projects);
                res.send(json);
            } else {
                res.send("No projects found.");
            }
        })
        .catch((error) => {
            console.log(error.message);
        });
});

app.route(`${apiVersion}/activity`).get(function (req, res) {
    Activity.find({}, { __v: 0 })
        .then(function (activity) {
            if (activity) {
                const json = JSON.stringify(activity);
                res.send(json);
            } else {
                res.send("No activityz found.");
            }
        })
        .catch((error) => {
            console.log(error.message);
        });
});


app.listen(8080, function () {
    console.log("Server started on port 8080");
});
