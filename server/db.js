const mongoose = require('mongoose');

// MongoDB connection URI (from your lab)
const mongoURI = "mongodb://root:UtdsSmtM5zGWwPrC9b6T6G7s@172.21.13.209:27017/test_med";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = connectToMongo;