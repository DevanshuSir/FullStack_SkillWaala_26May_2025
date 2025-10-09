const express = require ("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const apiRoute = require("./router/api")
const connectDB = require("./config/db")

connectDB()


app.use(express.json())
app.use("/api",apiRoute)
let port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`Running on port ${port}`)
})