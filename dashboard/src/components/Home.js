import React, { useEffect, useState } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const API_BASE_URL =
  process.env.REACT_APP_API_URL ||
  (process.env.NODE_ENV === "production"
    ? "https://zerodha-clone-backend-ay9h.onrender.com"
    : "http://localhost:5000");

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadUser = async () => {
      try {
        const { data } = await axios.get(`${API_BASE_URL}/me`, {
          withCredentials: true,
        });
        if (isMounted && data?.success) {
          setUser(data.user);
        }
      } catch (error) {
        if (isMounted) setUser(null);
      }
    };

    loadUser();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <TopBar user={user} />
      <Dashboard user={user} />
    </>
  );
};

export default Home;
