import express from "express"
import dotenv from "dotenv"
import userRoutes from "./routes/User.js"
import connectDb from "./config/db.js"
//configure the environment variables
dotenv.config()
//database configuration
connectDb()
 
const app=express()
//routes
app.use("api/v1/user",userRoutes)
const PORT=process.env.PORT 
app.listen(PORT,()=>{
  console.log(`server running on ${PORT}`)
})