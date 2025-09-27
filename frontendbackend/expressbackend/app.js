const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const apiRouter = require("./routes/api")



app.use(express.json())
app.use(express.static("public"))
app.use("/api",apiRouter)
let port = process.env.PORT
app.listen(port , ()=>{
    console.log(`Running on port ${port}`)
})