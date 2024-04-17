const User=require('../models/User')
const  {StatusCodes}=require('http-status-codes')
const {BadRequestError}=require('../errors')
const bcrypt=require('bcryptjs')
 const register=async(req,res)=>{    
    const user=await User.create({...req.body})
    const token=user.createJWT()
  
  res.status(StatusCodes.CREATED).json({user:{name:user.name},token})
}
const login=(req,res)=>{
    res.send('login user')
}

module.exports ={
    register,login
}