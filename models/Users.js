import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: { type: String, lowercase: true },
    lastname: { type: String, lowercase: true },
    date: { type: [Date] }
});

export const User = model("user",userSchema)