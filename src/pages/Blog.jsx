import { Search } from "lucide-react";
import { Link } from "react-router-dom";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Blog = () => {
  return (
    <>
      <Header />

      <div className="w-full">
        {/* Hero Section */}
        <div className="relative  w-full">
          <img
            src="./imgs/media/blog/blogbanner1.png"
            alt="Blog Banner"
            className="object-cover w-full h-full md:h-[70vh] lg:h-[80vh] xl:h-[80vh]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-6 md:p-32">
            <h1 className="text-yellow-400 text-4xl sm:text-5xl md:text-7xl font-bold font-montserrat, sans-serif ">
              Blog
            </h1>
            <p className="text-white text-lg sm:text-xl md:text-2xl italic mt-4 max-w-3xl text-justify">
              Explore our blog for impactful resources, insightful articles,
              personal reflections, and ideas that inspire action.
            </p>
          </div>
        </div>

        {/* Blog Content Section */}
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-10">
          {/* Main Blog Column */}
          <div className="w-full lg:w-3/4">
            {/* Blog Post 1 */}
            <div>
              <img
                src="./imgs/media/blog/blogimg1.png"
                alt="Blog 1"
                className="w-full"
              />
              <div className="mt-6">
                <h3 className="text-red-500 text-lg">
                  May 2, 2018{" "}
                  <span className="text-gray-400 font-montserrat, sans-serif">
                    {" "}
                    / In Women Leadership / By
                  </span>{" "}
                  admin
                </h3>
                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl mt-2 hover:text-yellow-400 transition font-montserrat, sans-serif">
                  <Link to="/blog/women-leadership">Women Leadership</Link>
                </h2>
                <p className="mt-5 text-gray-600 text-sm text-justify font-signika">
                  Women leaders are on the rise. So, aside from repercussions of
                  #MeToo, why is there so much discussion about women coming
                  into their own and positions of leadership? Myth #1: Leaders
                  are born (male)...
                </p>
                <Link
                  to="/blog/women-leadership"
                  className="inline-block bg-blue-950 hover:bg-black text-white px-6 py-3 rounded mt-6 transition"
                >
                  CONTINUE READING
                </Link>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="mt-16">
              <img
                src="./imgs/media/blog/blogimg2.png"
                alt="Blog 2"
                className="w-full"
              />
              <div className="mt-6">
                <h3 className="text-red-500 text-lg">
                  May 2, 2018{" "}
                  <span className="text-gray-400 font-montserrat, sans-serif">
                    {" "}
                    / In Leadership / By
                  </span>{" "}
                  admin
                </h3>
                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl mt-2 hover:text-yellow-400 transition font-montserrat, sans-serif">
                  <Link to="/blog/leaders-must-nuild-family-environment-achieve-excellence">
                    Leaders Must Build a Family Environment to Achieve
                    Excellence
                  </Link>
                </h2>
                <p className="mt-5 text-gray-600 text-sm text-justify font-signika">
                  There is clearly something to say about running a business
                  with a family approach. Taking a family approach means
                  establishing trust and a cultural promise to unite as one...
                </p>
                <Link
                  to="/blog/leaders-must-nuild-family-environment-achieve-excellence"
                  className="inline-block bg-blue-950 hover:bg-black text-white px-6 py-3 rounded mt-6 transition"
                >
                  CONTINUE READING
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/4 space-y-10">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-3 py-2 border border-gray-400 rounded-md text-sm"
              />
              <Search
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                size={18}
              />
            </div>

            {/* About */}
            <div>
              <h2 className="text-2xl font-bold mb-2 text-justify font-opensans,sans-serif ">
                About Nandan
              </h2>
              <p className="text-sm text-gray-700 text-justify font-signika">
                Pursuing its ambitious plans of expansion, Chiripal Group laid
                foundations of an ultra-modern 100% cotton & blended bottom wear
                fabrics and the most modern & versatile denim manufacturing
                project called Nandan Denim Limited. United with a vision to
                provide continuous value through innovation, expertise,
                excellence and attain the highest value of customer
                satisfaction.
              </p>
            </div>

            {/* Categories */}
            <div>
              <h2 className="font-bold text-xl mb-2 font-opensans,sans-serif">
                Categories
              </h2>
              <div className="border-t border-gray-300">
                <div className="py-3 border-b text-gray-600 flex justify-between">
                  {/* <a href="https://nandandenim.com/category/leadership/"
                   target="_blank" className="font-signika"  >Leadership</a> <span>&gt;</span> */}
                  <Link
                    to="/blog/leadership-blog"
                    // target="_blank"
                    className="font-signika"
                  >
                    Leadership
                  </Link>{" "}
                  <span>&gt;</span>
                </div>
                <div className="py-3 text-gray-600 flex justify-between">
                  <Link
                    to="/blog/women-leadership-blog"
                    // target="_blank"
                    className="font-signika"
                  >
                    Women Leadership
                  </Link>
                </div>
              </div>
            </div>

            {/* Follow */}
            <div className="bg-red-500 text-white py-3 px-4 flex items-center space-x-4 rounded">
              <p className="font-bold font-montserrat, sans-serif">Follow:</p>
              <a
                href="https://www.facebook.com/people/Nandan-Denim-Ltd/100063765077375/"
              // target="_blank"
              >
                <FaFacebookF />
              </a>
              <a href="https://x.com/nandan_denim" target="_blank">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/nandan_denim/" target="_blank">
                <FaInstagram />
              </a>
            </div>

            {/* Recent Posts */}
            <div>
              <h2 className="font-bold text-xl font-opensans,sans-serif">
                Recent Posts
              </h2>
              {/* Placeholder - Add dynamic posts if needed */}
              <p className="text-sm text-gray-500 mt-2">
                No recent posts listed.
              </p>
            </div>

            {/* Recent Comments */}
            <div>
              <h2 className="font-bold text-xl font-opensans,sans-serif">
                Recent Comments
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                No recent comments listed.
              </p>
            </div>

            {/* Archives */}
            <div>
              <h2 className="font-bold text-xl mb-2 font-opensans,sans-serif">
                Archives
              </h2>
              <div className="border-t border-gray-300">
                <div className="py-3 border-b text-gray-600 flex justify-between">
                  <Link
                    to="/blog/may-2018"
                    // target="_blank"
                    className="font-signika"
                  >
                    May 2018
                  </Link>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-8 px-4 ">
              <h2 className="font-bold text-xl mb-3 font-opensans">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Corporate", href: "/tags/corporate-tag" },
                  { name: "Denim", href: "/tags/denim-tag" },
                  { name: "Leadership", href: "/tags/leadership-tag" },
                  { name: "Market", href: "/tags/market-tag" },
                  { name: "News", href: "/tags/news-tag" },
                  { name: "One_World", href: "/tags/one-world" },
                  { name: "Women", href: "/tags/women-tag" },
                ].map((tag) => (
                  <a
                    key={tag.name}
                    href={tag.href}
                    className="text-blue-900 underline text-sm sm:text-base hover:text-gray-600 transition"
                  >
                    {tag.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
