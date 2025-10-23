const apiRoutes = require("express").Router()
const userController =  require("../controller/user")


apiRoutes.get("/",(req,res)=>{
    res.send("Hello Backend...")
})


apiRoutes.post("/regdata",userController.regDataController)


module.exports = apiRoutes