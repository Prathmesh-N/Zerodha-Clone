import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row mt-5">
        <h4>To create a ticket, select a relevant topic</h4>
        <div className="col-4">
          <h6 className=" mt-5">
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h6>
          <a href="" style={{ textDecoration: "none" }}>
            <ul className="mt-4">
              <li className="p-1">Resident individual</li>
              <li className="p-1">Minor</li>
              <li className="p-1">Non Resident Indian (NRI)</li>
              <li className="p-1">Company, Partnership, HUF and LLP</li>
              <li className="p-1">Glossary</li>
            </ul>
          </a>
          <h6 className=" mt-5">
            <i className="fa fa-bar-chart" aria-hidden="true"></i> kite
          </h6>
          <a href="" style={{ textDecoration: "none" }}>
            <ul className="mt-4">
              <li className="p-1">IPO</li>
              <li className="p-1">Trading FAQs</li>
              <li className="p-1">Margin Trading Facility (MTF) and Margins</li>
              <li className="p-1">Charts and orders</li>
              <li className="p-1">Alerts and Nudges</li>
              <li className="p-1">General</li>
            </ul>
          </a>
          <h6 className=" mt-5">
            <i className="fa fa-money" aria-hidden="true"></i> Coin
          </h6>
          <a href="" style={{ textDecoration: "none" }}>
            <ul className="mt-4">
              <li className="p-1">Mutual funds</li>
              <li className="p-1">National Pension Scheme (NPS)</li>
              <li className="p-1">Features on Coin</li>
              <li className="p-1">Payments and Orders</li>
              <li className="p-1">General</li>
            </ul>
          </a>
        </div>
        <div className="col-4">
          <h6 className="mt-5">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i> Your Zerodha
            Account
          </h6>
          <a href="" style={{ textDecoration: "none" }}>
            <ul className="mt-4">
              <li className="p-1">Your Profile</li>
              <li className="p-1">Account modification</li>
              <li className="p-1">Client Master Report (CMR) and Depository Participant (DP)</li>
              <li className="p-1">Nomination</li>
              <li className="p-1">Transfer and conversion of securities</li>
            </ul>
          </a>
          <h6 className="mt-5">
            <i className="fa fa-inr" aria-hidden="true"></i> Funds
          </h6>
          <a href="" style={{ textDecoration: "none" }}>
            <ul className="mt-4">
              <li className="p-1">Add money</li>
              <li className="p-1">Withdraw money</li>
              <li className="p-1">Add bank accounts</li>
              <li className="p-1">eMandates</li>
            </ul>
          </a>
          <h6 className="mt-5">
            <i className="fa fa-circle-o-notch" aria-hidden="true"></i> Console
          </h6>
          <a href="" style={{ textDecoration: "none" }}>
            <ul className="mt-4">
              <li className="p-1">Portfolio</li>
              <li className="p-1">Corporate actions</li>
              <li className="p-1">Funds statement</li>
              <li className="p-1">Reports</li>
              <li className="p-1">Profile</li>
              <li className="p-1">Segments</li>
            </ul>
          </a>
        </div>
        
        <div className="col-3">
          <div className="p-3" style={{ backgroundColor: "#ff910047" }}>
            <a href="" style={{ textDecoration: "none" }}>
              <ul>
                <li>
                  Evening session of MCX to remain closed on January 1, 2026
                </li>
                <li>Current Takeovers and Delisting â€“ January 2026</li>
              </ul>
            </a>
          </div>
          <div className="mt-5">
            <ul className="list-group bg-grey">
              <li className="list-group-item bg-light" aria-current="true">
                Quick links
              </li>
              <a href="" style={{ textDecoration: "none" }}>
                <li className="list-group-item" style={{ color: "#0044ffe2" }}>
                  1. Track account opening
                </li>
                <li className="list-group-item" style={{ color: "#0044ffe2" }}>
                  2. Track segment activation
                </li>
                <li className="list-group-item" style={{ color: "#0044ffe2" }}>
                  3. Intraday margins
                </li>
                <li className="list-group-item" style={{ color: "#0044ffe2" }}>
                  4. Kite user manual
                </li>
                <li className="list-group-item" style={{ color: "#0044ffe2" }}>
                  5. Learn how to create a ticket
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;

