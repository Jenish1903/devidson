import React from "react";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function About() {
  return (
    <>
      <div className="main">
        <div className="backgroundimageproject opacity-10">
          <div className="container ">
            <div className="text-white pt-[250px] text-center">
              <h1 className="[font:normal_normal_normal_52px/65px_Montserrat] tracking-[0.44px] text-[#2596be]">
                About Us
              </h1>
              <Link to="/">Home</Link> <span>/</span> <span>About Us</span>
            </div>
          </div>
        </div>

        <div className="aboutus mt-20 p-8">
          <div className="container">
            <div className="grid grid-cols-2 gap-8 aboutcontent">
              <div>
                <h1 className=" font-bold text-[#407cad] uppercase">
                  About us
                </h1>
                <h2 className="font-bold text-3xl ">
                  Let's Get To Know Each Other
                </h2>
                <p className="[font:normal_normal_normal_15px/25px_Montserrat] tracking-[0.44px] mt-3">
                  Quis cupidatat minim enim pariatur ullamco qui. Amet cupidatat
                  ex commodo consectetur. Cillum excepteur tempor non id do
                  consequat occaecat labore eu. Non velit et do ex commodo et
                  eiusmod irure eu elit aliquip. Voluptate cillum et do tempor.
                  Ea cupidatat cillum incididunt dolor.Quis cupidatat minim enim
                  pariatur ullamco qui. Amet cupidatat ex commodo consectetur.
                  Cillum excepteur tempor non id do consequat occaecat labore
                  eu. Non velit et do ex commodo et eiusmod irure eu elit
                  aliquip. Voluptate cillum et do tempor. Ea cupidatat cillum
                  incididunt dolor.
                </p>
                <div className="mt-12 grid grid-cols-3 [font:normal_normal_normal_20px/25px_Montserrat] tracking-[0.44px]">
                  <div className="border-r-2 justify-items-start">
                    <div className="flex">
                      <h1>280</h1>
                      <span className=" mt-1 ml-1">
                        <GoPlus />
                      </span>
                    </div>
                    <span>Awards</span>
                  </div>
                  <div className="border-r-2 justify-items-center">
                    <div className="flex">
                      <h1>3000</h1>
                      <span className="mt-1 ml-1">
                        <GoPlus />
                      </span>
                    </div>
                    <span>Properties</span>
                  </div>
                  <div className="justify-items-center">
                    <div className="flex">
                      <h1 className="">10</h1>
                      <span className="mt-1 ml-1">
                        <GoPlus />
                      </span>
                    </div>
                    <span>Experience</span>
                  </div>
                </div>
              </div>

              <div>
                <img
                  src="../Assets/b7.png"
                  alt="headerlogo"
                  className="h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="choose bg-sky-200 justify-items-center p-8">
          <div className="container justify-items-center">
            <div className="text-center">
              <h1 className=" font-bold text-[#407cad] uppercase">About us</h1>
              <h2 className="font-bold text-3xl ">Exclusive Properties</h2>
            </div>
            <div className="flex w-full h-[80%] mt-8 chooseimg">
              <img
                src="../Assets/img-3.png"
                alt="headerlogo"
                className="w-full h-[50vh]"
              />
              <img
                src="../Assets/img-4.png"
                alt="headerlogo"
                className="w-full h-[50vh]"
              />
            </div>
          </div>
        </div>

        <div className="ourvision mt-20 p-8">
          <div className="container ">
            <div className="grid grid-cols-2  gap-3 ourvisioncontent">
              <div>
                <img
                  src="../Assets/img-2.png"
                  alt="headerlogo"
                  className="w-full"
                />
              </div>
              <div className="content-center">
                <h2 className="font-bold text-3xl ">Our Vision</h2>
                <p className="[font:normal_normal_normal_15px/25px_Montserrat] tracking-[0.44px] mt-3">
                  Quis cupidatat minim enim pariatur ullamco qui. Amet cupidatat
                  ex commodo consectetur. Cillum excepteur tempor non id do
                  consequat occaecat labore eu. Non velit et do ex commodo et
                  eiusmod irure eu elit aliquip. Voluptate cillum et do tempor.
                </p>
                <h2 className="font-bold text-3xl mt-8 ">Our Mission</h2>
                <p className="[font:normal_normal_normal_15px/25px_Montserrat] tracking-[0.44px] mt-3">
                  Quis cupidatat minim enim pariatur ullamco qui. Amet cupidatat
                  ex commodo consectetur. Cillum excepteur tempor non id do
                  consequat occaecat labore eu. Non velit et do ex commodo et
                  eiusmod irure eu elit aliquip. Voluptate cillum et do tempor.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="testimonial testimonialimg content-center">
          <div className="container pt-12 pb-12">
            <div className="text-center">
              <h1 className="text-[#407cad]">Testimonial</h1>
              <span className="font-bold text-3xl text-white">
                In The Words Of Our Clients
              </span>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-8 testimonialcontent">
              <div className="bg-white p-8 justify-items-center">
                <img src="../Assets/qoute.png" alt="headerlogo" />
                <p className="mt-3 mb-3 text-center">
                  Tempor cupidatat commodo veniam anim labore consequat. Tempor
                  cupidatat commodo veniam anim labore consequat.
                </p>
                <span>-Armani Murray</span>
              </div>
              <div className="bg-white p-8 justify-items-center">
                <img src="../Assets/qoute.png" alt="headerlogo" />
                <p className="mt-3 mb-3 text-center">
                  Tempor cupidatat commodo veniam anim labore consequat. Tempor
                  cupidatat commodo veniam anim labore consequat.
                </p>
                <span>-Armani Murray</span>
              </div>
              <div className="bg-white p-8 justify-items-center">
                <img src="../Assets/qoute.png" alt="headerlogo" />
                <p className="mt-3 mb-3 text-center">
                  Tempor cupidatat commodo veniam anim labore consequat. Tempor
                  cupidatat commodo veniam anim labore consequat.
                </p>
                <span>-Armani Murray</span>
              </div>
              <div className="bg-white p-8 justify-items-center">
                <img src="../Assets/qoute.png" alt="headerlogo" />
                <p className="mt-3 mb-3 text-center">
                  Tempor cupidatat commodo veniam anim labore consequat. Tempor
                  cupidatat commodo veniam anim labore consequat.
                </p>
                <span>-Armani Murray</span>
              </div>
            </div>
          </div>
        </section>

        <section className="images mt-12">
          <div className="container grid grid-cols-3">
            <div className="border ">
              <img src="../Assets/partner1.png" alt="headerlogo" />
            </div>
            <div className="border">
              <img src="../Assets/partner2.png" alt="headerlogo" />
            </div>
            <div className="border">
              <img src="../Assets/partner3.png" alt="headerlogo" />
            </div>
            <div className="border">
              <img src="../Assets/partner4.png" alt="headerlogo" />
            </div>
            <div className="border">
              <img src="../Assets/partner5.png" alt="headerlogo" />
            </div>
            <div className="border">
              <img src="../Assets/partner6.png" alt="headerlogo" />
            </div>
          </div>
        </section>

        <section className="gallerysection mt-12">
          <div className="container mt-12 m-8">
            <div className="galery grid grid-cols-2 ">
              <div>
                <h1 className="text-[#407cad]">Gallery</h1>
                <span className=" font-bold text-3xl">All Ours Goods</span>
              </div>
              <div>
                <p>
                  Sit commodo Lorem enim quis ut adipisicing cillum pariatur.
                  Laborum velit Lorem aliqua adipisicing occaecat incididunt
                  cillum eu dolor pariatur incididunt culpa. Velit occaecat
                  occaecat incididunt minim ex voluptate officia ipsum irure
                  amet culpa eiusmod adipisicing.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-12 galerycontent">
              <div>
                <img src="../Assets/img-1.png" alt="headerlogo" />
              </div>
              <div>
                <img src="../Assets/img-2.png" alt="headerlogo" />
              </div>
              <div>
                <img src="../Assets/img-3.png" alt="headerlogo" />
              </div>
              <div>
                <img src="../Assets/img-1.png" alt="headerlogo" />
              </div>
            </div>
          </div>
        </section>

        <div className="projectteam bg-black h-[60vh] mt-20">
          <div className="container content-center">
            <div className=" text-center text-white w-[70%] justify-self-center">
              <h1 className="font-bold text-[#407cad] uppercase">
                Write To Ous
              </h1>
              <span className="mt-5 font-bold text-3xl">
                Get In Touch With Us
              </span>
              <p className="mt-5 [font:normal_normal_normal_15px/25px_Montserrat] tracking-[0.44px]">
                Eiusmod nostrud dolor veniam irure veniam non exercitation
                eiusmod laborum et dolore velit consequat id. Pariatur nisi
              </p>
              <button className=" mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;
