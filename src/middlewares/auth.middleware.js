import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";

const authUser = async (req, _, next) => {
  try {

    // Get token from cookie or Authorization header
    let token =
      req.cookies?.accessToken ||
      (req.header("Authorization") &&
        req.header("Authorization").replace("Bearer ", ""));

    if (!token) {
      throw new ApiError(401, "Invalid credentials!");
    }

    // Verify token
    const verifyToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (!verifyToken) {
      throw new ApiError(401, "Invalid verification");
    }

    // Find user
    const user = await User.findById(verifyToken?._id).select("-password");

    if (!user) {
      throw new ApiError(401, "User not found with token");
    }

    // Attach user to request
    req.user = user;

    next();

  } catch (error) {
    next(new ApiError(401, error?.message || "Invalid access"));
  }
};


// ==========================================
// ROLE AUTHORIZATION MIDDLEWARE
// ==========================================

const authorizeRoles = (...allowedRoles) => {
  return (req, _, next) => {

    if (!req.user) {
      return next(new ApiError(401, "Unauthorized"));
    }

    if (!allowedRoles.includes(req.user.role)) {
      return next(new ApiError(403, "Access is denied"));
    }

    next();
  };
};

export { authUser, authorizeRoles };
