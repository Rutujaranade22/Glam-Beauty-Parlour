import React, { useEffect, useState } from "react";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  // ✅ Fetch user's bookings
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:5000/api/bookings/my", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setBookings(data.bookings || []);
      } catch (err) {
        console.error("Failed to fetch bookings:", err);
      }
    };

    fetchBookings();
  }, []);

  // ✅ Cancel a booking
  const handleCancel = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`http://localhost:5000/api/bookings/cancel/${id}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      if (res.ok) {
        alert("Booking cancelled successfully!");
        setBookings((prev) => prev.map((b) => (b._id === id ? data.booking : b)));
      } else {
        alert(data.msg || "Cancel failed");
      }
    } catch (err) {
      console.error("Cancel error:", err);
    }
  };

  return (
    <div className="p-10 bg-pink-50 min-h-screen">
      <h2 className="text-3xl font-bold text-pink-600 text-center mb-8">
        My Bookings
      </h2>

      {bookings.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {booking.service?.name}
              </h3>
              <p className="text-gray-600">{booking.service?.description}</p>
              <p className="mt-2 text-pink-500 font-medium">
                {booking.date} at {booking.time}
              </p>
              <p
                className={`mt-2 font-bold ${
                  booking.status === "cancelled"
                    ? "text-red-500"
                    : "text-green-600"
                }`}
              >
                Status: {booking.status}
              </p>

              {booking.status !== "cancelled" && (
                <button
                  onClick={() => handleCancel(booking._id)}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Cancel Booking
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No bookings yet.</p>
      )}
    </div>
  );
}

export default MyBookings;
