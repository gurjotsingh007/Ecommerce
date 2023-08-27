const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//Handling Uncaught Exception
process.on("uncaughtException", (err)=>{
    console.log(`Error: ${err.message}`);
    console.log('Shutting Down the Server dur to Unhandled Exceeption');

    process.exit(1);
})

//congif
dotenv.config({path:"backend/config/config.env"});

//connecting to database
connectDatabase(); 

const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});



//Unhandled Promise Rejection as mongo
process.on("unhandledRejection", (err)=>{
    console.log(`Error ${err.message}`);
    console.log('Shutting Down the Server dur to Unhandled Promise Rejection');

    server.close(()=>{
        process.exit(1);
    });
});