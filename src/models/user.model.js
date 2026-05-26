import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["admin", "instructor", "student"],
      default: "student",
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

// Hash password before saving
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return null;
  this.password = await bcrypt.hash(this.password, 10);
});

// Compare password
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Generate refresh token
userSchema.methods.generatereRreshToken=function(){
    return jwt.sign({
  _id:this._id
}, process.env.REFRESH_TOKEN_SECRET, { expiresIn:process.env.REFRESH_TOKEN_EXPIRY});
},
//generate access Token
userSchema.methods.generateAccessToken=function(){
    return jwt.sign({
  _id:this._id,
  email:this.email,
  role: this.role
}, process.env.ACCESS_TOKEN_SECRET, { expiresIn:process.env.ACCESS_TOKEN_EXPIRY});
}
export const User=mongoose.model("User",userSchema)