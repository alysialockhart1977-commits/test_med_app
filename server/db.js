const mongoose = require('mongoose');

// MongoDB connection URI (updated with new credentials)
const mongoURI = "mongodb://root:RsvO0mShh9YCWKry2jGAKk5v@172.21.52.212:27017";

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