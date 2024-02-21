const mongoose= require('mongoose')

const userSchema = new mongoose.Schema({
  name:{type:String, required:true},
  email:{type:String, required:true},
  password:{type:String, required:true},
  phone:{type:String, required:true},
  admin:{type:Boolean, required:true, default:false},
  
},{timestamps:true})

const userModel = mongoose.model('ecomm-users',userSchema)

module.exports= userModel