import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import {
  createBooking,
  getMyBookings,
  cancelBooking,
} from "../controllers/booking.controller.js";

const router = express.Router();

// ✅ Create new booking
router.post("/", authMiddleware, createBooking);

// ✅ Get bookings of logged-in user
router.get("/my", authMiddleware, getMyBookings);

// ✅ Cancel booking
router.put("/cancel/:id", authMiddleware, cancelBooking);

export default router;
