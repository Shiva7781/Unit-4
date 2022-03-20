const express = require("express");

const app = express();

app.use(express.json());

const usersControllers = require("./controllers/users.controllers");
const studentsControllers = require("./controllers/students.controllers");
const batchsControllers = require("./controllers/batchs.controllers");
const evaluationsControllers = require("./controllers/evaluations.controllers");
const submissionsControllers = require("./controllers/submissions.controllers");


app.use("/users", usersControllers);

app.use("/batchs", batchsControllers);
app.use("/students", studentsControllers);
app.use("/evaluations", evaluationsControllers);
app.use("/submissions", submissionsControllers);

const connect = require("./configs/db");

module.exports = app;

