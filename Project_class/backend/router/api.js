const apiRoutes = require("express").Router()


apiRoutes.get("/",(req,res)=>{
    res.send("Hello Backend...")
})

apiRoutes.post("/data",(req,res)=>{
    console.log(req.body)
    res.send("Data get...")
})


module.exports = apiRoutes