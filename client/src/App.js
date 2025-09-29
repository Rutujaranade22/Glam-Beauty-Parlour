import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navrbar";   // ✅ Fixed spelling
import Footer from "./components/footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyBookings from "./pages/MyBookings";
import Home from "./pages/Home";
import Services from "./pages/Services";  // ✅ Import Services Page
import BookingService from "./pages/BookService";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
    <Route path="/mybookings" element={<MyBookings />} />
           <Route path="/signup" element={<Signup />} />
              <Route path="/services" element={<Services />} />
      <Route path="/booking/:serviceId" element={<BookingService />} />
       </Routes>
  <Toaster position="top-right" reverseOrder={false} />
      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
