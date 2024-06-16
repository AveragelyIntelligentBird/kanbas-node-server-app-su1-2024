import mongoose from "mongoose";

const moduleSchemaNU = new mongoose.Schema({
        name: String,
        course: String,
        description: String,
    },
    {collection: "modules"}
);
export default moduleSchemaNU;