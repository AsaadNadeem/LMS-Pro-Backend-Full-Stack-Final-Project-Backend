import Dbconnection from "../src/db/index.js";
import { User } from "../src/models/user.model.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const createAdmin = async () => {
  try {
    await Dbconnection();
    console.log("📦 Database connected for seeding");

    const existingAdmin = await User.findOne({
      email: "asaadnadeem686@gmail.com",
    });
    if (existingAdmin) {
      console.log("⚠️ Admin already exists. No new admin created.");
      return;
    }

    const newAdmin = await User.create({
      name: "Asaad Nadeem",
      email: "asaadnadeem686@gmail.com",
      password: "asaad#3428",
      role: "admin",
    });

    console.log("✅ Admin created successfully:", newAdmin.email);
  } catch (error) {
    console.error("❌ Error creating admin:", error.message);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Disconnected from MongoDB");
  }
};

createAdmin();
