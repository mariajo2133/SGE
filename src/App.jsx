import React, { useState } from "react";
import HomePage from "./Home";
import CafeteriaPage from "./Cafeteria";
import VandentialsPage from "./Vandentials";

export default function SGE() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "cafeteria":
        return <CafeteriaPage onBack={() => setCurrentPage("home")} />;
      case "vandentials":
        return <VandentialsPage onBack={() => setCurrentPage("home")} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return renderPage();
}
