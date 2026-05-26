
 //=============================================
 //LESSON SCHEMA
 //=============================================
 //Purpose:
 //- Store lessons for each course
 //- Maintain course → lessons 1:N relationship
 

import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
{
    // Lesson title
    title: {
        type: String,
        required: [true, "Lesson title is required"],
        trim: true
    },

    // Lesson duration in minutes
    duration: {
        type: Number,
        default: 0
    },

    // Course for which lesson is created
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: [true, "Course reference is required"]
    }

},
{
    timestamps: true // createdAt, updatedAt
});

export const Lesson= mongoose.model("Lesson", lessonSchema);