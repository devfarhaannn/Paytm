import express, { Request, Response, Router } from "express"
import dotenv from 'dotenv'
import {z} from 'zod'
import { UserModel } from "../db";
import jwt from 'jsonwebtoken'
dotenv.config();

const JWT_PASSWORD = process.env.JWT_PASSWORD as string;
const userRouter = Router()


const signupBody = z.object({
    firstname: z.string(),
    lastname: z.string(),
    username: z.string().email(),
    password: z.string().min(5).max(10)
})

userRouter.post("/sinup", async (req: Request , res: Response) =>{
   try{
    const parsed = signupBody.safeParse(req.body)

    if(!parsed.success){
        res.status(411).json({
            message:"Zod validation failed",
            error:parsed.error.format()
        })
    }

    const existingUser = await UserModel.findOne({
        username : req.body.username
    });

    if(!existingUser){
        res.status(411).json({
            message: "User aleady exist with this email"
        })
    }

    const user = await UserModel.create({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    })

    const userId = user._id

    const token = jwt.sign({
        userId
    },JWT_PASSWORD)

    res.json({
        token:token
    })

   } 
   catch (error){
    res.status(411).json({
            message:"User already exists with this username",
        })
   }


})

export default userRouter

