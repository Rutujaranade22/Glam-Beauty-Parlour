import { useEffect, useState } from "react";
import axios from "axios";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/bookings/my", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBookings(res.data.bookings);
      } catch (err) {
        console.error(err.response?.data);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
      <div className="space-y-4">
        {bookings.map((b) => (
          <div
            key={b._id}
            className="border p-4 rounded-lg shadow-md bg-white"
          >
            <p><strong>Service:</strong> {b.service?.name}</p>
            <p><strong>Date:</strong> {b.date}</p>
            <p><strong>Time:</strong> {b.time}</p>
            <p><strong>Status:</strong> {b.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
