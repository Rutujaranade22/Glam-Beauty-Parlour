import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null); // Modal state

  // Fetch user's bookings
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

  // Open modal
  const openModal = (booking) => setSelectedBooking(booking);

  // Close modal
  const closeModal = () => setSelectedBooking(null);

  // Cancel booking
  const handleCancel = async (id) => {
    if (!window.confirm("Are you sure you want to cancel this booking?")) return;
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`http://localhost:5000/api/bookings/cancel/${id}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("Booking cancelled successfully!", {
          style: { borderRadius: "10px", background: "#FF4D4F", color: "#fff", padding: "16px 24px" },
        });
        setBookings((prev) => prev.map((b) => (b._id === id ? data.booking : b)));
        closeModal();
      } else {
        toast.error(data.msg || "Cancel failed", {
          style: { borderRadius: "10px", background: "#FF4D4F", color: "#fff", padding: "16px 24px" },
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!", {
        style: { borderRadius: "10px", background: "#FF4D4F", color: "#fff", padding: "16px 24px" },
      });
    }
  };

  return (
    <div className="p-12 bg-pink-50 min-h-screen">
      <Toaster
        containerStyle={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      />
      <h2 className="text-3xl font-bold text-pink-600 text-center p-7 mb-8">My Bookings</h2>

      {bookings.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white p-6 rounded-xl shadow-md cursor-pointer hover:shadow-lg transition"
              onClick={() => openModal(booking)}
            >
              <h3 className="text-xl font-semibold text-gray-800">{booking.service?.name}</h3>
              <p className="text-gray-600">{booking.service?.description}</p>
              <p className="mt-2 text-pink-500 font-medium">{booking.date} at {booking.time}</p>
              <p
                className={`mt-2 font-bold ${
                  booking.status === "cancelled"
                    ? "text-red-500"
                    : booking.status === "pending"
                    ? "text-orange-500"
                    : "text-green-600"
                }`}
              >
                Status: {booking.status}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No bookings yet.</p>
      )}

      {/* Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 font-bold text-xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-pink-600 mb-4">{selectedBooking.service?.name}</h2>
            <p className="text-gray-600 mb-2">{selectedBooking.service?.description}</p>
            <p className="font-semibold text-pink-500 mb-4">
              Price: ₹{selectedBooking.service?.price} | Duration: {selectedBooking.service?.duration}
            </p>

            {selectedBooking.status !== "cancelled" ? (
              <button
                onClick={() => handleCancel(selectedBooking._id)}
                className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
              >
                Cancel Booking
              </button>
            ) : (
              <p className="text-red-500 font-semibold mt-4">This booking is cancelled.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default MyBookings;
