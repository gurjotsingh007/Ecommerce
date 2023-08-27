const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModels");

//Regster a user
exports.registerUser = catchAsyncErrors(async(req, res, next) => {
    
    const {name, email, password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:"This is a sample id",
            url:"ProfilePicture"
        }
    });

    const token = user.getJWTToken();

    res.status(201).json({
        success:true,
        token
    });
});

//Login user
exports.loginUser = catchAsyncErrors(async(req, res, next) => {
    const {email, password} = req.body;

    //checking if user has a password and email both
    if(!email || !password){
        return next(new ErrorHandler("Please Enter Email or Password", 400));
    }

    const user = await User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHandler("Invalid Email or Password", 401));
    }

    const isPasswordMatched = user.comparePassword();

    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid Email or Password", 401));
    }

    const token = user.getJWTToken();
    res.status(200).json({
        success:true,
        token
    });
});