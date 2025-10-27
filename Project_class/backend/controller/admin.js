const productCollection = require("../models/product")

const addadminProductController = async(req,res)=>{
    try {
        const {Pname,Price,Cat} = req.body

         if (!Pname || !Price || !Cat) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const record = new  productCollection({
         productName:Pname,
    productPrice:Price,
    productCategory:Cat
    })

    await record.save()

    res.status(200).json({message:"Successfully Insert Product."})

    } catch (error) {
        res.status(500).json({message:"Internal server error."})
    }
    
}

const getAllProductController = async(req,res)=>{
    try {
        const record = await productCollection.find()
        res.status(200).json({data:record})
    } catch (error) {
        res.status(500).json({message:"Internal server error."})
    }
}


module.exports ={
    addadminProductController,
    getAllProductController
}