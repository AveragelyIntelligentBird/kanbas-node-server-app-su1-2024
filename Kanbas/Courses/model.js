import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("CourseModelNoUnique", schema);
export default model;