import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Header() {
  console.log("jenish");

  return (
    <>
      <div>
        <div class="container">
          <div className="mt-12">
            <nav>
              <div class="logo">
                <img src="../Assets/logomain.png" alt="headerlogo" />
              </div>
              <div class="menu">
                <ul>
                  <li>
                    <a href="/src/index.html">Home</a>
                  </li>
                  <li>
                    <a href="/src/Menu.html">Menu</a>
                  </li>
                  <li>
                    <a href="/src/About.html">About Us</a>
                  </li>
                  <li>
                    <a href="/src/Tour.html">Gallery</a>
                  </li>
                  <li>
                    <a href="/src/Services.html">Services</a>
                  </li>
                  <li>
                    <a href="/src/Contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
