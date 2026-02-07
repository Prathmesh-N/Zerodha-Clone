import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const API_BASE_URL =
  process.env.REACT_APP_API_URL &&
  !process.env.REACT_APP_API_URL.includes("localhost:3000")
    ? process.env.REACT_APP_API_URL
    : "http://localhost:5000";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const doLogout = async () => {
      try {
        const { data } = await axios.post(
          `${API_BASE_URL}/logout`,
          {},
          { withCredentials: true }
        );
        if (data?.success) {
          toast.success(data.message || "Logged out", {
            position: "bottom-left",
          });
        } else {
          toast.error(data?.message || "Logout failed", {
            position: "bottom-left",
          });
        }
      } catch (error) {
        toast.error("Logout failed", { position: "bottom-left" });
      } finally {
        localStorage.removeItem("isLoggedIn");
        setTimeout(() => {
          navigate("/");
        }, 800);
      }
    };

    doLogout();
  }, [navigate]);

  return (
    <div className="form_container">
      <h2>Logging you out...</h2>
      <ToastContainer />
    </div>
  );
};

export default Logout;
