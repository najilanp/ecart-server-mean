const users = require('../Models/userSchema')

//register
exports.registerController=async(req,res)=>{
    const {username,email,password}=req.body
    try{
     const userDetails=await users.findOne({email})
     if(userDetails){
        res.status(406).json("user already exist..please login")
     }else{
       const newUser=new users({
        username,email,password
     })
     await newUser.save()
     res.status(200).json(newUser)
     }
    }catch(err){
        res.status(401).json(err)
    }
}