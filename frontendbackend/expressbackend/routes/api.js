const router = require("express").Router()
const userController = require("../controllers/user")

router.get("/",userController.homepageController)
router.get("/user",userController.userDataController)
router.post("/data",userController.DataController)
router.get("/showdata",userController.showDataContreoller)
router.delete("/userdelete/:id",userController.deleteUserController)
router.get("/updatedata/:id",userController.updateDataController)
router.put("/newupdatevalue/:id",userController.newUpdateValueController)


module.exports = router