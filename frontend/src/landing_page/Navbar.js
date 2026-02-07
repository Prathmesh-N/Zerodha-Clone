import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const DASHBOARD_URL =
    process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("loggedOut") === "1") {
      localStorage.removeItem("isLoggedIn");
      params.delete("loggedOut");
      const nextSearch = params.toString();
      const nextUrl =
        location.pathname + (nextSearch ? `?${nextSearch}` : "");
      if (nextUrl !== `${location.pathname}${location.search}`) {
        window.history.replaceState({}, "", nextUrl);
      }
    }

    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, [location.pathname, location.search]);

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "fff" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to={"/"}>
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Zerodha Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/about"}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/product"}
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/pricing"}
                >
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/support"}
                >
                  Support
                </Link>
              </li>
              {!isLoggedIn && (
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={"/signup"}
                  >
                    Signup
                  </Link>
                </li>
              )}
              {!isLoggedIn ? (
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={"/login"}
                  >
                    Login
                  </Link>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href={DASHBOARD_URL}
                    >
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to={"/logout"}
                    >
                      Logout
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
