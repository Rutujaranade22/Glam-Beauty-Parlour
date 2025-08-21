import React from "react";
import { Scissors, Brush, Sparkles, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/bg4.jpg')" }}
    >
      {/* Hero Content */}
      <section className="relative z-10 flex flex-col items-center text-center justify-center h-[80vh] px-6 md:px-20 text-white">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-semibold leading-tight drop-shadow-lg text-pink-800"
        >
          Glam Beauty <br />
          <span className="text-pink-800">Parlour</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow-md text-pink-900 font-serif"
        >
          Transform Your Beauty with Premium Services. Experience luxury beauty
          treatments with our expert stylists and premium products.
        </motion.p>

        <motion.div
          className="mt-6 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-800 shadow-lg transition duration-300"
          >
            Book Appointment
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
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
        className="relative z-5 grid grid-cols-3 gap-6 text-center py-6 px-10 md:px-32 text-pink-900 font-semibold"
      >
        <div>
          <h3 className="text-3xl font-bold text-pink-600">500+</h3>
          <p className="text-sm">Happy Clients</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-pink-600">5+</h3>
          <p className="text-sm">Years Experience</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-pink-600">20+</h3>
          <p className="text-sm">Premium Services</p>
        </div>
      </motion.div>

      {/* About Glam Beauty Section */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-r from-pink-50 via-pink-100 to-pink-200 text-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-pink-800">About🙍‍♀️</span>
          </h2>
          <p className="text-lg text-pink-900 max-w-3xl mx-auto mb-12">
            We are passionate about enhancing your natural beauty with our
            premium services and expert care. Our mission is to make every client
            feel confident and radiant.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
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
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl shadow-md bg-white/80 backdrop-blur-sm hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-pink-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-pink-900">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Specialties */}
          <h3 className="text-3xl font-bold text-pink-800 mb-10">
            Our <span className="text-pink-800">Specialties</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
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
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl shadow-md bg-white/80 backdrop-blur-sm hover:shadow-lg transition"
              >
                <item.icon className="w-10 h-10 text-pink-800 mb-3 mx-auto" />
                <h4 className="text-lg font-semibold text-pink-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-pink-900">{item.desc}</p>
              </motion.div>
            ))}
          </div>

         {/* Popular Services */}
<h3 className="text-3xl font-bold text-gray-800 mb-10">
   <span className="text-pink-800">Our Popular Services</span>
</h3>
<div className="grid  md:grid-cols-3 gap-8 ">
  {[
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
  ].map((service, i) => (
    <motion.div
      key={i}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="p-6 rounded-2xl shadow-md bg-white/90 backdrop-blur-sm hover:shadow-lg transition text-center"
    >
      {service.image && (
        <img
          src={`http://localhost:5000${service.image}`}
          alt={service.title}
className="w-full h-48 object-cover rounded-xl mb-4"
        />
      )}
      <h4 className="text-lg font-semibold text-pink-800 mb-2">
        {service.title}
      </h4>
      <p className="text-pink-900 mb-4">{service.desc}</p>
      <Link
        to="/services"
        className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
      >
        Learn More
      </Link>
    </motion.div>
  ))}
</div>

        </motion.div>
      </section>
    </div>
  );
}
