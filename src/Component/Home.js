import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import Footer from "./Footer";
import Swiperexample from "./Swiperexample";
function Home() {
  return (
    <>
      <div className="backgroundimage">
        <div className="container ">
          <div className="grid grid-cols-2 pt-40 m-8 herosection">
            <div className=" text-white">
              <h1 className="[font:normal_normal_normal_52px/65px_Montserrat] tracking-[0.44px]">
                Find Your <span className="text-[#2596be]">Place</span> Of Dream
              </h1>
              <p className="mt-5">
                We are recognized foe exceeding client expectations and
                delivering great results through dedication and ease of process.
              </p>
              <div className="flex mt-3">
                <span className="text-[#407cad]">Lern More</span>
                <span className="mt-1.5 ml-2 w-12">
                  <FaArrowRightLong />
                </span>
              </div>
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
            <div className="w-[55%] ml-28 heroright">
              <div className="">
                <button className="mr-3 ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  For Rent
                </button>
                <button className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  For Sale
                </button>
              </div>
              <div className="bg-white rounded p-5">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                  >
                    Username
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Enter an address, State, City or Zip Code"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                  >
                    Property Category
                  </label>
                  <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                    <select
                      id="currency"
                      name="currency"
                      aria-label="Currency"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option>USD</option>
                      <option>CAD</option>
                      <option>EUR</option>
                    </select>
                    <svg
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mt-4 ">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center pl-32 py-2.5 px-3 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="w-4 h-4 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutus mt-12">
        <div className="container grid grid-cols-2 aboutuscontent">
          <div>
            <img src="../Assets/g1.png" alt="headerlogo" />
          </div>
          <div className="mt-3">
            <h1 className=" font-bold text-[#407cad] uppercase">About us</h1>
            <h2 className="font-bold text-3xl ">Who We Are</h2>
            <p className="[font:normal_normal_normal_15px/25px_Montserrat] tracking-[0.44px] mt-3">
              Quis cupidatat minim enim pariatur ullamco qui. Amet cupidatat ex
              commodo consectetur. Cillum excepteur tempor non id do consequat
              occaecat labore eu. Non velit et do ex commodo et eiusmod irure eu
              elit aliquip. Voluptate cillum et do tempor. Ea cupidatat cillum
              incididunt dolor.Quis cupidatat minim enim pariatur ullamco qui.
              Amet cupidatat ex commodo consectetur. Cillum excepteur tempor non
              id do consequat occaecat labore eu. Non velit et do ex commodo et
              eiusmod irure eu elit aliquip. Voluptate cillum et do tempor. Ea
              cupidatat cillum incididunt dolor.
            </p>
            <div className="flex">
              <span className=" uppercase mt-5 text-[#407cad]">Read More</span>
              <span className="mt-6 ml-2 text-[#407cad]">
                <FaArrowRightLong />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="choodeus bg-sky-200 mt-12">
        <div className="container grid grid-cols-2 gap-4 choosecontent">
          <div className="mt-28">
            <div>
              <h1 className="font-bold text-3xl">Who Choose Us</h1>
            </div>
            <div className="mt-8">
              <div className="flex justify-between">
                <div className="c1">
                  <div>
                    <img src="../Assets/icon-1.png" alt="icons" />
                    <h1 className="font-bold">Wide Range Of Properties </h1>
                    <p className=" overflow-hidden max-h-12">
                      Voluptate tempor consectetur upor. Tempor incididunt
                      reprit Lorem in ullamco.
                    </p>
                  </div>
                  <div className="mt-8">
                    <img src="../Assets/icon-2.png" alt="icons" />
                    <h1 className="font-bold">Trusted By Thousands</h1>
                    <p>Voluptate tempor consectetur</p>
                  </div>
                </div>
                <div className="c2">
                  <div>
                    <img src="../Assets/icon-3.png" alt="icons" />
                    <h1 className="font-bold">Financing Made Easy</h1>
                    <p>Voluptate tempor consectetur</p>
                  </div>
                  <div className="mt-8">
                    <div>
                      <img src="../Assets/icon-4.png" alt="icons" />
                    </div>
                    <h1 className="font-bold">See Neighbordhoods</h1>
                    <p className=" overflow-hidden max-h-12">
                      Voluptate tempor consectetur upor. Tempor incididunt
                      reprit Lorem in ullamco.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image">
            <div>
              <img src="../Assets/choose.png" alt="headerlogo" />
            </div>
          </div>
        </div>
      </div>
      {/* start our project section */}
      <Swiperexample />
      {/* end our project section */}
      {/* start catagories section */}
      <section className="categories bg-black mt-12">
        <div className="container grid grid-cols-2 text-white pt-28 pb-28 categoriescontent">
          <div className="w-[65%]">
            <span className="text-[#407cad] text-2xl">Categories</span>
            <h1 className=" font-bold text-3xl mb-5 mt-5">
              Browser Listing By Category
            </h1>
            <p>
              Highlight the best of your properities by using the lisy category
              shortcode. you can list categories, types,cities,areas and states.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 categoriesimages">
            <div>
              <img src="../Assets/img-2.png" alt="headerlogo" />
            </div>
            <div>
              <img src="../Assets/img-3.png" alt="headerlogo" />
            </div>
            <div>
              <img src="../Assets/img-2.png" alt="headerlogo" />
            </div>
          </div>
        </div>
      </section>
      {/* End catagories section */}
      {/* start our blogs section */}
      <section className="blogs">
        <div className="container pb-12">
          <div className="text-center pt-12">
            <h1 className="text-[#407cad] uppercase">Our Blogs</h1>
            <span className="font-bold text-3xl">
              Explore Our News & Updates
            </span>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-28 blogscontent">
            <div>
              <img src="../Assets/img-6.png" alt="headerlogo" />
              <div className="mt-4">
                <span className="mt-5">By Admin - December 23th 2020</span>
                <p className="mt-5">
                  Reprehenderit nulla eu ad et erit nulla eu ad eterit nulla eu
                  ad et
                </p>
                <span className="flex text-[#407cad] mt-3 font-semibold  ">
                  Read More <FaArrowRightLong className="mt-1.5 ml-2" />
                </span>
              </div>
            </div>
            <div>
              <img src="../Assets/img-7.png" alt="headerlogo" />
              <div className="mt-4">
                <span className="">By Admin - December 23th 2020</span>
                <p className="mt-5">
                  Reprehenderit nulla eu ad et erit nulla eu ad eterit nulla eu
                  ad et
                </p>
                <span className="flex text-[#407cad] mt-3 font-semibold ">
                  Read More <FaArrowRightLong className="mt-1.5 ml-2" />
                </span>
              </div>
            </div>
            <div>
              <img src="../Assets/img-8.png" alt="headerlogo" />
              <div className="mt-4">
                <span className="">By Admin - December 23th 2020</span>
                <p className="mt-5">
                  Reprehenderit nulla eu ad et erit nulla eu ad eterit nulla eu
                  ad et
                </p>
                <span className="flex text-[#407cad] mt-3 font-semibold ">
                  Read More <FaArrowRightLong className="mt-1.5 ml-2" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end our blogs section */}

      {/* start Testimonial section */}
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
      {/* End Testimonial section */}

      {/* start image section */}
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
      {/* end image section */}

      {/* start gallery section */}
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
                occaecat incididunt minim ex voluptate officia ipsum irure amet
                culpa eiusmod adipisicing.
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
      {/* End gallery section */}
      <Footer />
    </>
  );
}

export default Home;
