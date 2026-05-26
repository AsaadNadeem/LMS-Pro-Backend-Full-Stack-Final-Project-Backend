import mongoose from "mongoose";

const Dbconnection = async () => {
  try {
    const connection = await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log(`✅ MongoDB connected! Host: ${connection.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection FAILED", error);
    process.exit(1);
  }
};

// Listen for MongoDB disconnect events
mongoose.connection.on("disconnected", () => {
  console.warn("⚠️ MongoDB disconnected!");
});

export default Dbconnection;
