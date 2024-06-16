import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
        number: {type: String, required: true, unique: true},
        name: {type: String, required: true},
        image: String,
        startDate: Date,
        endDate: Date,
        department: String,
        credits: String,
        description: String,
    },
    {collection: "courses"}
);
export default courseSchema;