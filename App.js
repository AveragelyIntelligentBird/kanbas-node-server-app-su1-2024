import express from 'express'
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import PathParameters from "./Lab5/PathParameters.js";
import QueryParameters from "./Lab5/QueryParameters.js";
import WorkingWithObjects from "./Lab5/WorkingWithObjects.js";
import WorkingWithArrays from "./Lab5/WorkingWithArrays.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
import UserRoutes from "./Users/routes.js";

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas"
console.log(CONNECTION_STRING)
mongoose.connect(CONNECTION_STRING);
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

UserRoutes(app)

app.listen(process.env.PORT || 4000)