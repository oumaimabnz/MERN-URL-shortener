import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import urlRoutes from './routes/url.js'

dotenv.config()

const app = express ()

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST"]
}))
app.use(express.json())

app.use('/', urlRoutes) //use all routes defined in urlRoutes starting from the root path

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("connected to MongoDB")
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("Error connecting to MongoDB:" ,error)
})