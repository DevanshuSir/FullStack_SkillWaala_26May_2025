const homepageController = (req,res)=>{
    res.send("Hello express js ")
}


const userDataController = (req,res)=>{
    res.send("UserData :- Devanshu Sir")
}

let dbData = []


const DataController = (req,res)=>{
    dbData.push(req.body)
    res.json("Successfully Submit...")
}

const showDataContreoller = (req,res)=>{
    res.json(dbData)
}

const deleteUserController = (req,res)=>{
    const userId = parseInt(req.params.id)
    
    let filterdValue = dbData.filter((user,index)=>index !== userId)
    dbData = [...filterdValue] 
    res.json({message:"Succcessfully Delete" , data:filterdValue})
   
}


const updateDataController = (req,res)=>{
    const index = req.params.id
    const singleData = dbData[index]
    res.json({data:singleData})
}

const newUpdateValueController = (req,res)=>{
    const index = req.params.id
    const newValue = req.body.userName
    const newObj = {UserName:newValue}
    dbData.splice(index,1,newObj)
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