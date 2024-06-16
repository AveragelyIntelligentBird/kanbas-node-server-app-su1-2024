import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("ModuleModelNoUnique", schema);
export default model;