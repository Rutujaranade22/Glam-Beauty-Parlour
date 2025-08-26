import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("⚠️ Please login to view your bookings.");
      navigate("/login");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/bookings/mybookings", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (res.ok) {
        setBookings(data.bookings || []);
      } else {
        alert(data.message || "Failed to fetch bookings");
      }
    } catch (err) {
      console.error("Error fetching bookings:", err);
    }
  };

  // ✅ Cancel booking
  const cancelBooking = async (id) => {
    const token = localStorage.getItem("token");

    if (!window.confirm("Are you sure you want to cancel this booking?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/bookings/cancel/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Booking cancelled successfully.");
        fetchBookings(); // Refresh bookings
      } else {
        alert(data.message || "Failed to cancel booking.");
      }
    } catch (err) {
      console.error("Error cancelling booking:", err);
    }
  };

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">My Bookings</h1>

      {bookings.length === 0 ? (
        <p className="text-gray-600">You don’t have any bookings yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="p-6 bg-white rounded-xl shadow-lg border border-pink-100"
            >
              <h2 className="text-xl font-semibold text-pink-600 mb-2">
                {booking.service?.name}
              </h2>
              <p className="text-gray-700 mb-1">
                <span className="font-medium">Date:</span> {booking.date}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-medium">Time:</span> {booking.time}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-medium">Price:</span> ₹
                {booking.service?.price}
              </p>
              <p
                className={`mt-2 px-3 py-1 rounded-lg text-sm font-medium inline-block ${
                  booking.status === "Confirmed"
                    ? "bg-green-100 text-green-700"
                    : booking.status === "Cancelled"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {booking.status || "Pending"}
              </p>

              {booking.status !== "Cancelled" && (
                <button
                  onClick={() => cancelBooking(booking._id)}
                  className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                >
                  Cancel Booking
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyBookings;
