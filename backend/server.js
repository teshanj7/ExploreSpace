const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
const authenticate = require("./middleware/userMiddleware.js");

const PORT = process.env.PORT || 8070;

// app middlewares
app.use(cors());
app.use(bodyParser.json());

//database connection
const URL = process.env.MONGODB_URL;

const connection = mongoose.connection;

mongoose.connect(URL, {});

connection.once("open", () => {
    console.log("MongoDB Connection Success!");
})

app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`);
})

//implementation of the routes

//authentication
const authRouter = require('./routes/authRoute.js');
app.use("/auth", authRouter);

//user mgmt
const userRouter = require("./routes/userRoute.js");
app.use("/user", authenticate, userRouter);


module.exports = app;