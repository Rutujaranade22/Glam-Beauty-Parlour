import Booking from "../models/Booking.js";

// Create a new booking
export const createBooking = async (req, res) => {
  try {
    const { serviceId, date, time } = req.body;   // 👈 include date & time

    if (!serviceId || !date || !time) {
      return res.status(400).json({ message: "Service ID, date and time are required" });
    }

    const booking = new Booking({
      user: req.user.id,
      service: serviceId,
      date,
      time,
    });

    await booking.save();
    res.status(201).json({ message: "Booking successful", data: booking });
  } catch (error) {
    res.status(500).json({ message: "Error creating booking", error: error.message });
  }
};
// Get user's bookings
export const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate("service");
    res.status(200).json({ bookings });
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings", error: error.message });
  }
};

// Cancel booking
export const cancelBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findOne({ _id: id, user: req.user.id });

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    booking.status = "cancelled";
    await booking.save();
    res.status(200).json({ message: "Booking cancelled successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error cancelling booking", error: error.message });
  }
};
