const apiRoutes = require("express").Router()
const userController =  require("../controller/user")
const adminController = require("../controller/admin")
const uploads = require("../middleware/multer")


apiRoutes.get("/",(req,res)=>{
    res.send("Hello Backend...")
})


apiRoutes.post("/regdata",userController.regDataController)
apiRoutes.post("/loginuser",userController.loginDataController)
apiRoutes.post("/addadminproduct",uploads.single("image"),adminController.addadminProductController)
apiRoutes.get("/getproduct",adminController.getAllProductController)
apiRoutes.delete("/productdelete/:abc",adminController.deleteProductController)
apiRoutes.get("/editvaluedata/:abc",adminController.editValueDataController)
apiRoutes.post("/productupdate/:abc",adminController.productUpdateController)
apiRoutes.get("/userproducts",userController.userProductController)
apiRoutes.post("/userquery",userController.userQueryController)
apiRoutes.get("/userallquery",adminController.userAllQueryController)
apiRoutes.delete("/querydelete/:abc",adminController.queryDeleteController)
apiRoutes.get("/querysingledata/:abc",adminController.querySingleDataController)
apiRoutes.post("/mailreply/:abc",adminController.mailReplyController)


module.exports = apiRoutes