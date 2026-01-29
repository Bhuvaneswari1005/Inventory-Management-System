// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import User from '../models/User.js';

// const login = async(req ,res)=>{
//     try{
//         const {email,password} = req.body;
//         const user = await User.findOne({email});
//         if(!user){
//             return res.status(401).json({success:false,message:"User not found"});
//         }

//         const isMatch = await bcrypt.compare(password,user.password);
//     }
// }