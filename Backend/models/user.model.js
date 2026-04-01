import mongoose from "mongoose";
const userschema=new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password: String,
    role: {
        type: String,
        enum: ["viewer", "admin", "analyst"],
        default: "viewer"
    },
     isActive: {
      type: Boolean,
      default: true
    },

},{timestamps:true});
export default mongoose.model("User",userschema);