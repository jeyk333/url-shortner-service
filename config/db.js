const mongoose = require("mongoose");
const db = require("./keys");

const connectDB = async () => {
  try {
    await mongoose.connect(db.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
