import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Business = () => {
  return (
  <>
  <Header/>
    <div>
      {/* Hero Section */}
      <div className="relative  w-full">
        <img
          src="./imgs/investors/investorbusiness.png"
          alt="Chiripal Group Banner"
          className="object-cover w-full h-full md:h-[70vh] lg:h-[80vh] xl:h-[88vh]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
          <div className="px-4 sm:px-8 md:px-24 lg:px-32  ">
            <h1 className="text-white text-5xl sm:text-5xl font-montserrat, sans-serif md:text-7xl font-bold text-left">
              Business
            </h1>
          </div>
        </div>
      </div>


      {/* paragraph */}
      <p className="mt-5 mb-5 text-sm px-28 text-justify font-signika max-w-8xl mx-auto">Nandan Denim is the largest, fully vertical set‑up for manufacturing a whole range of denim fabrics.
        We manufacture denims and yarn-dyed shirting, and have one of the largest fully‑integrated manufacturing
        facility in India, with a capacity of 110 MMPA. We have one of the most sophisticated and state-of-the-art
        weaving facilities with capacity of 10 MMPA to manufacture superior quality grey yarn-dyed shirting and denims.

      </p>
    </div>

      <Footer/>
  </>
  )
};

export default Business;
