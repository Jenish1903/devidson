import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="footer footerbg content-center mt-12">
        <div className="container ">
          <div className="grid grid-cols-4 gap-3 pt-28 footerlist">
            <div className="border-r-2 border-dashed f_c pr-5">
              <img src="../Assets/logomain.png" alt="headerlogo" />
              <p className="mt-5">
                Lorem magna proident id irure cillum. In minim elit ea veniam
                sit in ullamco culpa ea quis fugiat anim.it amet. Culpa non
                voluptate qui exercitation ex id incididunt dolor.
              </p>
              <div className="flex mt-3">
                <FaFacebookF className="mr-5 text-white rounded-full bg-[#393939] w-[42px] h-[38px] p-[10px]" />
                <FaInstagram className="mr-5 text-white rounded-full bg-[#393939] w-[42px] h-[38px] p-[10px]" />
                <FaLinkedinIn className="mr-5 text-white rounded-full bg-[#393939] w-[42px] h-[38px] p-[10px]" />
                <FaTwitter className="text-white rounded-full bg-[#393939] w-[42px] h-[38px] p-[10px]" />
              </div>
            </div>
            <div className="border-r-2 border-dashed ml-5 f_s">
              <h1>Links</h1>
              <ul className="list-disc mt-5">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <Link to="/project">Project</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/contact us">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="border-r-2 border-dashed f_c pr-5 ml-5">
              <h1>Contacts Us</h1>
              <div className="flex mb-5 mt-5">
                <div className="mr-3">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div>
                  <p className="text-black">
                    2839 Old Dear Lane New York, NY 10013 United States
                  </p>
                </div>
              </div>
              <div className="flex mb-5 mt-5">
                <div className="mr-3">
                  <i className="bi bi-telephone"></i>
                </div>
                <div>
                  <p className="text-black">+ (0712) 819 79 555</p>
                </div>
              </div>
              <div className="flex mt-5">
                <div className="mr-3">
                  <i className="bi bi-envelope"></i>
                </div>
                <div>
                  <p className="text-black">info@havnor.com</p>
                </div>
              </div>
            </div>
            <div className="f_n ml-5">
              <h1>NewsPaper</h1>
              <p>Stay always in touch! Subscribe to our newsletter.</p>
              <div className="mt-3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  defaultValue="Enter Your Email"
                />
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white w-full mt-3 font-bold py-2 px-4 rounded">
                Button
              </button>
            </div>
          </div>
          <hr className="mt-12" />
          <div className="f_r">
            <p className="text-center mt-12 pb-12">
              © Copyright 2021 by Davidson
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
