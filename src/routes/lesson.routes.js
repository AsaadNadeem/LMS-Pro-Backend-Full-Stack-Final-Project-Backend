import { Router } from "express";
import {
  createLesson,
  deleteLesson,
  getLessonsByCourse,
  getSingleLesson,
  updateLesson,
} from "../controllers/lesson.controller.js";
import { authorizeRoles, authUser } from "../middlewares/auth.middleware.js";

const router = Router();

/* ============================================
   📖 LESSON ROUTES
============================================ */

// Get lessons by course
router.route("/course/:id").get(authUser, getLessonsByCourse);

// Create lesson (instructor only)
router
  .route("/create-lesson")
  .post(authUser, authorizeRoles("instructor"), createLesson);

// Get, update, delete single lesson
router
  .route("/:id")
  .get(authUser, getSingleLesson)
  .put(authUser, authorizeRoles("instructor"), updateLesson)
  .delete(authUser, authorizeRoles("instructor"), deleteLesson);

export default router;