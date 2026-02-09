import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import "../styles/navbar.css";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const { data } = useSelector((state: RootState) => state.weather as {
    data: { main: { temp: number } } | null;
  });

  const currentTemp = data?.main?.temp ? `${Math.round(data.main.temp)}°C` : null;

  return (
    <nav className={`modern-navbar ${theme}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">🌤️</span>
          <span className="brand-text">Weather App</span>
        </Link>
        
        <div className="navbar-actions">
          {currentTemp && location.pathname !== "/" && (
            <div className="temp-badge">
              {currentTemp}
            </div>
          )}
          
          <button 
            onClick={toggleTheme} 
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          
          <Link to="/" className="nav-link">
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
