import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()

const JWT_SECRET = process.env.JWT_PASSWORD as string


export const authMidlleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers["authorization"]

    const token = authHeader?.split(' ')[1];
    if(!token){
        res.status(411).json({
            message:"auth token is required"
        })
    }

    try {
        const decoded = jwt.verify(token as string, JWT_SECRET) as { userId?: string }

        if(decoded.userId){
            req.userId = decoded.userId
            next()
        }else {
            return res.status(403).json()
        }
        
    } catch (error) {
        res.status(403).json({
            message: "Invalid or expired token"
        })
    }
}
