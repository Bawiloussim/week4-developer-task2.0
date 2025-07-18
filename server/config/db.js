const mongoose = require("mongoose");

// Connect to MongoDB using mongoose
const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected Successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit();
    }
};

module.exports = ConnectDB;