"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlleware_1 = require("../middlleware");
const db_1 = require("../db");
const mongoose_1 = __importDefault(require("mongoose"));
const accountRouter = (0, express_1.Router)();
accountRouter.get("/balance", middlleware_1.authMidlleware, async (req, res) => {
    const account = await db_1.AccountModel.findOne({
        // @ts-ignore
        userId: req.userId
    });
    res.json({
        balance: account?.balance
    });
});
accountRouter.post("/transfer", middlleware_1.authMidlleware, async (req, res) => {
    const session = await mongoose_1.default.startSession();
    session.startTransaction();
    const { amount, to } = req.body;
    const account = await db_1.AccountModel.findOne({
        userId: req.userId
    }).session(session);
    if (!account || account.balance < amount) {
        await session.abortTransaction();
        res.status(400).json({
            message: "Invalid account or Insufficient balance"
        });
    }
    const toAccount = await db_1.AccountModel.findOne({
        userId: to
    }).session(session);
    if (!toAccount) {
        await session.abortTransaction();
        res.status(400).json({
            message: "Accont not found"
        });
    }
    await db_1.AccountModel.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await db_1.AccountModel.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);
    await session.commitTransaction();
    res.json({
        message: "Transfer Successfully"
    });
});
exports.default = accountRouter;
//# sourceMappingURL=account.js.map