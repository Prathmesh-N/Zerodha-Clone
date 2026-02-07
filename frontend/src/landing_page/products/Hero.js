import React from "react";

function Hero() {
  return (
    <div className="container">
        <div className="text-center mt-5 p-5 border-bottom">
            <h2>Zerodha Products</h2>
            <p className="text-muted mt-3 fs-5">Sleek, modern, and intuitive trading platforms</p>
            <p className="text-muted mt-3 mb-5">
            Check out our{" "}
            <a href="#" style={{ textDecoration: "none" }}>
                investment offerings{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            </p>
        </div>
    </div>
  );
}

export default Hero;

