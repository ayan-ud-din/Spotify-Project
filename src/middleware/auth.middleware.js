 
 const jwt = require("jsonwebtoken")


 const AuthArtist = async (req,res,next)=>{

const token = req.cookies.token;

if(!token){
    return res.status(401).json({message:"token not found"})}

    try {
const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if( decoded.role !== "artist"){
        return res.status(403).json({message:"token found but you are not artist"})
    }

    req.user=decoded

    next()

 }catch (error) {
        console.log("error:",error);
        
      return res.status(401).json({message:"last error"})
    }
}


 const AuthUser = async (req,res,next)=>{

const token = req.cookies.token;

if(!token){
    return res.status(401).json({message:"token not found"})}

    try {
const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if( decoded.role !== "user"){
        return res.status(403).json({message:"token found but you are artist and u cant fetch music"})
    }

    req.user=decoded

    next()

 }catch (error) {
        console.log("error:",error);
        
      return res.status(401).json({message:"last error"})
    }
}


module.exports= {AuthArtist,AuthUser}