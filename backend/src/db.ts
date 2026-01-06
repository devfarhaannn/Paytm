import mongoose, { Schema } from "mongoose"

import dotenv from 'dotenv'
dotenv.config();
const MONGO_URL = process.env.MONGO_URL as string

if (!MONGO_URL) {
    throw new Error('MONGO_URL environment variable is not set. Please check your .env file.');
}

mongoose.connect(MONGO_URL)

const userSchema = new Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
})

const accountSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to user model
        ref: "User",
        required: true
    },
    balance: {
        type: Number,
        required: true

    }
})

export const UserModel = mongoose.model("User", userSchema)
export const AccountModel = mongoose.model("Account", accountSchema)