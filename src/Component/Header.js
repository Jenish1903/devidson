import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div>
        <div className="mt-8 navbar">
          <nav className="nav-container">
            <div className="logo">
              <img src="../Assets/logomain.png" alt="headerlogo" />
            </div>
            <div className={`menu ${menuOpen ? "active" : ""}`}>
              <ul>
                <li>
                  <Link to="/" onClick={() => setMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => setMenuOpen(false)}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/project" onClick={() => setMenuOpen(false)}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" onClick={() => setMenuOpen(false)}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/blog" onClick={() => setMenuOpen(false)}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={() => setMenuOpen(false)}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
