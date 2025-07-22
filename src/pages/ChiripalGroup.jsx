import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const ChiripalGroup = () => {
  return (
    <>
    <Header/>
    <div>

      {/* Hero Section */}
      <div className="relative  w-full">
        <img
          src="./imgs/aboutus/chiripalgroup/chiripalbanner.png"
          alt="Chiripal Group Banner"
          className="object-cover w-full h-full md:h-[70vh] lg:h-[80vh] xl:h-[80vh]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center font-serif">
          <div className="px-4 sm:px-8 md:px-16 lg:px-32">
            <h1 className="text-yellow-400 text-3xl sm:text-5xl md:text-7xl font-bold text-justify font-montserrat, sans-serif "
           >
              Chiripal Group
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-12 px-4 w-full max-w-7xl mx-auto text-justify">
        <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">

          {/* Logo */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <img
              src="./imgs/aboutus/chiripalgroup/chiripallogo.jpg"
              alt="Chiripal Logo"
              className="w-60 sm:w-72 h-auto object-contain"
            />
          </div>

          {/* Text and Buttons */}
          <div className="w-full lg:w-2/3 space-y-6 mb-10">
            {/* Description */}
            <div className="text-gray-700 text-sm font-medium leading-relaxed space-y-1 text-justify font-signika" >
              <p>
                Chiripal Group, Incorporated in the year 1972, is a professionally managed business entity comprising of a team of professionals from different fields and expertise.
              </p>
              <p>
                The Group, which had started with a few power looms, has evolved into multi-activity, multi-product Textile House that produces fiber to apparel under one roof.
              </p>
              <br />
              <p>
                The diversified business in the fields of Petrochemicals, Spinning, Weaving, Knitting, Fabric Processing, Chemicals, Infrastructure, BOPP Films and Educational Initiatives offer employment to more than 20000 people associated directly or indirectly with the Group.
              </p>
              <p>
                With clear focus and ambitious growth plans on the anvil, the Group has been gearing itself to take on the future challenges.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 mt-4  ">
              <a
                href="https://chiripalgroup.com"
                 target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-950 hover:bg-black text-white text-sm sm:text-base px-6 py-3 rounded transition"
              >
                Visit Chiripal Group Website
              </a>
              <a
                href="https://www.chiripalpolyfilms.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-950 hover:bg-black text-white text-sm sm:text-base px-6 py-3 rounded transition"
              >
                Visit CPFL Website
              </a>
              <a
                href="https://nandanterry.com/"
                 target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-950 hover:bg-black text-white text-sm sm:text-base px-6 py-3 rounded transition"
              >
                Visit Nandan Website
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
      <Footer/>
    </>
  );
};

export default ChiripalGroup;
