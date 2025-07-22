import { div } from "framer-motion/client";
import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const MessageOfManagingDirector = () => {
    return (
        <>
            <Header />
            <div>
                {/* hero section  */}
                <div
                    className="relative bg-cover bg-center bg-no-repeat min-h-[88vh] flex items-center justify-center px-4 "
                    style={{ backgroundImage: "url('./imgs/aboutus/leadership/managingdirector/managingdirectorbanner1.png')" }} // Change to your actual image path
                >
                    <div className=" absolute text-left text-white   ">
                        <h1 className="text-3xl md:text-7xl font-extrabold text-yellow-400  font-sans text-justify font-montserrat, sans-serif" >
                            Message of Managing Director
                        </h1>
                        <p className=" absolute text-lg md:text-2xl italic leading-relaxed font-semibold font-montserrat, sans-serif text-justify">
                            A small body of determined spirits fired by an unquenchable faith in their mission,
                            <br className="hidden md:block" />
                            can alter the course of history.
                        </p>
                    </div>
                </div>

                {/* quote tagline */}
                <div className="relative flex items-center  py-24 px-6  bg-white">
                    {/* Oversized Background Quote */}
                    <span className="absolute left-0 top-1/2 mt-40 ml-[10rem] z-10  -translate-y-1/2 text-[400px] md:text-[500px]
                 text-gray-200 font-serif leading-none  select-none" >
                        &ldquo;
                    </span>

                    {/* Tagline Text */}
                    <p className="relative  text-lg md:text-2xl  font-bold text-gray-800 z-10  md:ml-[12rem] max-w-4xl text-justify font-signika"
                    >
                        Redefining Strength, Sustaining Performance
                    </p>
                </div>

                {/* gear stackholder */}

                <div className="w-full max-w-7xl mx-auto md:p-12  ">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
                        <div className="w-full md:w-1/3 flex justify-center">
                            <img
                                src="./imgs/aboutus/leadership/managingdirector/managingdirectorimg.jpg"
                                alt="Water Icon"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="w-full md:w-2/3 text-left mb-10 p-2">
                            <p className="text-md font-bold text-black mb-1 text-justify font-signika" >Dear Stakeholders,</p>
                            <div className="text-justify font-signika" >
                                <p className="text-gray-700 text-sm leading-6 ">
                                    It is with great pleasure and excitement that I address you today on behalf of Nandan Denim Ltd.
                                    As we reflect on our journey thus far,
                                    I am filled with immense pride in the strides we have made and the milestones we have achieved together.
                                </p>
                                <p className="text-gray-700 mt-5 text-sm leading-6 ">
                                    At the heart of our operations lies a simple yet powerful principle – customer delight.
                                    Our unwavering commitment to understanding and meeting the evolving needs of our diverse customer
                                    base has been the driving force behind our success. In a rapidly changing business environment, we have
                                    remained steadfast in our dedication to delivering supreme
                                    quality products in full and on time, thereby ensuring that Nandan Denim consistently stays ahead of the fashion curve.
                                </p>
                                <p className="text-gray-700 mt-5 text-sm leading-6 ">
                                    Our integrated business model has been instrumental in our ability to cater to a wide range of products
                                    for our expansive customer base. From capturing changing tastes across geographies and economies to embracing diversity
                                    in colour and race, we have strived to anticipate and exceed customer expectations at every turn.
                                </p>
                                <p className="text-gray-700 mt-5 text-sm leading-6 ">
                                    In line with our mission of developing Nandan Denim Ltd. into a Fashion brand and vision of
                                    becoming the number one choice for discerning customers worldwide, we have accelerated our efforts to
                                    improve our brand identity, integrate digital methods into our business, and further diversify our portfolio.
                                    These initiatives not only reinforce our commitment
                                    to innovation and excellence but also position us for sustained growth and success in the years to come.
                                </p>
                                <p className="text-gray-700 mt-5 text-sm leading-6 ">
                                    As we look to the future, we are confident that our relentless focus on customer satisfaction,
                                    coupled with our commitment to operational efficiency and sustainability, will enable us to emerge
                                    stronger for the next chapter in Nandan Denim’s history. Together, we will continue to innovate, evolve,
                                    and strive for excellence,
                                    knowing that our success is intrinsically linked to the trust and support of our valued shareholders.
                                </p>
                                <p className="text-gray-700 mt-5 text-sm leading-6 ">
                                    In closing, I extend my heartfelt gratitude to each of you for your unwavering belief in ou
                                    r vision and your continued support as we embark on this exciting journey ahead. With your partnership,
                                    I am confident that the best is yet to come for Nandan Denim Ltd.Warm regards,
                                </p>
                            </div>
                            <h2 className="font-bold text-xl mt-10">Mr. Jyotiprasad D. Chiripal</h2>
                            <p className="text-gray-700 mt-1 text-sm ">Managing Director</p>
                        </div>

                    </div>
                </div>





            </div>
              <Footer/>
        </>
    )
};

export default MessageOfManagingDirector;
