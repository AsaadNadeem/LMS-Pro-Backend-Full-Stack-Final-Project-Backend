import { Router } from "express";
import {
  createInstructor,
  deleteUser,
  getAllUsers,
  getAnalytics,
} from "../controllers/admin.controller.js";
import { authorizeRoles, authUser } from "../middlewares/auth.middleware.js";

const router = Router();

/* ============================================
   🛠️ ADMIN ROUTES
============================================ */

// Get all users
router
  .route("/users")
  .get(authUser, authorizeRoles("admin"), getAllUsers);

// Delete user
router
  .route("/users/:id")
  .delete(authUser, authorizeRoles("admin"), deleteUser);

// Get analytics dashboard
router
  .route("/dashboard")
  .get(authUser, authorizeRoles("admin"), getAnalytics);

// Create instructor account
router
  .route("/create-instructor")
  .post(authUser, authorizeRoles("admin"), createInstructor);

export default router;