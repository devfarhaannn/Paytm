import mongoose, { Schema } from "mongoose"

mongoose.connect("mongodb+srv://bhattfarhan071804:c4kjrUzUcwf5rS4c@cluster0.v6qog.mongodb.net/paytm")

const userSchema = new Schema ({
    username: String,
    password: String,
    firstname: String,   
    lastname: String
})

export const UserModel = mongoose.model("user",userSchema)