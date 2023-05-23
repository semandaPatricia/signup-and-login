const mongoose = require('mongoose')

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
  })

  const collection =new mongoose.model("collection1",LogInSchema)

  module.exports=collection