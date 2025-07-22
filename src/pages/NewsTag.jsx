import React from "react";
import HeaderBlog from "../component/HeaderBlog";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";

const NewsTag = () => {
    return (
        <>
            <HeaderBlog />

            <div>
                {/* heading */}
                <div className=" relative bg-[#193267]  h-60 mt-14">
                    <h1 className="absolute max-w-7xl mx-auto px-32 p-20 text-white text-3xl sm:text-5xl md:text-7xl 
                     font-montserrat, sans-serif  font-bold text-left"> News Tag</h1>
                </div>

                {/* Hero Section */}
                <div className="relative  w-full mb-16 mt-10  ">
                    <img
                        src="/imgs/media/blog/womenleadership/womenleadershipbanner4.png"
                        alt="Slide 4"
                        className="object-cover w-full max-w-7xl mx-auto h-full md:h-[50vh] lg:h-[70vh] xl:h-[55vh]"
                    />
                </div>

                {/* women leadership */}
                <div className="mt-6 max-w-7xl mx-auto mb-10">
                    <h3 className="text-red-500 text-lg">
                        May 2, 2018 <span className="text-gray-400 font-montserrat, sans-serif" > / In Women Leadership / By</span> admin
                    </h3>
                    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl mt-2 hover:text-rose-500 transition font-montserrat, sans-serif"
                    > <Link to="/blog/women-leadership">Women Leadership</Link>
                    </h2>
                    <p className="mt-5 text-gray-600 text-sm text-justify font-signika" >
                        [metaslider id=58327]   Women leaders are on the rise. So, aside from repercussions of #MeToo,
                        why is there so much discussion about women coming into their own and coming into positions of leadership?
                        Myth #1: Leaders are born (male).  With the marginal numbers of women in executive levels of leadership,...</p>
                    <Link
                        to="/blog/women-leadership"
                        className="inline-block bg-blue-950 hover:bg-black text-white px-6 py-3 rounded mt-6 transition"
                    >
                        CONTINUE READING
                    </Link>
                </div>
            </div>
  <Footer/>
        </>
    )
};

export default NewsTag;
