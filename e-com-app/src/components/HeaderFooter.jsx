import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";

function HeaderFooter({ children }) {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Header onTabChange={handleTabChange} activeTab={activeTab} />
      {activeTab === "login" ? <Login /> : <Register />}
      {children}
      <Footer />
    </div>
  );
}

export default HeaderFooter;