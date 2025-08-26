import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Services() {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/services");
        const data = await res.json();
        setServices(data.services);
      } catch (err) {
        console.error("Failed to fetch services:", err);
      }
    };

    fetchServices();
  }, []);

  // ✅ Instead of booking directly, redirect to booking page
  const handleBookingRedirect = (serviceId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("⚠️ Please login first to book a service.");
      navigate("/login");
      return;
    }

    navigate(`/booking/${serviceId}`); // ✅ Redirect with serviceId
  };

  return (
    <div className="p-10 bg-gradient-to-b from-pink-50 to-white min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12 mt-10 text-pink-600">
        ✨ Our Beauty Services ✨
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service._id}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Image */}
            {service.image && (
              <img
                src={`http://localhost:5000${service.image}`}
                alt={service.name}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
            )}

            {/* Service Info */}
            <h2 className="text-2xl font-semibold text-gray-800">{service.name}</h2>
            <p className="text-gray-500">{service.duration}</p>
            <p className="text-pink-600 font-bold text-lg mt-2">₹{service.price}</p>
            <p className="text-gray-600 mt-2">{service.description}</p>

            {/* Book Now Button */}
            <motion.button
              className="mt-4 w-full bg-pink-500 text-white py-2 rounded-lg shadow-md hover:bg-pink-600"
              whileTap={{ scale: 0.95 }}
              onClick={() => handleBookingRedirect(service._id)} // ✅ Redirect instead of auto-booking
            >
              Book Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;
