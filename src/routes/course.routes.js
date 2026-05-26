import { Router } from "express";
import {
  createCourse,
  deleteCourse,
  getAllCourses,
  getInstructorCourses,
  getSingleCourse,
  updateCourse,
} from "../controllers/course.controller.js";
import { authorizeRoles, authUser } from "../middlewares/auth.middleware.js";

const router = Router();

/* ============================================
   📚 COURSE ROUTES - PUBLIC & PROTECTED
============================================ */

// Get all courses (authenticated users only)
router.route("/").get(authUser, getAllCourses);

// Create course (instructor only)
router.route("/").post(authUser, authorizeRoles("instructor"), createCourse);

// Get single course (public)
router.route("/:id").get(getSingleCourse);

/* ============================================
   👨‍🏫 INSTRUCTOR ROUTES
============================================ */

// Get instructor's courses
router.get(
  "/instructor/my-courses",
  authUser,
  authorizeRoles("instructor"),
  getInstructorCourses
);

// Update course (instructor only)
router.route("/:id").put(authUser, authorizeRoles("instructor"), updateCourse);

// Delete course (instructor or admin)
router
  .route("/:id")
  .delete(
    authUser,
    authorizeRoles("instructor", "admin"),
    deleteCourse
  );

export default router;