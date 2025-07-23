import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const UnpaidDividend = () => {

  const dividendsection = [
    {
      year: 2018,
      reports: [
        { label: "Dividend Account 2017-18", file: "" },
      ],
    },
    {
      year: 2017,
      reports: [
        { label: "Dividend Account 2016-17", file: "" },
      ],
    },
    {
      year: 2016,
      reports: [
        { label: "Dividend Account 2015-16", file: "" },
        { label: "Interim Dividend Account 2015-16", file: "" },
        { label: "Second Interim Dividend Account 2015-16", file: "" },
      ],
    },
    {
      year: 2015,
      reports: [
        { label: "Dividend Account 2014-15", file: "" },
        { label: "Interim Dividend Account 2014-15", file: "" },
      ],
    },
    {
      year: 2014,
      reports: [
        { label: "Dividend Account 2013-14", file: "" },
        { label: "Interim Dividend Account 2013-14", file: "" },
      ],
    },
    {
      year: 2013,
      reports: [
        { label: "Dividend Account 2012-13", file: "" },
      ],
    },

  ];


  return (
    <>
      <Header />
      <div>
        {/* Hero Section */}
        <div className="relative  w-full">
          <img
            src="./imgs/investors/investordividend.png"
            alt="Chiripal Group Banner"
            className="object-cover w-full h-full md:h-[70vh] lg:h-[80vh] xl:h-[88vh]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center">
            <div className="px-4 sm:px-8 md:px-16 lg:px-32">
              <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-montserrat, sans-serif font-bold text-left">
                Dividend
              </h1>
            </div>
          </div>
        </div>


        {/* pdf section  */}
        <div className="py-12 px-4  max-w-7xl mx-auto font-signika">
          {dividendsection.map((yearGroup, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b3a6a] uppercase mb-4">
                For the Year {yearGroup.year}
              </h2>
              <ul className="list-disc pl-5 text-[#0b3a6a] font-medium space-y-2">
                {yearGroup.reports.map((report, idx) => (
                  <li key={idx}>
                    <a
                      href={`/investor/dividend/${report.file}`}
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
      <Footer />
    </>
  )
};

export default UnpaidDividend;
