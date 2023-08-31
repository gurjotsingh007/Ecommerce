const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apiFeatures");

//Creating Product -- Admin
exports.createProduct = catchAsyncErrors(async(req, res, next) => {
    req.body.user = req.user.id;
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
});
//Get products
// new ApiFeatures(Product.find(), req.query) creates a new instance of the ApiFeatures class. 
// The ApiFeatures class is a class that is used to paginate, filter, and search for products. 
// The Product.find() method and the req.query object are passed as arguments to the constructor of the ApiFeatures class.
exports.getAllProducts = catchAsyncErrors(async(req, res, next) => {
    const resultPerPage = 2;
    const productCount = await Product.countDocuments();

    const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
    const products = await apiFeature.query;
    
    // if(!products){
    //     return next(new ErrorHandler("Product Not Found", 404));
    // }

    res.status(200).json({
        success: true,
        products,
        productCount
    });
});

//Update product
// The findByIdAndUpdate() method is used to update a product by its ID.
// The first argument to the findByIdAndUpdate() method is the ID of the product that should be updated.
// The second argument is the data that should be used to update the product.
// The third argument is an object that specifies the options for the update.
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
exports.deleteProduct = catchAsyncErrors(async(req, res, next) => {
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
exports.getProductDetails = catchAsyncErrors(async(req, res, next) => {
    const product = await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("Product Not Found", 404));
    }

    res.status(200).json({
        status:true,
        product
    });
});