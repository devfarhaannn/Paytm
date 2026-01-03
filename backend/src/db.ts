import mongoose, { Schema } from "mongoose"

import dotenv from 'dotenv'
dotenv.config();
const MONGO_URL = process.env.MONGO_URL as string

mongoose.connect(MONGO_URL)

const userSchema = new Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String
})

export const UserModel = mongoose.model("user", userSchema)