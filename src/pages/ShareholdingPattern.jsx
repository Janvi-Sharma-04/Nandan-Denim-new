import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const ShareholdingPattern = () => {


  const shareholdingData = [
    {
      year: 2025,
      reports: [
        { label: "NDL – Shareholding Pattern – 31.03.2025", file: "NDL-Shareholding-Pattern-31.03.2025.pdf" },
      ],
    },
    {
      year: 2024,
      reports: [
        { label: "NDL – Shareholding Pattern – 31.12.2024", file: "NDL-Shareholding-Pattern-31.12.2024_01.pdf" },
        { label: "NDL – Shareholding Pattern – 30.09.2024", file: "NDL-Shareholding-Pattern-30.09.2024.pdf" },
        { label: "NDL – Shareholding Pattern – 30.06.2024", file: "NDL-Shareholding-Pattern-30.06.2024.pdf" },
        { label: "NDL – Shareholding Pattern – 31.03.2024", file: "NDL-Shareholding-Pattern-31.03.2024.pdf" },
      ],
    },
    {
      year: 2023,
      reports: [
        { label: "NDL – Shareholding Pattern – 31.12.2023", file: "NDL-Shareholding-Pattern-31.12.2023__.pdf" },
        { label: "NDL – Shareholding Pattern – 30.09.2023", file: "NDL-Shareholding-Pattern-30.09.2023.pdf" },
        { label: "NDL – Shareholding Pattern – 30.06.2023", file: "NDL-Shareholding-Pattern-30.06.2023.pdf" },
        { label: "NDL – Shareholding Pattern – 31.03.2023", file: "NDL-Shareholding-Pattern-31.03.2023.pdf" },
      ],
    },
    {
      year: 2022,
      reports: [
        { label: "NDL – Shareholding Pattern – 31.12.2022", file: "NDL-Shareholding-Pattern-31.12.2022.pdf" },
        { label: "NDL – Shareholding Pattern – 30.09.2022", file: "NDL-Shareholding-Pattern-30.09.2022.pdf" },
        { label: "NDL – Shareholding Pattern – 30.06.2022", file: "NDL-Shareholding-Pattern-30.06.2022.pdf" },
        { label: "NDL – Shareholding Pattern – 31.03.2022", file: "NDL-Shareholding-Pattern-31.03.2022.pdf" },
      ],
    },
    {
      year: 2021,
      reports: [
        { label: "NDL – Shareholding Pattern – 31.12.2021", file: "NDL-Shareholding-Pattern-31.12.2021.pdf" },
        { label: "NDL – Shareholding Pattern – 30.09.2021", file: "NDL-Shareholding-Pattern-30.09.2021.pdf" },
        { label: "NDL – Shareholding Pattern – 30.06.2021", file: "" },
        { label: "NDL – Shareholding Pattern – 31.03.2021", file: "NDL-Shareholding-Pattern-31.03.2021.pdf" },
      ],
    },
    {
      year: 2020,
      reports: [
        { label: "NDL – Shareholding Pattern – 31.12.2020", file: "NDL-Shareholding-Pattern-31.12.2020.pdf" },
        { label: "NDL – Shareholding Pattern – 30.09.2020", file: "NDL-Shareholding-Pattern-30.09.2020.pdf" },
        { label: "NDL – Shareholding Pattern – 31.06.2020", file: "NDL-Shareholding-Pattern-31.06.2020.pdf" },
        { label: "NDL – Shareholding Pattern – 31.03.2020", file: "NDL-Shareholding-Pattern-31.03.2020.pdf" },
      ],
    },
    {
      year: 2019,
      reports: [
        { label: "NDL – Shareholding Pattern – 31.12.2019", file: "" },
        { label: "NDL – Shareholding Pattern – 30.09.2019", file: "NDL-Shareholding-Pattern-30.09.2019.pdf" },
        { label: "NDL – Shareholding Pattern – June 2019", file: "NDL-Shareholding-Pattern-30.06.2019.pdf" },
        { label: "NDL – Shareholding Pattern – March 2019", file: "NDL-Shareholding-Pattern-31.03.2019.pdf" },
      ],
    },
    {
      year: 2018,
      reports: [
        { label: "NDL – Shareholding Pattern – December 2018", file: "Shareholding-Pattern-December-2018.pdf" },
        { label: "NDL – Shareholding Pattern –  September 2018", file: "Shareholding-Pattern-30.09.2018.pdf" },
        { label: "NDL – Shareholding Pattern – June 2018", file: "NDL-Shareholding-Pattern-30.06.2018.pdf" },
        { label: "NDL – Shareholding Pattern –  March 2018", file: "Shareholding-Pattern-March-2018.pdf" },
      ],
    },
    {
      year: 2017,
      reports: [
        { label: "NDL – Shareholding Pattern – December 2017", file: "Shareholding-Pattern-December-2017.pdf" },
        { label: "NDL – Shareholding Pattern – September 2017", file: "Shareholding-Pattern-September-2017.pdf" },
        { label: "NDL – Shareholding Pattern – June 2017", file: "Shareholding-Pattern-June-2017.pdf" },
        { label: "NDL – Shareholding Pattern –  March 2017", file: "Shareholding-Pattern-March-2017.pdf" },
      ],
    },
    {
      year: 2016,
      reports: [
        { label: "NDL – Shareholding Pattern – December 2016", file: "" },
        { label: "NDL – Shareholding Pattern – September 2016", file: "ShareholdingPattern-September2016.pdf" },
        { label: "NDL – Shareholding Pattern –  June 2016", file: "ShareholdingPattern-June2016.pdf" },
        { label: "NDL – Shareholding Pattern –  March 2016", file: "ShareholdingPattern-March2016.pdf" },
      ],
    },
    {
      year: 2015,
      reports: [
        { label: "NDL – Shareholding Pattern – December 2015", file: "ShareholdingPattern-December2015.pdf" },
        { label: "NDL – Shareholding Pattern – September 2015", file: "ShareholdingPattern-Sept2015.pdf" },
        { label: "NDL – Shareholding Pattern – June 2015", file: "ShareholdingPattern-June2015.pdf" },
        { label: "NDL – Shareholding Pattern –  March 2015", file: "Shareholding-Pattern-March-2015.pdf" },
      ],
    },
    {
      year: 2014,
      reports: [
        { label: "NDL – Shareholding Pattern – December 2014", file: "Shareholding-Pattern-December-2014.pdf" },
        { label: "NDL – Shareholding Pattern – September 2014", file: "ShareholdingPattern-September2014.pdf" },
        { label: "NDL – Shareholding Pattern – June 2014", file: "ShareholdingPattern-June2014.pdf" },
        { label: "NDL – Shareholding Pattern –  March 2014", file: "ShareholdingPattern-March2014.pdf" },
      ],
    },
    {
      year: 2013,
      reports: [
        { label: "NDL – Shareholding Pattern – December 2013", file: "Shareholding-Pattern-December-2013.pdf" },
        { label: "NDL – Shareholding Pattern – September 2013", file: "Shareholding-Pattern-September-2013.pdf" },
        { label: "NDL – Shareholding Pattern – June 2013", file: "Shareholding-Pattern-June-2013.pdf" },
        { label: "NDL – Shareholding Pattern –  March 2013", file: "Shareholding-Pattern-March-2013.pdf" },
      ],
    },
  ];


  return (
   <>
   <Header/>
    <div>
      {/* Hero Section */}
      <div className="relative  w-full">
        <img
          src="./imgs/investors/investorshareholdingpattern.png"
          alt="Chiripal Group Banner"
          className="object-cover w-full h-full md:h-[70vh] lg:h-[80vh] xl:h-[88vh]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
          <div className="px-4 sm:px-8 md:px-16 lg:px-32">
            <h1 className="text-yellow-400 text-3xl sm:text-5xl md:text-7xl font-montserrat, sans-serif font-bold text-left">
              Shareholding Pattern
            </h1>
          </div>
        </div>
      </div>
      {/* pdf section  */}
      <div className="py-12 px-4  max-w-7xl mx-auto font-signika">
        {shareholdingData.map((yearGroup, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-2xl font-extrabold text-[#0b3a6a] uppercase mb-4">
              For the Year {yearGroup.year}
            </h2>
            <ul className="list-disc pl-5 text-[#0b3a6a] font-medium space-y-2">
              {yearGroup.reports.map((report, idx) => (
                <li key={idx}>
                  <a
                    href={`/investor/shareholdingpatterns/${report.file}`}
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

export default ShareholdingPattern;
