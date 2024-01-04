"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import { ThemeContext } from "../context/ThemeContext";
export default function Navigation() {
  const { switchDark, switchLight, theme } = useContext(ThemeContext);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="main-navbar d-flex">
        <div className="d-flex">
          {/* Toggle Button */}
          <div className="toggle-menu" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          {/* Navigation Links */}
          <ul className={`navbarlist d-flex ${isMenuOpen ? "show-menu" : ""}`}>
            <li className="navbaritem">
              <Link href="/" className="nav-link" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="navbaritem">
              <Link href="/about" className="nav-link" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li className="navbaritem">
              <Link href="/skills" className="nav-link" onClick={toggleMenu}>
                Skills
              </Link>
            </li>
            <li className="navbaritem">
              <Link href="/projects" className="nav-link" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li className="navbaritem">
              <Link href="/contact" className="nav-link" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
          <button
            className="themebtns"
            onClick={theme === "light" ? switchDark : switchLight}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>
    </>
  );
}
