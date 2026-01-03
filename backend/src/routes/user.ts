import express, { Router } from "express"
import dotenv from 'dotenv'
dotenv.config();

const JWT_PASSWORD = process.env.JWT_PASSWORD as string;
const userRouter = Router()

export default userRouter

