const apiRoutes = require("express").Router()
const userController =  require("../controller/user")
const adminController = require("../controller/admin")


apiRoutes.get("/",(req,res)=>{
    res.send("Hello Backend...")
})


apiRoutes.post("/regdata",userController.regDataController)
apiRoutes.post("/loginuser",userController.loginDataController)
apiRoutes.post("/addadminproduct",adminController.addadminProductController)
apiRoutes.get("/getproduct",adminController.getAllProductController)


module.exports = apiRoutes