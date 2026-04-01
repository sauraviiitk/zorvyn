import mongoose from "mongoose";
const recordschema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    amount:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        enum:["income","expense"],
        required:true
    },
    category:{
         type: String,
      required: true
    },
    date:{
        type:Date,
        default:Date.now
    },
    note:String,
     isDeleted: {
      type: Boolean,
      default: false
    }
},{ timestamps: true });
export default mongoose.model("Record",recordschema);