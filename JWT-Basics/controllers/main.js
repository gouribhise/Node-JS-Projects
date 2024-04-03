//if exists create new JWT
//setup authentication so only the request with jwt can access dashboard
const jwt=require('jsonwebtoken')
const customAPIError=require('../errors/custom-error')
const {BadRequest}=require('../errors')
const login=(req,res)=>{
    const{username,password}=req.body
    if(!username||!password){
throw new BadRequest('Please provide email and password')
    }
    //dummy id acutally use database id
    const id=new Date().getDate()
    const token=jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})
    
    res.status(200).json({msg:'user created',token})
}

const dashboard=async(req,res)=>{
    const luckyNumber=Math.floor(Math.random()*100)
    
    res.status(200).json({msg:`${req.user.username}`,secret:`your lucky number is ${luckyNumber}`})
 
   
}

module.exports={
    login,dashboard
}