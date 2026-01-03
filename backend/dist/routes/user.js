"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dotenv_1 = __importDefault(require("dotenv"));
const zod_1 = require("zod");
const db_1 = require("../db");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const middlleware_1 = require("../middlleware");
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_PASSWORD;
const userRouter = (0, express_1.Router)();
const signupBody = zod_1.z.object({
    firstname: zod_1.z.string(),
    lastname: zod_1.z.string(),
    username: zod_1.z.string().email(),
    password: zod_1.z.string().min(5).max(10)
});
userRouter.post("/signup", async (req, res) => {
    try {
        const parsed = signupBody.safeParse(req.body);
        if (!parsed.success) {
            res.status(411).json({
                message: "Zod validation failed",
                error: parsed.error.format()
            });
        }
        const existingUser = await db_1.UserModel.findOne({
            username: req.body.username
        });
        if (existingUser) {
            res.status(411).json({
                message: "User aleady exist with this email"
            });
        }
        const user = await db_1.UserModel.create({
            username: req.body.username,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname: req.body.lastname
        });
        const userId = user._id;
        const token = jsonwebtoken_1.default.sign({
            userId
        }, JWT_SECRET);
        res.json({
            token: token,
            message: "Signup Succesfully"
        });
    }
    catch (error) {
        res.status(411).json({
            message: "User already exists with this username",
        });
    }
});
const signinBody = zod_1.z.object({
    username: zod_1.z.string().email(),
    password: zod_1.z.string()
});
userRouter.post("/signin", async (req, res) => {
    const parsed = signinBody.safeParse(req.body);
    if (!parsed.success) {
        res.status(411).json({
            message: "email is already taken or incoorect credentials",
            error: parsed.error
        });
    }
    const user = await db_1.UserModel.findOne({
        username: req.body.username,
        password: req.body.password
    });
    if (user) {
        const token = jsonwebtoken_1.default.sign({
            userId: user._id
        }, JWT_SECRET);
        res.json({
            token: token
        });
    }
    else {
        res.status(411).json({
            message: "Incorrect Credentials"
        });
    }
});
const updateBody = zod_1.z.object({
    password: zod_1.z.string().optional(),
    firstname: zod_1.z.string().optional(),
    lastname: zod_1.z.string().optional()
});
userRouter.put("/", middlleware_1.authMidlleware, async (req, res) => {
    const parsed = updateBody.safeParse(req.body);
    if (!parsed.success) {
        res.status(411).json({
            message: "error while updating"
        });
        return;
    }
    try {
        const updateUser = await db_1.UserModel.updateOne({ _id: req.userId }, { $set: parsed.data });
        res.json({
            message: "Updated Successfully",
            updateUser
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Something went wrong during update"
        });
    }
});
userRouter.get("/bulk", async (req, res) => {
    const filter = (req.query.filter || "").toString();
    const users = await db_1.UserModel.find({
        $or: [
            { username: { $regex: filter, $options: "i" } },
            { firstname: { $regex: filter, $options: "i" } },
            { lastname: { $regex: filter, $options: "i" } }
        ]
    });
    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstname,
            lastName: user.lastname,
            _id: user._id
        }))
    });
});
exports.default = userRouter;
//# sourceMappingURL=user.js.map