import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-green-400">
          FinTrackr
        </h1>

        {/* Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-green-400 transition">
            Overview
          </Link>
          <Link to="/dashboard" className="hover:text-green-400 transition">
            Dashboard
          </Link>
          <Link to="/reports" className="hover:text-green-400 transition">
            Reports
          </Link>
          <Link to="/insights" className="hover:text-green-400 transition">
            Insights
          </Link>
        </nav>

        {/* Auth */}
        <div className="space-x-3">
          <Link
            to="/login"
            className="px-4 py-2 border border-green-400 rounded-lg hover:bg-green-400 hover:text-black transition"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;