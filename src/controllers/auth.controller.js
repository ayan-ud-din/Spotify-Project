  const userModel = require('../models/user.model');
  const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs')

  const registerUser = async (req, res) => {

    const{username, email ,password, role ="user"}= req.body;

    const isUserAlreadyExists = await userModel.findOne({
        $or: [
            { email: email },
            { username: username }
        ]
    });

if(isUserAlreadyExists){
    return res.status(409).json({message:"User already exists"})
}

const hash = await bcrypt.hash(password, 10);

const user = await userModel.create({
    email: email,
    username: username,
    password: hash,
    role: role
});


    const token = jwt.sign({
        id : user._id,
        role :user.role
    },process.env.JWT_SECRET)


    res.cookie("token", token)

    res.json({
        message:"User registered successfully",
        user
       
    })


  }


  const loginUser = async (req, res) => {
const { email, password ,username } = req.body;

const user = await userModel.findOne({
    $or: [
        { email: email },
        { username: username }
    ]
});

if (!user){
    return res.status(409).json({message :"Invalid Username or email"})
}

const isPasswordMatch = await bcrypt.compare(password, user.password);


if(!isPasswordMatch){
    return res.status(409).json({message:"Invalid Credentials"})
  }

const token = jwt.sign({
    id: user._id,
    role: user.role
}, process.env.JWT_SECRET);

res.cookie("token", token);

res.status(200).json({
    message: "User logged in successfully",
    user: {
        id: user._id,
        email: user.email,
        username: user.username,
        role: user.role
    }
});

    };

    const logoutUser = async (req,res)=>{
        res.clearCookie("token")
res.status(200).json({
    message:"Logged out successfully"
})

    }

    module.exports = {registerUser , loginUser,logoutUser};