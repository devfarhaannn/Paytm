import { Request, Response, Router } from "express";
import { authMidlleware } from "../middlleware";
import { AccountModel } from "../db";
import mongoose from "mongoose";


const accountRouter = Router()


accountRouter.get("/balance", authMidlleware, async (req: Request, res: Response) => {
    const account = await AccountModel.findOne({
        // @ts-ignore
        userId: req.userId
    })

    res.json({
        balance: account?.balance
    })
})


accountRouter.post("/transfer", authMidlleware, async (req: Request, res: Response) => {
    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount, to } = req.body

    const account = await AccountModel.findOne({
        userId: (req as any).userId
    }).session(session);

    if (!account || account.balance < amount) {
        await session.abortTransaction()
        res.status(400).json({
            message: "Invalid account or Insufficient balance"
        })
    }

    const toAccount = await AccountModel.findOne({
        userId: to
    }).session(session)

    if (!toAccount) {
        await session.abortTransaction()
        res.status(400).json({
            message: "Accont not found"
        })
    }

    await AccountModel.updateOne({ userId: (req as any).userId }, { $inc: { balance: -amount } }).session(session);
    await AccountModel.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    await session.commitTransaction()

    res.json({
        message: "Transfer Successfully"
    })
})

export default accountRouter