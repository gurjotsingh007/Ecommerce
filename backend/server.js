const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//congif
dotenv.config({path:"backend/config/config.env"});

//connecting to database
connectDatabase();


app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})