import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  try {
    const { serviceId, date, time } = req.body;

    if (!serviceId || !date || !time) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const booking = new Booking({
      user: req.user.id,  // ✅ from JWT
      service: serviceId,
      date,
      time,
    });

    await booking.save();
    res.status(201).json({ msg: "Booking created successfully", booking });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

export const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate("service")
      .sort({ date: 1 });
    res.json({ bookings });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

export const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      { status: "cancelled" },
      { new: true }
    );
    if (!booking) return res.status(404).json({ msg: "Booking not found" });
    res.json({ msg: "Booking cancelled successfully", booking });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};
