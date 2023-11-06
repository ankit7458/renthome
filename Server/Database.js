const mongoose = require('mongoose');

const dbURL = "mongodb+srv://ankit-singh:Chikchik0119@cluster0.4tgzp2z.mongodb.net/renthome"
const connectDB = () => {
    try {
        mongoose.connect(dbURL)
        console.log("Database Connected Successfully!")
    } catch (error) {
        console.log(error)
    }
};

module.exports = connectDB;