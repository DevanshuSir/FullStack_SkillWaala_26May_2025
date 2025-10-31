const productCollection = require("../models/product");
const queryCollection = require("../models/query")

const addadminProductController = async (req, res) => {
  try {
   
    const PImage = req.file.filename
    const { Pname, Price, Cat } = req.body;

    if (!Pname || !Price || !Cat) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const record = new productCollection({
      productName: Pname,
      productPrice: Price,
      productCategory: Cat,
      productImage:PImage
    });

    await record.save();

    res.status(200).json({ message: "Successfully Insert Product." });
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
};

const getAllProductController = async (req, res) => {
  try {
    const record = await productCollection.find();
    res.status(200).json({ data: record });
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
};

const deleteProductController = async (req, res) => {
  try {
    const productId = req.params.abc;
    await productCollection.findByIdAndDelete(productId);
    res.status(200).json({ message: "Successfully delete." });
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
};

const editValueDataController = async (req, res) => {
  try {
    const productId = req.params.abc;
    const record = await productCollection.findById(productId);
    res.status(200).json({ data: record });
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
};

const productUpdateController = async (req, res) => {
  try {
    const { Pname, Pprice, Cat, Pstatus } = req.body;
    const productId = req.params.abc;
    await productCollection.findByIdAndUpdate(productId, {
      productName: Pname,
      productPrice: Pprice,
      productCategory: Cat,
      productStatus: Pstatus,
    });
    res.status(200).json({message:"Successfully Update."})
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
};

const userAllQueryController = async(req,res)=>{
  try {
    const record = await queryCollection.find()
    res.status(200).json({data:record})
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
}

const queryDeleteController = async(req,res)=>{
  try {
    const queryId = req.params.abc
  await queryCollection.findByIdAndDelete(queryId)
  res.status(200).json({message:"Successfully delete."})
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
  
}

const querySingleDataController = async(req,res)=>{
  
  try {
    const queryId = req.params.abc
    const record = await queryCollection.findById(queryId)
    res.status(200).json({data:record})
  } catch (error) {
     res.status(500).json({ message: "Internal server error." });
  }
}

const mailReplyController = (req,res)=>{
  const {to,sub,body} = req.body
  const queryId = req.params.abc
}

module.exports = {
  addadminProductController,
  getAllProductController,
  deleteProductController,
  editValueDataController,
  productUpdateController,
  userAllQueryController,
  queryDeleteController,
  querySingleDataController,
  mailReplyController
};
