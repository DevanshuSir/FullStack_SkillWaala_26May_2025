const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const apiRouter = require("./routes/api") 
const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/testdb").then(()=>{
    console.log("MongoDb Connect Successfully")
}).catch(()=>{
    console.log("Connection Error")
})



app.use(express.json())
app.use(express.static("public"))
app.use("/api",apiRouter)
let port = process.env.PORT
app.listen(port , ()=>{
    console.log(`Running on port ${port}`)
})