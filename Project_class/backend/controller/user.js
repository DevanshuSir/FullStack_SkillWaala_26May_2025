const userCollaction = require("../models/user");
const bcrypt = require("bcrypt")
const productCollection = require("../models/product")
const queryCollection = require("../models/query")

const regDataController = async (req, res) => {
  try {
    const { fname, email, pass } = req.body;

    if (!fname || !email || !pass) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const emailExist = await userCollaction.findOne({ userEmail: email });

    if (emailExist) {
      return res.status(400).json({ message: "Email already register." });
    }

    const hashPassword = await bcrypt.hash(pass,10)

    const record = new userCollaction({
      userName: fname,
      userEmail: email,
      userPass: hashPassword,
    });
    await record.save();
    res.status(200).json({message:"Successfully register."})
  } catch (error) {
    res.status(500).json({message:"Internal server error."})
  }
};

const loginDataController = async(req,res)=>{
  try {
     const {loginEmail,loginPass} = req.body
  const userCheck = await userCollaction.findOne({userEmail:loginEmail})
  if(!userCheck){
    return res.status(400).json({message:"User not found."})
  }

  const matchPass = await bcrypt.compare(loginPass,userCheck.userPass)

  if(!matchPass){
    return res.status(400).json({message:"Invalid credentials."})
  }

  res.status(200).json({
    message:"Successfully login"
  })

  } catch (error) {
     res.status(500).json({message:"Internal server error."})
  }
 
}

const userProductController = async(req,res)=>{
  try {
    const record = await productCollection.find({productStatus:"In-Stock"})
    res.status(200).json({data:record})
  } catch (error) {
     res.status(500).json({message:"Internal server error."})
  }
}


const userQueryController = async(req,res)=>{
  try {
    const {userName,userEmail,userQuery} = req.body
    console.log(req.body)
    const record = new queryCollection({
      Name:userName,
    Email:userEmail,
    Query:userQuery,
    })
   await record.save()
   res.status(200).json({message:"Successfully submit your query."})
  } catch (error) {
    res.status(500).json({message:"Internal server error."})
  }
  
}

module.exports = {
  regDataController,
  loginDataController,
  userProductController,
  userQueryController
};
