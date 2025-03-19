import mongoose from "mongoose";

const mongoose = require("mongoose")
const gradeSchema = new mongoose.Schema(
    {
        learner_id: {
            type: Number,
            required: true,
        },
        class_id: {
            type: Number,
            required: true,
        },
        scores: {
            default: [score],
        }
    },
    { collection: "grades" },
)

const grade = mongoose.model("grade", gradeSchema)

module.exports = grade