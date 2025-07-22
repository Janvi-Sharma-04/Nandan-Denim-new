import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";

import { Link } from "react-router-dom";
import HeaderBlog from "../component/HeaderBlog";
import Footer from "../component/Footer";

const May2018 = () => {
    return (
        <>

            <HeaderBlog />
            <div>


                {/* heading */}
                <div className=" relative bg-[#193267]  h-60 mt-14">
                    <h1 className="absolute max-w-7xl mx-auto px-32 p-20 text-white text-3xl sm:text-5xl md:text-7xl  font-montserrat, sans-serif  font-bold text-left">May 2018</h1>
                </div>

                {/* Hero Section */}
                <div className="relative  w-full mb-16 mt-10  ">
                    <Splide
                        options={{
                            type: "fade",
                            rewind: true,
                            perPage: 1,
                            autoplay: true,
                            interval: 4000,
                            speed: 400,
                            arrows: false,
                            pagination: false,
                            pauseOnHover: false,
                            pauseOnFocus: false,
                        }}
                        className="h-full "
                    >
                        <SplideSlide>
                            <img
                                src="/imgs/media/blog/womenleadership/womenleadershipbanner1.png"
                                alt="Slide 1"
                                className="object-cover w-full max-w-7xl mx-auto h-full md:h-[50vh] lg:h-[70vh] xl:h-[55vh] "
                            />
                        </SplideSlide>
                        <SplideSlide>
                            <img
                                src="/imgs/media/blog/womenleadership/womenleadershipbanner2.png"
                                alt="Slide 2"
                                className="object-cover w-full max-w-7xl mx-auto h-full md:h-[50vh] lg:h-[70vh] xl:h-[55vh]"
                            />
                        </SplideSlide>
                        <SplideSlide>
                            <img
                                src="/imgs/media/blog/womenleadership/womenleadershipbanner3.png"
                                alt="Slide 3"
                                className="object-cover w-full max-w-7xl mx-auto h-full md:h-[50vh] lg:h-[70vh] xl:h-[55vh]"
                            />
                        </SplideSlide>
                        <SplideSlide>
                            <img
                                src="/imgs/media/blog/womenleadership/womenleadershipbanner4.png"
                                alt="Slide 4"
                                className="object-cover w-full max-w-7xl mx-auto h-full md:h-[50vh] lg:h-[70vh] xl:h-[55vh]"
                            />
                        </SplideSlide>
                    </Splide>


                </div>

                {/* women leadership */}
                <div className="mt-6 max-w-7xl mx-auto mb-10">
                    <h3 className="text-red-500 text-lg">
                        May 2, 2018 <span className="text-gray-400 font-montserrat, sans-serif" > / In Women Leadership / By</span> admin
                    </h3>
                    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl mt-2 hover:text-rose-500 transition font-montserrat, sans-serif"
                    >
                        <Link to="/blog/women-leadership">Women Leadership</Link>
                    </h2>
                    <p className="mt-5 text-gray-600 text-sm text-justify font-signika" >
                        [metaslider id=58327]   Women leaders are on the rise. So, aside from repercussions of #MeToo,
                        why is there so much discussion about women coming into their own and coming into positions of leadership?
                        Myth #1: Leaders are born (male).  With the marginal numbers of women in executive levels of leadership,...</p>
                    <Link
                        to="/blog/women-leadership"
                        className="inline-block bg-blue-950 hover:bg-black text-white px-6 py-3 rounded mt-6 transition"
                        target="_blank"
                    >
                        CONTINUE READING
                    </Link>
                </div>


                {/* Hero Section */}
                <div className="relative  w-full mb-16 ">
                    <Splide
                        options={{
                            type: "fade",
                            rewind: true,
                            perPage: 1,
                            autoplay: true,
                            interval: 4000,
                            speed: 400,
                            arrows: false,
                            pagination: false,
                            pauseOnHover: false,
                            pauseOnFocus: false,
                        }}
                        className="h-full "
                    >
                        <SplideSlide>
                            <img
                                src="/imgs/media/blog/familyenvironment/familyenvironmentbanner1.png"
                                alt="Slide 1"
                                className="object-cover w-full max-w-7xl mx-auto h-full md:h-[50vh] lg:h-[70vh] xl:h-[55vh] "
                            />
                        </SplideSlide>
                        <SplideSlide>
                            <img
                                src="/imgs/media/blog/familyenvironment/familyenvironmentbanner2.png"
                                alt="Slide 2"
                                className="object-cover w-full max-w-7xl mx-auto h-full md:h-[50vh] lg:h-[70vh] xl:h-[55vh]"
                            />
                        </SplideSlide>
                        <SplideSlide>
                            <img
                                src="/imgs/media/blog/familyenvironment/familyenvironmentbanner3.png"
                                alt="Slide 3"
                                className="object-cover w-full max-w-7xl mx-auto h-full md:h-[50vh] lg:h-[70vh] xl:h-[55vh]"
                            />
                        </SplideSlide>

                    </Splide>


                </div>
                {/* leader must build family environment to achieve  */}
                <div className="mt-6 max-w-7xl mx-auto mb-10">
                    <h3 className="text-red-500 text-lg">
                        May 2, 2018 <span className="text-gray-400 font-montserrat, sans-serif"> / In Leadership / By</span> admin
                    </h3>
                    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl mt-2 hover:text-rose-500 transition font-montserrat, sans-serif" >
                        <Link to="/blog/leaders-must-nuild-family-environment-achieve-excellence">

                            Leaders Must Build a Family Environment to Achieve Excellence</Link>
                    </h2>
                    <p className="mt-5 text-gray-600 text-sm text-justify font-signika" >
                        [metaslider id=58804]   There is clearly something to say about running a business with a family approach.
                        Not all of them are perfect, but that is not the point.
                        Taking a family approach means establishing a foundation of trust and a cultural promise to unite as one;...
                    </p>
                    <Link
                        to="/blog/leaders-must-nuild-family-environment-achieve-excellence"
                        className="inline-block bg-blue-950 hover:bg-black text-white px-6 py-3 rounded mt-6 transition"
                        target="_blank"
                    >
                        CONTINUE READING
                    </Link>
                </div>

            </div>
              <Footer/>
        </>
    )
};

export default May2018;
