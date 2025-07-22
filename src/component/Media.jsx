import React from "react";
import Header from "./Header";
import Footer from "./Footer";


const Media = () => {
  return (
    <>
      <Header/>
      <div>
        {/* Hero Section */}
        <div className="relative w-full">
          <img
            src="./imgs/media/blog/blogbanner1.png"
            alt="Blog Banner"
            className="object-cover w-full h-[50vh] md:h-[70vh] lg:h-[80vh]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-4 md:p-10 max-w-7xl mx-auto">
            <h1 className="text-yellow-400 text-4xl sm:text-5xl md:text-7xl font-bold font-roboto, Arial, sans-serif " >Media</h1>
            <p className="text-white text-lg sm:text-xl md:text-2xl italic  max-w-3xl">
              A selection of features in the media on Nandan Denim Ltd
            </p>
          </div>
        </div>

        {/* TV Media Title */}
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-4xl font-bold mt-10 mb-4 font-montserrat, sans-serif" >TV Media</h2>
          <hr className="border border-black opacity-25 mb-10" />
        </div>

        {/* YouTube Videos */}
        <div className="max-w-7xl mx-auto px-4 mb-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-signika">
          {[
            {
              src: "https://www.youtube.com/embed/hCRqvaPaihA?si=akSiYysm8zYt0AIF",
              title: "CNBC AWAZ",
              date: "December, 2017"
            },
            {
              src: "https://www.youtube.com/embed/CR3L85OGvVo?si=0oTAqfV_rGB8Kwx5",
              title: "CNBC AWAZ",
              date: "December, 2017"
            },
            {
              src: "https://www.youtube.com/embed/yA90SkKX3no?si=EZ2zcV83nQ4A-Egk",
              title: "CNBC AWAZ",
              date: "December, 2017"
            },
            {
              src: "https://www.youtube.com/embed/Xy3LqwSTcBE?si=eaMT8pjDODrFDQ1y",
              title: "ZEE BUSINESS",
              date: "July, 2017"
            },
            {
              src: "https://www.youtube.com/embed/WQZJ1sRRI20?si=DFFKi1jfBf9_CmCX",
              title: "ZEE BUSINESS",
              date: "July, 2017"
            },
            {
              src: "https://www.youtube.com/embed/2upqTnWgHtA?si=M6IrnEUslm2-EhwJ",
              title: "ZEE BUSINESS",
              date: "July, 2017"
            },
            {
              src: "https://www.youtube.com/embed/JZidryU6VDA?si=R39BVG_OiW-cOEtW",
              title: "CNBC BAJAR",
              date: "July, 2017"
            },
            {
              src: "https://www.youtube.com/embed/9KL9_uGf0JM?si=ZojW5kiL0UP696LA",
              title: "CNBC BAJAR",
              date: "July, 2017"
            },
            {
              src: "https://www.youtube.com/embed/7HWYqq-H1MU?si=jx-y6yhSC2OEnXlU",
              title: "CNBC BAJAR",
              date: "July, 2017"
            },
            {
              src: "https://www.youtube.com/embed/a2K8eYBEMaE?si=W5QENMyrLT7caQcH",
              title: "ZEE BUSINESS",
              date: "January, 2014"
            },
            {
              src: "https://www.youtube.com/embed/Mm2xbUGq0bs?si=2M-yiStKem01NE_z",
              title: "ZEE BUSINESS",
              date: "November, 2013"
            }
          ].map((video, index) => (
            <div key={index} className="w-full">
              <div className="aspect-video overflow-hidden rounded-lg shadow-md mb-2">
                <iframe
                  className="w-full h-full"
                  src={video.src}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <h2 className="text-xl font-bold text-center">{video.title}</h2>
              <p className="text-center text-md">
                Published: <span className="font-medium">{video.date}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Online Articles */}
        <div>
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-center text-4xl font-bold mt-10 mb-4 font-montserrat, sans-serif" >Online Articles</h2>
            <hr className="border border-black opacity-25 mb-5" />
          </div>

          <div className="max-w-7xl mx-auto px-4 text-sm mb-10 space-y-2 text-justify font-signika" >
            {[
              "https://www.thehindubusinessline.com/companies/nandan-denim-q3-profit-up-61/article22752417.ece",
              "https://utahherald.com/nandan-denim-limited-ndl-moved-up-1-84-on-mar-13/",
              "http://www.moneycontrol.com/india/stockpricequote/textiles-denim/nandandenim/NE06",
              "http://www.thehindu.com/news/cities/mumbai/business/heard-of-nandan-denim-heres-why-you-should/article8216865.ece",
              "http://profit.ndtv.com/stock/nandan-denim-ltd_nandanexim/reports",
              "http://www.business-standard.com/article/markets/nandan-denim-up-6-after-promoter-buys-stakes-in-the-company-117070300287_1.html",
              "https://www.thehindubusinessline.com/companies/nandan-denim-eyes-big-play-in-fabric-business/article7651798.ece"
            ].map((link, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-900 hover:underline break-all"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Print Media */}
        <div>
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-center text-4xl font-bold mb-4 font-montserrat, sans-serif" >Print Media</h2>
            <hr className="border border-black opacity-25 mb-5" />
          </div>

          <div className="max-w-7xl mx-auto px-4 text-sm mb-10">
            <a
              href="https://nandandenim.compdf/Money_Times.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-900 "
            >
              <span className="font-medium font-signika" >Money Times</span>, Business & Investment weekly, VOL XXVII No.21,
              Monday, 26 Mar – 1 Apr 2018
            </a>
          </div>
        </div>
      </div>

        <Footer/>
    </>
  );
};

export default Media;
