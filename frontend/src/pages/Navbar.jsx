import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b shadow-sm bg-white relative z-20">
      
      {/* Desktop View (visible on md and larger) */}
      <div className="hidden md:block text-2xl font-bold text-green-800 hover:text-red-600">
        Kudi Lal Rughata Saraswati Viday Mandir Khalilabad
      </div>

      {/* Mobile View (visible on small screens only) */}
      <div className="block md:hidden text-lg font-bold text-green-800 hover:text-red-600">
        K.L.R. Saraswati Vidya Mandir
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-red-600 font-semibold"
              : "text-gray-700 hover:text-red-500"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-red-600 font-semibold"
              : "text-gray-700 hover:text-red-500"
          }
        >
          About ✶
        </NavLink>

        <NavLink
          to="/compus"
          className={({ isActive }) =>
            isActive
              ? "text-red-600 font-semibold"
              : "text-gray-700 hover:text-red-500"
          }
        >
          Campus
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-red-600 font-semibold"
              : "text-gray-700 hover:text-red-500"
          }
        >
          Contact
        </NavLink>

        <NavLink
          to="/paragliding"
          className={({ isActive }) =>
            isActive
              ? "text-red-600 font-semibold"
              : "text-gray-700 hover:text-red-500"
          }
        >
          Blog ✶
        </NavLink>

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
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-semibold"
                : "text-gray-700 hover:text-red-500"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-semibold"
                : "text-gray-700 hover:text-red-500"
            }
          >
            About{" "}
          </NavLink>
          <NavLink
            to="/compus"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-semibold"
                : "text-gray-700 hover:text-red-500"
            }
          >
            Campus
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-semibold"
                : "text-gray-700 hover:text-red-500"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/paragliding"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-semibold"
                : "text-gray-700 hover:text-red-500"
            }
          >
            Blog ✶
          </NavLink>

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
