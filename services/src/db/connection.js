import mongoose from "mongoose";

// console.log("@@", process.env.DB_URL);
// process.exit();

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true
});