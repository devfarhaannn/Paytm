import express from "express"
import { rootRouter } from "./routes"
import cors from 'cors'
import dotenv from 'dotenv'

// Load environment variables first, before any other imports
dotenv.config()

const app = express();
app.use(cors())
app.use(express.json())


app.use("/api/v1", rootRouter)

app.listen(3000)