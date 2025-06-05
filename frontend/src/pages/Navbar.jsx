import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate()

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b shadow-sm bg-white relative z-20">
      <div className="text-2xl font-bold text-green-800">Discovery✶</div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
        <Link to="/">Home</Link>
        <Link to="/about">About ✶</Link>
        <Link to="/compus">Campus</Link>
        <Link to="/contact">Contact</Link>
        <Link to="#">Blog ✶</Link>

        <Button
          onClick={() => navigate("/login")}
          className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-full px-4"
        >
          Login
        </Button>
      </nav>

      {/* Mobile Nav Toggle */}
      <button
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t shadow-md flex flex-col items-start p-4 space-y-3 md:hidden z-10">
          <Link to="/">Home</Link>
          <Link to="/about">About </Link>
          <Link to="/compus">Campus</Link>
          <Link to="/contact">Contact</Link>
          <Link to="#">Blog ✶</Link>

          <Button
            onClick={() => navigate("/login")}
            className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-full px-4"
          >
            Login
          </Button>
        </div>
      )}
    </header>
  );
}
