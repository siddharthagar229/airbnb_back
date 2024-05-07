const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/mern_admin";
// mongoose.connect(URI);
const URI = "mongodb+srv://sid:sid%40123@cluster0.j6rd71z.mongodb.net/airbnb?retryWrites=true&w=majority&appName=Cluster0";

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("connection successful to DB");
    } catch (error) {
        console.log(error)
        console.error("database connection failed");
        process.exit(0);
    }
};

module.exports = connectDb;