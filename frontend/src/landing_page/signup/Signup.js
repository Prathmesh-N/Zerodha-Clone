import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Signup.css";

const DASHBOARD_URL =
  process.env.REACT_APP_DASHBOARD_URL ||
  (process.env.NODE_ENV === "production"
    ? "https://zerodha-clone-dashboard-1ytk.onrender.com"
    : "http://localhost:3001");
const API_BASE_URL =
  process.env.REACT_APP_API_URL ||
  (process.env.NODE_ENV === "production"
    ? "https://zerodha-clone-backend-ay9h.onrender.com"
    : "http://localhost:5000");

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/signup`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        localStorage.setItem("isLoggedIn", "true");
        window.location.assign(DASHBOARD_URL);
      } else {
        handleError(message);
      }
    } catch (error) {
      handleError(
        error?.response?.data?.message || "Signup failed. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form_container">
      <h2>Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            autoComplete="email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            autoComplete="username"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            autoComplete="new-password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Signing up..." : "Submit"}
        </button>
        <span>
          Already have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
