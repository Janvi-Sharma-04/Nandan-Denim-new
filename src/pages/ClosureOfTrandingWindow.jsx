import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const ClosureOfTrandingWindow = () => {


  const closureoftrandingwindow = [
    {
      year: 2025,
      reports: [
        { label: "Closure of Trading Window – Quarter 4", file: "Closure-of-Trading-Window-Quarter-4.pdf" },
        { label: "Closure of Trading Window – Quarter 3", file: "Closure-of-Trading-Window-Quarter-3.pdf" },
        { label: "Closure of Trading Window – Quarter 2", file: "Closure-of-Trading-Window-Quarter-2.pdf" },
        { label: "Closure of Trading Window – Quarter 1", file: "Closure-of-Trading-Window-Quarter-1.pdf" },
        { label: "Closure of Trading Window – 06.06.2024 to 19.06.2024", file: "Closure-of-Trading-Window-06.06.2024-to19.06.2024.pdf" },
      ],
    },
    {
      year: 2024,
      reports: [

        { label: "Closure of Trading Window – Quarter 4", file: "Closure-of-Trading-Window-Quarter-4 (1).pdf" },
        { label: "Closure of Trading Window – Quarter 3", file: "Closure-of-Trading-Window-Quarter-3 (1)-2023.pdf" },
        { label: "Closure of Trading Window – Quarter 2", file: "Closure-of-Trading-Window-Quarter-2 (1)-2023.pdf" },
        { label: "Closure of Trading Window – Quarter 1", file: "Closure-of-Trading-Window-Quarter-1 (1)-2023.pdf" },
      ],
    },
    {
      year: 2023,
      reports: [
        { label: "Closure of Trading Window – Quarter 4", file: "Closure-of-Trading-Window-Quarter-4 (2)-2022.pdf" },
        { label: "Closure of Trading Window – Quarter 3", file: "Closure-of-Trading-Window-Quarter-3 (1)-2022.pdf" },
        { label: "Closure of Trading Window – Quarter 2", file: "Closure-of-Trading-Window-Quarter-2 (1)-2022.pdf" },
        { label: "Closure of Trading Window – Quarter 1", file: "Closure-of-Trading-Window-Quarter-1 (1)-2022.pdf" },
      ],
    },
    {
      year: 2022,
      reports: [
        { label: "Closure of Trading Window – Quarter 4", file: "Closure-of-Trading-Window-Quarter-4 (2)-2021.pdf" },
        { label: "Closure of Trading Window – Quarter 3", file: "Closure-of-Trading-Window-Quarter-3-2021.pdf" },
        { label: "Closure of Trading Window – Quarter 2", file: "Closure-of-Trading-Window-Quarter-2 (1)-2021.pdf" },
        { label: "Closure of Trading Window – Quarter 1", file: "Closure-of-Trading-Window-Quarter-1 (1)-2021.pdf" },
      ],
    },
    {
      year: 2021,
      reports: [
        { label: "Closure of Trading Window – Quarter 4", file: "Closure-of-Trading-Window-Quarter-4 (2)-2020.pdf" },
        { label: "Closure of Trading Window – Quarter 3", file: "Closure-of-Trading-Window-Quarter-3 (1)-2020.pdf" },
        { label: "Closure of Trading Window – Quarter 2", file: "Closure-of-Trading-Window-Quarter-2 (1)-2020.pdf" },
        { label: "Closure of Trading Window – Quarter 1", file: "Closure-of-Trading-Window-Quarter-1 (1)-2020.pdf" },
      ],
    },
    {
      year: 2020,
      reports: [
        { label: "Closure of Trading Window – Quarter 4", file: "Closure-of-Trading-Window-Quarter-4 (2)02019.pdf" },
        { label: "Closure of Trading Window – Quarter 3", file: "" },
        { label: "Closure of Trading Window – Quarter 2", file: "Closure-of-Trading-Window-Quarter-2 (1)-2019.pdf" },
        { label: "Closure of Trading Window – Quarter 1", file: "Closure-of-Trading-window-03.04.2019.pdf" },
      ],
    },
    {
      year: 2019,
      reports: [
        { label: "Closure of Trading Window – Quarter 1", file: "Closure-of-Trading-window-02.08.2018_01.pdf" },
        { label: "Closure of Trading Window – Quarter 2", file: "Closure-of-Trading-window-25.10.2018_02.pdf" },
        { label: "Closure of Trading Window – Quarter 3", file: "Closure-of-Trading-window-29.01.2019_201803.pdf" },
        { label: "Closure of Trading Window – Quarter 4", file: "Closure-of-Trading-window-03.04.2019 (1)_201804.pdf" },
      ],
    },
    {
      year: 2018,
      reports: [
        { label: "Closure of Trading Window – Quarter 1", file: "Closure-of-Trading-window-22.07.2017_01.pdf" },
        { label: "Closure of Trading Window – Quarter 2", file: "Closure-of-Trading-window-30.11.2017_02.pdf" },
        { label: "Closure of Trading Window – Quarter 3", file: "Closure-of-Trading-window-01.02.2018_201703.pdf" },
        { label: "Closure of Trading Window – Quarter 4", file: "Closure-of-Trading-window-16.05.2018_201704.pdf" },
      ],
    },
    {
      year: 2017,
      reports: [
        { label: "Closure of Trading Window – Quarter 1", file: "Closure-of-Trading-window-03.08.2016_01.pdf" },
        { label: "Closure of Trading Window – Quarter 2", file: "Closure-of-Trading-window-20.10.2016_02.pdf" },
        { label: "Closure of Trading Window – Quarter 3", file: "Closure-of-Trading-window-30.01.2017_201603.pdf" },
        { label: "Closure of Trading Window – Quarter 4", file: "Closure-of-Trading-window-01.05.2017_201604.pdf" },
      ],
    },
  ]
  return (
    <>
      <Header />
      <div>
        {/* Hero Section */}
        <div className="relative bg-[#193267]  mb-10 p-28 w-full px-32">
          <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-montserrat, sans-serif  font-bold text-left">
            Closure of Trading Window
          </h1>
        </div>



        {/* pdf section  */}
        <div className="py-12 px-4  font-signika max-w-7xl mx-auto">
          {closureoftrandingwindow.map((yearGroup, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b3a6a] uppercase mb-4">
                For the Year {yearGroup.year}
              </h2>
              <ul className="list-disc pl-5 text-[#0b3a6a] font-medium space-y-2">
                {yearGroup.reports.map((report, idx) => (
                  <li key={idx}>
                    <a
                      href={`/investor/closureoftrandingwindow/${report.file}`}
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

export default ClosureOfTrandingWindow;
