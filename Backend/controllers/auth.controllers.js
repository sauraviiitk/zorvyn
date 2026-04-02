import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register=async(req,res)=>{
    try {
        const{name,email,password}=req.body;
        if(!name || !email || !password){
            return res.status(400).json({message:"Please provide all required fields"});
        }
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User already exists"});
        }
        const hashedPassword=await bcrypt.hash(password,10);
        const user=new User({
            name,
            email,
            password:hashedPassword,
        });
        await user.save();
        res.status(201).json({message:"User registered successfully"});
    } 
    catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
}

export const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({msg:"Invalid email"});
        }
        const isMatch= await bcrypt.compare(password,user.password);
         if(!isMatch){
            return res.status(400).json({msg:"Invalid  password"});
        }
        const token=jwt.sign({
            id:user._id,
            role:user.role
        },
        
            process.env.JWT_SECRET,
            {expiresIn:"7d"}
        
    )
    res.json({
        token,
        user:user.name,
        email:user.email,
        role:user.role,
        id: user._id,
        status:user.isActive?"Active":"Inactive"
    })

        
    } catch (error) {
         res.status(500).json({ msg: err.message });
    }
}