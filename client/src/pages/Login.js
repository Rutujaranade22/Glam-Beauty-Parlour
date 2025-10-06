import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
     const res = await axios.post("https://glam-beauty-parlour-backend.onrender.com/api/auth/login", {
  email,
  password,
});


      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // Show success toast
      toast.success("Login successful!", {
        duration: 2000, // 2 seconds
        style: {
          borderRadius: '10px',
          background: '#4BB543',
          color: '#fff',
          padding: '16px 24px',
          fontSize: '16px',
        }
      });

      // Redirect after a short delay
      setTimeout(() => {
        navigate("/services");
      }, 2000);
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed", {
        duration: 2000,
        style: {
          borderRadius: '10px',
          background: '#FF4D4F',
          color: '#fff',
          padding: '16px 24px',
          fontSize: '16px',
        }
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-lg bg-white">
      {/* Centered toaster */}
      <Toaster
        containerStyle={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </form>

      <div className="text-center mt-4">
        <p>
          Don’t have an account? <Button to="/signup">Signup</Button>
        </p>
      </div>
    </div>
  );
};

export default Login;
