import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function HeaderContent() {
  return (
    <>
      <div className="mt-5 headercontent">
        <div className="container flex justify-between m-8 bg-white mb-2.5 mt-2.5">
          <div className="flex">
            <FaFacebookF className="mr-3" />
            <FaInstagram className="mr-3" />
            <FaLinkedinIn className="mr-3" />
            <FaTwitter className="mr-3" />
          </div>
          <div className="flex">
            <FaPhoneAlt className="mt-1 mr-2" />
            <span>Call us:(+1)123 4567 890</span>
            <MdEmail className="ml-5 mt-1 mr-2" />
            <span>Mail us: info@havnor.com</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderContent;
