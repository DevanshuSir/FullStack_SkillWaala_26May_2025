const userCollection = require("../models/user")

const homepageController = (req,res)=>{
    res.send("Hello express js ")
}


const userDataController = (req,res)=>{
    res.send("UserData :- Devanshu Sir")
}

let dbData = []


const DataController = async(req,res)=>{
    // dbData.push(req.body)
    // res.json("Successfully Submit...")
    const {UserName} = req.body
    const record = new userCollection({
        Username:UserName
    })
    await record.save()
    res.json("Successfully Submit...")
}

const showDataContreoller = async(req,res)=>{
    // res.json(dbData)
    const record = await userCollection.find()
    res.json(record)
}

const deleteUserController = async(req,res)=>{
    // const userId = parseInt(req.params.id)
    
    // let filterdValue = dbData.filter((user,index)=>index !== userId)
    // dbData = [...filterdValue] 
    // res.json({message:"Succcessfully Delete" , data:filterdValue})

    const userId = req.params.id
     await userCollection.findByIdAndDelete(userId)
    res.json({message:"Succcessfully Delete" })
   
}


const updateDataController = async(req,res)=>{
    // const index = req.params.id
    // const singleData = dbData[index]
    // res.json({data:singleData})

    const userId = req.params.id
    const singleData = await userCollection.findById(userId)
    res.json({data:singleData})
}

const newUpdateValueController = async(req,res)=>{
    const index = req.params.id
    const newValue = req.body.userName
    // const newObj = {UserName:newValue}
    // dbData.splice(index,1,newObj)
    // res.json("Successfully Update..")
    await  userCollection.findByIdAndUpdate(index,{
        Username:newValue
    })
    res.json("Successfully Update..")
}


module.exports = {
    homepageController,
    userDataController,
    DataController,
    showDataContreoller,
    deleteUserController,
    updateDataController,
    newUpdateValueController
}