import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
const LANDING_URL =
  process.env.REACT_APP_LANDING_URL || "http://localhost:3000";

const Menu = ({ user }) => {
  const [selectedMenu, setSelectMenu] = useState(0);

  const handleMenuClick = (index) => {
    setSelectMenu(index);
  };

  const handleLogout = async (e) => {
    try {
      await axios.post(
        `${API_BASE_URL}/logout`,
        {},
        { withCredentials: true }
      );
    } catch (error) {
      // Ignore and force local logout.
    } finally {
      localStorage.removeItem("isLoggedIn");
      window.location.assign(`${LANDING_URL}?loggedOut=1`);
    }
  };

  const meunClass = "menu";
  const activeMenuClass = "menu selected";
  const displayName = user?.username || "USERID";
  const avatarText = user?.username
    ? user.username.slice(0, 2).toUpperCase()
    : "ZU";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "2rem" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/"}
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : meunClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/orders"}
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : meunClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/holdings"}
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : meunClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/positions"}
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : meunClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/funds"}
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : meunClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/apps"}
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : meunClass}>
                Apps
              </p>
            </Link>
          </li>
          <li>
            <button className="menu logout-link" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">{avatarText}</div>
          <p className="username">{displayName}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
