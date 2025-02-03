import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Component/Footer";

function Project() {
  return (
    <>
      <div className="main">
        <div className="backgroundimageproject opacity-10">
          <div className="container ">
            <div className="text-white pt-[250px] text-center">
              <h1 className="[font:normal_normal_normal_52px/65px_Montserrat] tracking-[0.44px] text-[#2596be]">
                Explore Our Projects
              </h1>
              <Link to="/">Home</Link> <span>/</span> <span>Projects</span>
            </div>
          </div>
        </div>
        <div className="aboutwork mt-28 pb-12 content-center">
          <div className="container grid grid-cols-2 gap-5 aboutworkcontent">
            <div>
              <h1 className="font-bold text-[#407cad] uppercase">
                About Our Work
              </h1>
              <span className="mt-5 font-bold text-3xl">
                One Place For All Your Projects
              </span>
              <p className="mt-5 [font:normal_normal_normal_15px/25px_Montserrat] tracking-[0.44px]">
                Aute minim fugiat nisi labore proident sint adipisicing irure
                adipisicing anim ut consequat sunt commodo. Commodo ad
                consectetur quis ut cillum sint. Veniam exercitation quis quis
                voluptate excepteur. Occaecat laboris in sit velit elit ipsum
                exercitation est.Aute minim fugiat nisi labore proident sint
                adipisicing irure adipisicing anim ut consequat sunt commodo.
                Commodo ad consectetur quis ut cillum sint. Veniam exercitation
                quis quis voluptate excepteur. Occaecat laboris{" "}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 aboutworkimg">
              <img
                src="../Assets/p7.png"
                alt="headerlogo"
                className="w-64 h-72 relative bottom-[40px]"
              />
              <img
                src="../Assets/p14.png"
                alt="headerlogo"
                className="w-64 h-72"
              />
            </div>
          </div>
        </div>
        <div className="residentialprojets bg-black p-20">
          <div className="container">
            <div className="grid grid-cols-2 gap-8 residentialprojetscontent">
              <div className="text-white content-center">
                <h1 className="font-bold text-[#407cad] uppercase">
                  Residential projects
                </h1>
                <spa className="mt-5 font-bold text-3xl">
                  Explore Our Residential Projets
                </spa>
                <p className="mt-5 [font:normal_normal_normal_15px/25px_Montserrat] tracking-[0.44px]">
                  Quis cillum ex enim esse exercitation fugiat. Laborum
                  cupidatat incididunt commodo ex laborum fugiat fugiat e.
                </p>
              </div>
              <div className="flex gap-5 residentialimmg1">
                <img src="../Assets/p1.png" alt="headerlogo" className="h-72" />
                <img src="../Assets/p2.png" alt="headerlogo" className="h-72" />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-12 residentialimmg2">
              <div>
                <img
                  src="../Assets/p14.png"
                  alt="headerlogo"
                  className="h-72 w-full"
                />
              </div>
              <div>
                <img
                  src="../Assets/p6.png"
                  alt="headerlogo"
                  className="h-72 w-full"
                />
              </div>
              <div className="col-span-2">
                <img
                  src="../Assets/p5.png"
                  alt="headerlogo"
                  className="h-72 w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="commercialproject mt-20">
          <div className="container">
            <div className="grid grid-cols-2 gap-8 commercialprojectcontent">
              <div className="content-center w-2/4 md: w-full ">
                <h1 className="font-bold text-[#407cad] uppercase">
                  Commercial projects
                </h1>
                <spa className="mt-5 font-bold text-3xl">
                  Explore Our Commercial Projets
                </spa>
                <p className="mt-5 [font:normal_normal_normal_15px/25px_Montserrat] tracking-[0.44px]">
                  Quis cillum ex enim esse exercitation fugiat. Laborum
                  cupidatat incididunt commodo ex laborum fugiat fugiat e.
                </p>
              </div>
              <div className="content-center">
                <p>
                  Ea cupidatat deserunt commodo commodo. Excepteur labore
                  commodo ut ad aliquip culpa exercitation sit sit commodo quis
                  occaecat dolor aliquip.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-12 commercialprojectimg">
              <div className="grid grid-cols-2 gap-5 commercialprojectimg">
                <img
                  src="../Assets/p6.png"
                  alt="headerlogo"
                  className=" w-full"
                />
                <img
                  src="../Assets/p7.png"
                  alt="headerlogo"
                  className=" w-full"
                />
                <img
                  src="../Assets/p8.png"
                  alt="headerlogo"
                  className=" w-full"
                />
                <img
                  src="../Assets/p1.png"
                  alt="headerlogo"
                  className=" w-full"
                />
              </div>
              <div>
                <img
                  src="../Assets/p9.png"
                  alt="headerlogo"
                  className="w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-12 commercialprojectimg">
              <div className="col-span-2">
                <img
                  src="../Assets/p10.png"
                  alt="headerlogo"
                  className="h-72 w-full"
                />
              </div>
              <div>
                <img
                  src="../Assets/p11.png"
                  alt="headerlogo"
                  className="h-72 w-full"
                />
              </div>
              <div>
                <img
                  src="../Assets/p12.png"
                  alt="headerlogo"
                  className="h-72 w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="projectteam bg-black h-[60vh] mt-20">
          <div className="container content-center">
            <div className=" text-center text-white w-[70%] justify-self-center">
              <h1 className="font-bold text-[#407cad] uppercase">
                Work with our team
              </h1>
              <span className="mt-5 font-bold text-3xl">
                Have a Project of your own?
              </span>
              <p className="mt-5 [font:normal_normal_normal_15px/25px_Montserrat] tracking-[0.44px]">
                Eiusmod nostrud dolor veniam irure veniam non exercitation
                eiusmod laborum et dolore velit consequat id. Pariatur nisi
                fugiat velit culpa in ea incididunt mollit sunt nulla cupidatat.
                Officia est mollit veniam elit nostrud sunt ad cillum nulla
                dolore id et ipsum.
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

export default Project;
