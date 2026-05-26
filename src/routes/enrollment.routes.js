import { Router } from "express";
import {
  enrollCourse,
  getMyCourses,
  updateProgress,
} from "../controllers/entrollment.controller.js";
import { authorizeRoles, authUser } from "../middlewares/auth.middleware.js";

const router = Router();

/* ============================================
   👨‍🎓 STUDENT ENROLLMENT ROUTES
============================================ */

// Enroll in course
router
  .route("/enroll")
  .post(authUser, authorizeRoles("student"), enrollCourse);

// Get student's enrolled courses
router
  .route("/my-courses")
  .get(authUser, authorizeRoles("student"), getMyCourses);

// Update lesson progress
router
  .route("/progress/:enrollmentId")
  .put(authUser, authorizeRoles("student"), updateProgress);

export default router;