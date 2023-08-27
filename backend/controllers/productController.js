const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//Creating Product -- Admin
exports.createProduct = catchAsyncErrors(async(req, res, next) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
});
//Get products
exports.getAllProducts = catchAsyncErrors(async(req, res) => {
    const products = await Product.find();
    
    if(!products){
        return next(new ErrorHandler("Product Not Found", 404));
    }

    res.status(200).json({
        success: true,
        products
    });
});

//Update product
exports.updateProduct = catchAsyncErrors(async(req, res, next) => {
    let product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product Not Found", 404));
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        product
    });
});

//Delete Product
exports.deleteProduct = (async(req, res, next) => {
    const product = await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("Product Not Found", 404));
    }

    await product.deleteOne();

    res.status(200).json({
        success:true,
        message:"Product deleted successfully"
    })
});

//Get Product Detail
exports.getProductDetails = (async(req, res, next) => {
    const product = await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("Product Not Found", 404));
    }

    res.status(200).json({
        status:true,
        product
    });
});