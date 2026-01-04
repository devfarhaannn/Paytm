import { Request, Response, Router } from "express";
import { authMidlleware } from "../middlleware";
import { AccountModel } from "../db";


const accountRouter = Router()


accountRouter.get("/balance", authMidlleware , async(req:Request , res: Response) => {
    const account = await AccountModel.findOne({
        // @ts-ignore
        userId : req.userId
    })

    res.json({
        balance : account?.balance
    })
})

export default accountRouter