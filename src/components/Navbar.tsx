import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary text-white shadow-md">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="text-2xl font-extrabold tracking-wide">🌤️ Weather application</h1>
        <div className="d-flex space-x-10">
          <Link
            to="/"
            className="text-lg px-2 py-2 font-weight-bold text-dark hover:text-yellow-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="#"
            className="text-lg px-2 py-2 font-weight-bold text-dark hover:text-yellow-300 transition duration-300"
          >
            login
          </Link>
        </div>
        <div className="d-flex justify-content-end">
          <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
            23°C
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
