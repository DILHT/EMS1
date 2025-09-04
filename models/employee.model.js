import { Schema } from "mongoose";
import mongoose from "mongoose";

const employeeSchema = new Schema({

    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true

    },
    position:{
        type: String,
        required: true
    },
    department:{
        type: String,
        required: true,
    },
    salary:{
        type: Number,
    },
}, {timestamps: true});

export default mongoose.model("Employee", employeeSchema);