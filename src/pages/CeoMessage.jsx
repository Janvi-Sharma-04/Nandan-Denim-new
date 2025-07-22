import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const CeoMessage = () => {
    return (
      <>
      
      <Header/>
        <div>
            {/* hero section  */}
            <div
                className="relative bg-cover bg-center bg-no-repeat min-h-[88vh] flex items-center justify-center px-4"
                style={{ backgroundImage: "url('./imgs/aboutus/leadership/ceo/ceobanner1.png')" }} // Change to your actual image path
            >
                <div className=" absolute text-left text-white max-w-6xl">
                    <h1 className=" md:text-7xl font-extrabold text-yellow-400 mb-4 text-justify font-montserrat, sans-serif"
                  >
                        CEO’s Message
                    </h1>
                    <p className="text-lg md:text-2xl italic ">
                        A small body of determined spirits fired by an unquenchable faith in their mission,
                        {/* <br className="hidden md:block" /> */}
                        can alter the course of history.

                    </p>
                </div>
            </div>



            {/* ceo director */}
            <div className="w-full max-w-7xl mx-auto mt-10    mb-10 p-2 ">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                    <div className="w-full md:w-1/3 flex justify-center">
                        <img
                            src="./imgs/aboutus/leadership/ceo/CEOimg.png"
                            alt="Water Icon"
                            className="w-full h-full object-contain"
                        // data-aos="fade-right"
                        />
                    </div>
                    <div className="w-full md:w-2/3  text-left">
                        {/* <p className="text-md font-bold text-black">Dear Stakeholders,</p> */}
                      <div className="text-justify font-signika" >
                          <p className="text-gray-700  text-sm leading-7">
                            Today, as we stand on the threshold of global changes, we aim to build Nandan into an organisation
                            that spearheads a revolution in the fashion industry where style remains not just the sacred territory of a few,
                            but a mantra to live by for everyone.
                            We seek to take fashion to the masses and make this world a more stylish place.
                        </p>
                        <p className="text-gray-700  text-sm leading-7">
                            As a proud representative of this dynamic, fast-evolving organisation, I consider it my personal responsibility
                            to make sure this company is seen as not just a fabric manufacturer but an intelligent solution provider by the industry.
                            In order to do so, we are privileged to be backed by the best of people, processes, technology and products.
                            At Nandan, our customer oriented approach helps us understand the need-gap, which we then try to fill to the
                            best of our innovative capabilities.
                            We take pride in holding a high stand on maintaining quality in our products and transparency in our practices.
                        </p>
                        <p className="text-gray-700  text-sm leading-7 ">
                            As a team motivated by the same principles throughout the hierarchy, I believe Nandan Denim
                            is all set to claim a champion’s position on the world map as the world’s preferred
                            fashion enabler. And we’d prefer to do it with a human touch!
                        </p>
                      </div>

                        <h2 className="font-bold text-xl mt-10">Deepak Chiripal</h2>
                        <p className="text-gray-800 mt-1 text-sm "> CEO</p>
                    </div>

                </div>
            </div>
        </div>
          <Footer/>
      </>
    )
};

export default CeoMessage;
