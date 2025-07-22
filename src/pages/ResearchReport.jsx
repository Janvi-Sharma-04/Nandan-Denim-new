import { title } from "framer-motion/client";
import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const ResearchReport = () => {

  const researchReports = [
    {
      year: 2018,
      reports: [
        { label: "Initiating Coverage Report – Karvy Stock Broking – 19.03.2018", file: "Nandan-Denim-Initiation-Report.pdf" },
        { label: "Research Report – Quantum Securities Private Limited – 19.02.2018", file: "Nandan-Quantum-Q3-FY18.pdf" },
      ],
    },
    {
      year: 2017,
      reports: [
        { label: "Research Report – Ventura Securities Limited – 02.06.2017", file: "" },
        { label: "Research Report – GEPL Capital – 10.01.2017", file: "" },
      ],
    },
    {
      year: 2016,
      reports: [
        { label: "Research Report – Sunidhi Securities & Finance Limited – 27.09.2016", file: "" },
        { label: "Research Report – Quantum Securities Private Limited – 15.02.2016", file: "" },
      ],
    },
    {
      year: 2015,
      reports: [
        { label: "Research Report – Quantum Securities Private Limited – 06.11.2015", file: "" },
        { label: "Research Report – Karvy Stock Broking Limited – 02.09.2015", file: "" },
        { label: "Research Report – Quantum Securities Private Limited – 10.08.2015", file: "" },
        { label: "Research Report – Quantum Securities Private Limited – 08.06.2015", file: "" },
        { label: "Research Report – Sunidhi Securities & Finance Limited – 09.04.2015", file: "" },
        { label: "Research Report – Quantum Securities Private Limited – 04.02.2015", file: "" },
      ],
    },
    {
      year: 2014,
      reports: [
        { label: "Research Report – Nirmal Bang Equities Private Limited – 28.11.2014", file: "" },
        { label: "Research Report – Quantum Securities Private Limited – 14.11.2014", file: "" },
      ],
    },
  ]

  return (
    <>
      <Header />
      <div>
        {/* Hero Section */}
        <div className="relative  w-full">
          <img
            src="./imgs/investors/investorresearchreport.png"
            alt="Chiripal Group Banner"
            className="object-cover w-full h-full md:h-[70vh] lg:h-[80vh] xl:h-[88vh]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
            <div className="px-4 sm:px-8 md:px-16 lg:px-32">
              <h1 className="text-yellow-400 text-3xl sm:text-5xl md:text-7xl font-montserrat, sans-serif font-bold text-left">
                Research Reports
              </h1>
            </div>
          </div>
        </div>

        {/* pdf section  */}
        <div className="py-12 px-4  font-signika max-w-7xl mx-auto">
          {researchReports.map((yearGroup, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b3a6a] uppercase mb-4">
                For the Year {yearGroup.year}
              </h2>
              <ul className="list-disc pl-5 text-[#0b3a6a] font-medium space-y-2">
                {yearGroup.reports.map((report, idx) => (
                  <li key={idx}>
                    <a
                      href={`/investor/researchreport/${report.file}`}
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

export default ResearchReport;
