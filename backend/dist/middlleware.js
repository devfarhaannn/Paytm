"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMidlleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_PASSWORD;
const authMidlleware = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({});
    }
    // @ts-ignore
    const token = authHeader?.split(' ')[1];
    if (!token) {
        res.status(411).json({
            message: "auth token is required"
        });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        // @ts-ignore
        if (decoded.userId) {
            // @ts-ignore
            req.userId = decoded.userId;
            next();
        }
        else {
            return res.status(403).json();
        }
    }
    catch (error) {
        res.status(403).json({
            message: "Invalid or expired token",
        });
    }
};
exports.authMidlleware = authMidlleware;
//# sourceMappingURL=middlleware.js.map