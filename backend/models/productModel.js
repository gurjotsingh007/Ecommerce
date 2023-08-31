const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please enter the product name"],
        trim: true
    },
    description:{
        type:String,
        required:[true, "Please enter the product description"]
    },
    price:{
        type:Number,
        required:[true, "Please enter the product's price"],
        maxLength:[8, "Price cannot exceed 8 characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    //array of objects
    images:[
        {
            public_id:{
            type:String,
            required:true
        },
            url:{
                type:String,
                required:true
            }
    }
    ],
    category:{
        type:String,
        required:[true, "Please enter product category"]
    },
    stock:{
        type:Number,
        required:[true, "Please enter product's stock"],
        maxLength:[4, "Stock cannot exceed 4 characters"],
        default:1
    },
    numberOfReviews:{
        type:Number,
        default:1
    },
    reviews:[
        {
            name:{
            type:String,
            required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})
module.exports = mongoose.model("Product", productSchema);