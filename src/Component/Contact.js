import React from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <div>
        <div className="backgroundimagecontact opacity-10">
          <div className="container ">
            <div className="text-white pt-[250px] text-center">
              <h1 className="[font:normal_normal_normal_52px/65px_Montserrat] tracking-[0.44px] text-[#2596be]">
                Contact Us
              </h1>
              <Link to="/">Home</Link> <span>/</span> <span>Projects</span>
            </div>
          </div>
        </div>
        <div className="contact mt-20">
          <div className="container">
            <div className="grid grid-cols-2 content-center contactc">
              <div>
                <h1 className="font-bold text-[#407cad] uppercase">
                  Contact us
                </h1>
                <span className="mt-5 font-bold text-3xl">Get In Touch</span>
                <p className="mt-5 [font:normal_normal_normal_15px/25px_Montserrat] tracking-[0.44px]">
                  Lorem ut elit exercitation dent do est enim etirure sunt. Ad
                  amet id nderit proident incididunt do qui proident laboris
                  minim nulla est culpa ut aliqua velit.
                </p>
                <div className="flex mt-5">
                  <FaLocationDot />
                  <span className="ml-3">
                    2839 Old Dear Lane New York, NY 10013 united states{" "}
                  </span>
                </div>
                <div className="flex mt-3">
                  <FaPhoneAlt />
                  <span className="ml-3">+(0712) 819 79 555</span>
                </div>
                <div className="flex mt-3">
                  <MdEmail />
                  <span className="ml-3">
                    2839 Old Dear Lane New York, NY 10013 united states{" "}
                  </span>
                </div>
              </div>
              <div>
                <iframe
                  className="w-full"
                  title="mymap"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7344.050989944433!2d72.5254542!3d23.0228361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1737727509631!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="mt-20">
              <div className="text-center">
                <h1 className="font-bold text-[#407cad] uppercase">
                  Contact Us
                </h1>
                <span className="mt-5 font-bold text-3xl">Send A Message</span>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-8 resevation">
                <div>
                  <div className="mb-4">
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Enter Your Phone Number"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Enter Your Subject"
                    />
                  </div>
                </div>
                <div>
                  <div className="">
                    <textarea
                      id="message"
                      rows="4"
                      className="h-full block p-2.5 w-full text-sm text-gray-900  rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write your thoughts here..."
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button className=" mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
