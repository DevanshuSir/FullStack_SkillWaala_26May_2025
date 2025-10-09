const mongoose = require("mongoose")


const connectDB = async()=>{
    try {
       await mongoose.connect()
       console.log("DB Connected Successfully")
    } catch (error) {
        console.log("Connection failed")
    }
}


module.exports = connectDB