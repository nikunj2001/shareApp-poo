require('dotenv').config();
const mongoose = require('mongoose')
const connectDB=()=>{
    mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:true})

    const connection = mongoose.connection;
    connection.once("open",()=>{
        console.log("DAta Base connected");
    }).catch(err=>{
        "Connection Failed"
    })  
}
module.exports=connectDB;