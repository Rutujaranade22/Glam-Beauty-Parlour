import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function BookingService() {
  const { id } = useParams(); // serviceId from URL
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/services/${id}`);
        const data = await res.json();
        setService(data.service);
      } catch (err) {
        console.error("Failed to fetch service:", err);
      }
    };

    fetchService();
  }, [id]);

  const handleConfirmBooking = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("⚠️ Please login first.");
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
        body: JSON.stringify({ serviceId: id, date, time }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("🎉 Booking confirmed!");
        navigate("/mybookings");
      } else {
        alert(data.message || "❌ Booking failed.");
      }
    } catch (err) {
      console.error("Booking error:", err);
      alert("⚠️ Something went wrong.");
    }
  };

  if (!service) return <p className="text-center mt-10">Loading service...</p>;

  return (
    <div className="p-10 max-w-lg mx-auto bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-pink-600 mb-4">
        Book {service.name}
      </h1>
      <p className="text-gray-600 mb-2">{service.description}</p>
      <p className="text-pink-600 font-bold mb-6">₹{service.price}</p>

      {/* Date Input */}
      <label className="block mb-2 font-medium">Select Date:</label>
      <input
        type="date"
        className="w-full border p-2 rounded mb-4"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      {/* Time Input */}
      <label className="block mb-2 font-medium">Select Time:</label>
      <input
        type="time"
        className="w-full border p-2 rounded mb-6"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button
        onClick={handleConfirmBooking}
        className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600"
      >
        Confirm Booking
      </button>
    </div>
  );
}
 export default BookingService;
