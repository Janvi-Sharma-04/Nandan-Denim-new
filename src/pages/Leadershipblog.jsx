import { Link } from "react-router-dom";
import HeaderBlog from "../component/HeaderBlog";
import Footer from "../component/Footer";

const Leadershipblog = () => {
    return (
        <>

            <HeaderBlog />

            <div>
                {/* heading */}
                <div className=" relative bg-[#193267]  h-60 mt-14">
                    <h1 className="absolute max-w-7xl mx-auto px-32 p-20 text-white text-3xl sm:text-5xl md:text-7xl
                      font-montserrat, sans-serif  font-bold text-left">Leadership</h1>
                </div>


                {/* Hero Section */}
                <div className="relative mt-10  w-full mb-16 ">
                    <img
                        src="/imgs/media/blog/familyenvironment/familyenvironmentbanner2.png"
                        alt="Slide 2"
                        className="object-contain w-full max-w-7xl  mx-auto h-full md:h-[50vh] lg:h-[70vh] xl:h-[55vh]"
                    />
                </div>
                {/* leader must build family environment to achieve  */}
                <div className="mt-6 max-w-7xl mx-auto mb-10 px-5">
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
            <Footer />
        </>
    )
};

export default Leadershipblog;
