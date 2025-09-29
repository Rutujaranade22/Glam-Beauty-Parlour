import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function BookService() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [bookingData, setBookingData] = useState({ date: "", time: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching service with ID:", serviceId);

    const fetchService = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/services/${serviceId}`);
        const data = await res.json();
        console.log("Service fetched:", data);
        setService(data);
      } catch (err) {
        console.error("Failed to fetch service:", err);
        setService(null);
      } finally {
        setLoading(false); // ✅ stop loading after fetch finishes
      }
    };

    fetchService();
  }, [serviceId]);

  const handleBooking = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      alert("⚠️ Please login first to book a service.");
      navigate("/login");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          serviceId: serviceId, // ✅ FIX: backend expects serviceId, not service
          date: bookingData.date,
          time: bookingData.time,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || "Booking failed");

      alert("🎉 Booking successful!");
      navigate("/mybookings");
    } catch (err) {
      console.error(err);
      alert(`⚠️ ${err.message}`);
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-pink-300 border-t-pink-600 rounded-full animate-spin"></div>
      </div>
    );

  if (!service)
    return <p className="text-center mt-32 text-red-500">Service not found!</p>;

  return (
    <div className="p-32 bg-pink-50 min-h-screen">
      <div className="max-w-xl mx-auto bg-white p-16 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-pink-600 mb-4">
          Book {service.name}
        </h2>
        <p className="text-gray-600 mb-2">{service.description}</p>
        <p className="font-semibold text-pink-500 mb-6">
          Price: ₹{service.price} | Duration: {service.duration}
        </p>

        <form onSubmit={handleBooking} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Date</label>
            <input
              type="date"
              value={bookingData.date}
              onChange={(e) =>
                setBookingData({ ...bookingData, date: e.target.value })
              }
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Time</label>
            <input
              type="time"
              value={bookingData.time}
              onChange={(e) =>
                setBookingData({ ...bookingData, time: e.target.value })
              }
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookService;
