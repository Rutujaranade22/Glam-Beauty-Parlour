import React, { useState } from "react";
import axios from "axios";

const BookingService = ({ serviceId }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login first!");
        return;
      }

      const res = await axios.post(
        "http://localhost:5000/api/bookings",
        {
          serviceId,  // ✅ matches backend expectation
          date,
          time,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("✅ Booking Successful!");
      console.log("Booking Response:", res.data);

    } catch (err) {
      console.error("Booking Error:", err.response?.data || err.message);
      alert(`❌ Failed to book service: ${err.response?.data?.message}`);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Book This Service</h2>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />

      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />

      <button
        onClick={handleBooking}
        className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingService;
