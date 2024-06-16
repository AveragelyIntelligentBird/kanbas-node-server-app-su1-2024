import mongoose from "mongoose";

const courseSchemaNU = new mongoose.Schema({
        name: String,
        number: String,
        image: String,
        startDate: Date,
        endDate: Date,
        department: String,
        credits: String,
        description: String,
    },
    {collection: "courses"}
);
export default courseSchemaNU;