import React from "react";


function Header({ onTabChange, activeTab }) {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <svg className="bi me-2" width="40" height="32"></svg>
          <span className="fs-4">e-shopping</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item"><a href="#" className={`nav-link ${activeTab === "register" ? "activeTab" : ""}`} onClick={() => onTabChange("register")}>Register</a></li>
          <li className="nav-item"><a href="#" className={`nav-link ${activeTab === "login" ? "activeTab" : ""}`} onClick={() => onTabChange("login")}>Login</a></li>
          <li className="nav-item"><a href="#" className="nav-link">РУС</a></li>
          <li className="nav-item"><a href="#" className="nav-link">ENG</a></li>
        </ul>
      </header>
    </div>
  );
}

export default Header;