"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import { ThemeContext } from "../context/ThemeContext";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoIosMenu, IoIosRemove } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

export default function Navigation() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const { switchDark, switchLight, theme } = useContext(ThemeContext);

  return (
    <>
      <Navbar
        expand="lg"
        className={` ${
          isMenuOpen ? "full-page-menu" : ""
        } sticky-top px-0 py-0`}
      >
        <Navbar.Toggle onClick={toggleMenu} aria-controls="basic-navbar-nav">
          {isMenuOpen ? <IoIosMenu /> : <RxCross1 />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="mobile-menu">
          <ul className="navbar-menu bg-transparent navbar-mobile-menu fs-17 pb-20 pt-20">
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
            <li>
              <button
                className="themebtns"
                onClick={theme === "light" ? switchDark : switchLight}
              >
                {theme === "dark" ? "☀️" : "🌙"}
              </button>
            </li>
          </ul>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
