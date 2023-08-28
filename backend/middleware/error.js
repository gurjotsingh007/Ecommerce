const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    
    //mongoDB id error
    if (err.name === "CastError") {
        const message = `Resource Not Found. Invalid err ${err.name}`;
        err = new ErrorHandler(message, 400);
    }    

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    });
};


//Error of id was cast error. It ws wrong id