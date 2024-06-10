import express from 'express'
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import PathParameters from "./Lab5/PathParameters.js";
import QueryParameters from "./Lab5/QueryParameters.js";
import WorkingWithObjects from "./Lab5/WorkingWithObjects.js";
import WorkingWithArrays from "./Lab5/WorkingWithArrays.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";

const app = express()
app.use(cors());
app.use(express.json());
Hello(app)
Lab5(app)
PathParameters(app)
QueryParameters(app)
WorkingWithObjects(app)
WorkingWithArrays(app)
CourseRoutes(app)
ModuleRoutes(app)
AssignmentRoutes(app)

app.listen(process.env.PORT || 4000)