import React from "react";
import { Scissors, Brush, Sparkles, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const highlights = [
    {
      title: "Certified Professionals",
      desc: "Our team consists of certified beauty professionals with extensive training.",
    },
    {
      title: "500+ Happy Clients",
      desc: "We've transformed the beauty of over 500 satisfied customers.",
    },
    {
      title: "5+ Years Experience",
      desc: "Half a decade of excellence in the beauty industry.",
    },
  ];

  const specialties = [
    {
      icon: Scissors,
      title: "Hair Styling",
      desc: "Trendy and elegant hairstyles tailored for every occasion.",
    },
    {
      icon: Brush,
      title: "Makeup",
      desc: "Professional makeup services to enhance your natural beauty.",
    },
    {
      icon: Sparkles,
      title: "Skin Care",
      desc: "Rejuvenating treatments for glowing and healthy skin.",
    },
    {
      icon: Heart,
      title: "Bridal",
      desc: "Exclusive bridal packages to make your big day unforgettable.",
    },
  ];

  const popularServices = [
    {
      title: "Facial",
      desc: "Relaxing and rejuvenating facials for glowing skin.",
      image: "/uploads/facial.jpg",
    },
    {
      title: "Haircut",
      desc: "Stylish and professional haircuts for all occasions.",
      image: "/uploads/haircut.jpg",
    },
    {
      title: "Skin Care",
      desc: "Advanced skincare treatments for radiant results.",
      image: "/uploads/skin care.jpg",
    },
  ];

  const testimonials = [
    {
      name: "Priya R.",
      review: "Amazing service! The staff is so professional and caring.",
    },
    {
      name: "Ankit S.",
      review: "Loved my haircut and facial. Highly recommended!",
    },
    {
      name: "Neha M.",
      review: "The ambiance is fantastic and services top-notch.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-cover bg-center relative">
      {/* Hero Section */}
      <section
        className="w-full min-h-screen bg-cover bg-center relativez-10 flex flex-col items-center text-center justify-center h-[80vh] px-4 sm:px-20 text-white"
        style={{ backgroundImage: "url('/images/bg4.jpg')" }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-snug drop-shadow-lg text-pink-800"
        >
          Glam Beauty <br />
          <span className="text-pink-800">Parlour</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-4 max-w-xs sm:max-w-md md:max-w-2xl text-sm sm:text-base md:text-lg drop-shadow-md text-pink-900 font-serif"
        >
          Transform Your Beauty with Premium Services. Experience luxury beauty
          treatments with our expert stylists and premium products.
        </motion.p>

        <motion.div
          className="mt-6 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-800 shadow-lg transition duration-300"
          >
            Book Appointment
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white text-pink-800 font-semibold rounded-lg hover:bg-pink-100 shadow-lg transition duration-300"
          >
            View Services
          </motion.button>
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative z-5 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center py-0 px-1 sm:px-32 text-pink-900 font-semibold"
      >
        
      </motion.div>

      {/* About Section */}
      <section
        id="about"
        className="py-16 px-4 sm:px-16 bg-gradient-to-r from-pink-50 via-pink-100 to-pink-200 text-gray-800"
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-pink-800">
            About 🙍‍♀️ 
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-pink-900 max-w-3xl mx-auto mb-12">
            We are passionate about enhancing your natural beauty with our
            premium services and expert care. Our mission is to make every
            client feel confident and radiant.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl shadow-md bg-white/80 backdrop-blur-sm hover:shadow-lg transition"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-pink-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-pink-900 text-sm sm:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Specialties */}
          <h3 className="text-2xl sm:text-3xl font-bold text-pink-800 mb-6">
            Our Specialties
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {specialties.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl shadow-md bg-white/80 backdrop-blur-sm hover:shadow-lg transition text-center"
              >
                <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-pink-800 mb-3 mx-auto" />
                <h4 className="text-lg font-semibold text-pink-900 mb-2">{item.title}</h4>
                <p className="text-pink-900 text-sm sm:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Popular Services */}
          <h3 className="text-2xl sm:text-3xl font-bold text-pink-800 mb-6">
            Our Popular Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {popularServices.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="p-4 rounded-2xl shadow-md bg-white/90 backdrop-blur-sm hover:shadow-lg transition text-center"
              >
                {service.image && (
                  <img
                    src={`http://localhost:5000${service.image}`}
                    alt={service.title}
                    className="w-full h-40 sm:h-48 object-cover rounded-xl mb-4"
                    loading="lazy"
                  />
                )}
                <h4 className="text-lg font-semibold text-pink-800 mb-2">{service.title}</h4>
                <p className="text-pink-900 mb-4 text-sm sm:text-base">{service.desc}</p>
                <Link
                  to="/services"
                  className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Testimonials */}
          <h3 className="text-2xl sm:text-3xl font-bold text-pink-800 mt-16 mb-6">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl shadow-md bg-white/90 backdrop-blur-sm hover:shadow-lg transition"
              >
                <p className="text-pink-900 text-sm sm:text-base mb-2">&quot;{t.review}&quot;</p>
                <p className="font-semibold text-pink-800 text-right">- {t.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
