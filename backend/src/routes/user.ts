import express, { Request, Response, Router } from "express"
import dotenv from 'dotenv'
import {z} from 'zod'
import { AccountModel, UserModel } from "../db";
import jwt from 'jsonwebtoken'
import { authMidlleware } from "../middlleware";
dotenv.config();

const JWT_SECRET = process.env.JWT_PASSWORD as string;
const userRouter = Router()


const signupBody = z.object({
    firstname: z.string(),
    lastname: z.string(),
    username: z.string().email(),
    password: z.string().min(5).max(10)
})

userRouter.post("/signup", async (req: Request , res: Response) =>{
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

    if(existingUser){
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

    const account = await AccountModel.create({
        userId,
        balance : 1 + Math.random() * 10000
    })

    const token = jwt.sign({
        userId
    },JWT_SECRET)

    res.json({
        token:token,
        message : "Signup Succesfully",
        balance : account.balance,
        user:{
            name : user.firstname
        }
    })

   } 
   catch (error){
    res.status(411).json({
            message:"User already exists with this username",
        })
   }


})

const signinBody = z.object({
    username: z.string().email(),
    password: z.string()
})

userRouter.post("/signin", async(req: Request, res: Response) => {
    const parsed = signinBody.safeParse(req.body)


    if(!parsed.success){
        res.status(411).json({
            message:"email is already taken or incoorect credentials",
            error:parsed.error
        })
    }
    
    const user = await UserModel.findOne({
        username: req.body.username,
        password: req.body.password
    })
    
    if(user){
        const token = jwt.sign({
            userId:user._id
        },JWT_SECRET)
        res.json({
            token:token
        })
    } else {
        res.status(411).json({
            message: "Incorrect Credentials"
        })
    }
})

const updateBody = z.object({
    password: z.string().optional(),
    firstname: z.string().optional(),
    lastname: z.string().optional()

})
userRouter.put("/", authMidlleware, async(req: Request, res: Response)=>{
    const parsed = updateBody.safeParse(req.body);

    if(!parsed.success){
        res.status(411).json({
            message:"error while updating"
        })
        return
    }


     try {
        
        const updateUser = await UserModel.updateOne(
            { _id :(req as any).userId } as any,
            { $set : parsed.data } as any
        )

        res.json({
            message: "Updated Successfully",
            updateUser
        })
     } catch (error) {
        res.status(500).json({
            message: "Something went wrong during update"
        })
     }
})

userRouter.get("/bulk", async(req, res) => { 
    const filter = (req.query.filter || "").toString();

    const users = await UserModel.find({
        $or: [
            { username: { $regex: filter, $options: "i"} },
            { firstname: { $regex: filter, $options: "i" } },
            { lastname: { $regex: filter, $options: "i" } }
        ]
    } as any)
      res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstname,
            lastName: user.lastname,
            _id: user._id
        }))
})

})
export default userRouter

