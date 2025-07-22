import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const ConcallTranscripts = () => {


  const concalltranscript = [
    {
      year: 2017,
      reports: [
        { label: "Concall Transcript – 13, December 2017", file: "" },
        { label: "Concall Transcript – 30, May 2017", file: "" },
      ],
    },
    {
      year: 2016,
      reports: [

        { label: "Concall Transcript – 11, August 2016", file: "" },
        { label: "Concall Transcript – 31, May 2016", file: "" },
        { label: "Concall Transcript – 12, February 2016", file: "" },
      ],
    },
  ]


  return (
    <>
      <Header />
      <div>
        {/* Hero Section */}
        <div className="relative  w-full mb-10">
          <img
            src="./imgs/investors/investorconcalltranscripts.png"
            alt="Chiripal Group Banner"
            className="object-cover w-full h-full md:h-[70vh] lg:h-[80vh] xl:h-[88vh]"
          />
          <div className="absolute inset-0  flex items-center">
            <div className="px-4 sm:px-8 md:px-16 lg:px-32">
              <h1 className="text-yellow-400 text-3xl sm:text-5xl md:text-7xl font-montserrat, sans-serif font-bold text-left">
                Concall Transcripts
              </h1>
            </div>
          </div>
        </div>

        {/* pdf section  */}
        <div className="py-12 px-4  font-signika max-w-7xl mx-auto">
          {concalltranscript.map((yearGroup, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b3a6a] uppercase mb-4">
                For the Year {yearGroup.year}
              </h2>
              <ul className="list-disc pl-5 text-[#0b3a6a] font-medium space-y-2">
                {yearGroup.reports.map((report, idx) => (
                  <li key={idx}>
                    <a
                      href={`/investor/concalltranscript/${report.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {report.label}
                    </a>
                  </li>
                ))}
              </ul>
              <hr className="mt-4 border-gray-300" />
            </div>
          ))}
        </div>



      </div>
        <Footer/>
    </>
  )
};

export default ConcallTranscripts;
