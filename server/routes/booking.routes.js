import express from "express";
import { createBooking, getMyBookings, cancelBooking } from "../controllers/booking.controller.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Routes
router.post("/", authMiddleware, createBooking);       // Create a booking
router.get("/", authMiddleware, getMyBookings);        // Get all user's bookings
router.put("/cancel/:id", authMiddleware, cancelBooking); // Cancel a booking

export default router;
