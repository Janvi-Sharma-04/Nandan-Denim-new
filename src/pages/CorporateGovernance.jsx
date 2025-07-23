import React, { useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";




const CorporateGovernance = () => {
  const [activeYear, setActiveYear] = useState(2025);

  const governanceData = [
    {
      year: 2025,
      reports: [
        { label: "Integrated filing - Governance -June 2025", file: "Integrated filing - Governance -June 2025.pdf" },
        { label: "Integrated Filing- Governance – March 2025", file: "Integrated-Filing-Governance-March-2025.pdf" },

      ],
    },
    {
      year: 2024,
      reports: [
        { label: "Integrated Filing- Governance – December 2024 ", file: "Integrated-Filing-Governance-December-2024.pdf" },
        { label: "Regulation 27(2) Corporate Governance Report – September 2024 ", file: "Regulation-272-Corporate-Governance-Report-September-2024.pdf" },
        { label: "Regulation 27(2) Corporate Governance Report – June 2024 ", file: "Regulation-272-Corporate-Governance-Report-June-2024.pdf" },
        { label: "Regulation 27(2) Corporate Governance Report – March 2024 ", file: "Regulation-272-Corporate-Governance-Report-March-2024.pdf" },
      ],
    },
    {
      year: 2023,
      reports: [
        { label: "Regulation27_(2)_Corporate Governance Report – December 2023", file: "Regulation27_2_Corporate-Governance-Report-December-2023.pdf" },
        { label: "Regulation27_(2)_Corporate Governance Report – September 2023", file: "Regulation27_2_Corporate-Governance-Report-September-2023.pdf" },
        { label: "Regulation27_(2)_Corporate Governance Report – June 2023", file: "Regulation27_2_Corporate-Governance-Report-June-2023.pdf" },
        { label: "Regulation27_(2)_Corporate Governance Report – March 2023", file: "Regulation27_2_Corporate-Governance-Report-March-2023.pdf" },
      ],
    },
    {
      year: 2022,
      reports: [
        { label: "Regulation27_(2)_Corporate Governance Report – December 2022", file: "Regulation27_2_Corporate_Governance_Report-December-2022.pdf" },
        { label: "Regulation27_(2)_Corporate Governance Report – September 2022", file: "Regulation27_2_Corporate_Governance_Report-September-2022.pdf" },
        { label: "Regulation27_(2)_Corporate Governance Report – June 2022", file: "Regulation27_2_Corporate_Governance_Report-June-2022.pdf" },
        { label: "Regulation27_(2)_Corporate_Governance_Report -March 2022", file: "Regulation27_2_Corporate_Governance_Report-March-2022.pdf" },
      ],
    },
    {
      year: 2021,
      reports: [
        { label: "Regulation27_(2)_Corporate_Governance_Report -December 2021", file: "Regulation27_2_Corporate_Governance_Report-December-2021.pdf" },
        { label: "Regulation27_(2)_Corporate_Governance_Report -September 2021", file: "Regulation27_2_Corporate_Governance_Report-September-2021.pdf" },
        { label: "Regulation27_(2)_Corporate_Governance_Report -June 2021", file: "Regulation27_2_Corporate_Governance_Report-June-2021.pdf" },

      ],
    },
    {
      year: 2020,
      reports: [
        { label: "Regulation27_(2)_Corporate_Governance_Report -December 2020", file: "Regulation27_2_Corporate_Governance_Report-December-2020.pdf" },
        { label: "Regulation27_(2)_Corporate_Governance_Report -September 2020", file: "Regulation27_2_Corporate_Governance_Report-September-2020.pdf" },
        { label: "Regulation27_(2)_Corporate_Governance_Report -June 2020", file: "Regulation27_2_Corporate_Governance_Report-Mrach-2020.pdf" },
        { label: "Regulation27_(2)_Corporate_Governance_Report -Mrach 2020", file: "Regulation27_2_Corporate_Governance_Report-Mrach-2020 (1).pdf" },
      ],
    },
    {
      year: 2019,
      reports: [
        { label: "Regulation27_(2)_Corporate_ Governance_Report -December-2019", file: "Regulation27_2_Corporate_Governance_Report-December-2019.pdf" },
        { label: "Regulation27_(2)_Corporate_Governance_Report -September-2019", file: "Regulation27_2_Corporate_Governance_Report-September-2019.pdf" },
        { label: "Regulation27_(2)_Corporate_Governance_Report -June-2019", file: "Regulation27_2_Corporate_Governance_Report-June-2019.pdf" },
        { label: "Corporate Governance Report – March-2019", file: "" },
      ],
    },
    {
      year: 2018,
      reports: [
        { label: "Corporate Governance Report – December-2018", file: "Corporate-Governance-Report-December-2018.pdf" },
        { label: "Corporate Governance Report – September 2018", file: "Corporate-Governance-Report-September-2018.pdf" },
        { label: "Corporate Governance Report – June 2018", file: "Regulation27_2_Corporate_Governance_Report-June-2018.pdf" },
        { label: "Corporate Governance Report – March 2018", file: "Regulation27_2_Corporate_Governance_Report-March-2018.pdf" },
      ],
    },
    {
      year: 2017,
      reports: [
        { label: "Corporate Governance Report – March 2017", file: "Regulation27_2_Corporate_Governance_Report-December-2017.pdf" },
        { label: "Corporate Governance Report – June 2017", file: "Regulation27_2_Corporate_Governance_Report-June-2017.pdf" },
        { label: "Corporate Governance Report – September 2017", file: "Regulation27_2_Corporate_Governance_Report-September-2017.pdf" },
        { label: "Corporate Governance Report – December 2017", file: "Regulation27_2_Corporate_Governance_Report-December-2017.pdf" },
      ],
    },
    {
      year: 2016,
      reports: [
        { label: "Corporate Governance Report – March 2016", file: "Regulation27_2_Corporate_Governance_Report-December-2016.pdf" },
        { label: "Corporate Governance Report – June 2016", file: "" },
        { label: "Corporate Governance Report – September 2016", file: "" },
        { label: "Corporate Governance Report – December 2016", file: "" },
      ],
    },
    {
      year: 2015,
      reports: [
        { label: "Corporate Governance Report – March 2015", file: "" },
        { label: "Corporate Governance Report – June 2015", file: "" },
        { label: "Corporate Governance Report – September 2015", file: "" },
        { label: "Corporate Governance Report – December 2015", file: "" },
      ],
    },
    {
      year: 2014,
      reports: [
        { label: "Corporate Governance Report – March 2014", file: "" },
        { label: "Corporate Governance Report – June 2014", file: "" },
        { label: "Corporate Governance Report – September 2014", file: "" },
        { label: "Corporate Governance Report – December 2014", file: "" },
      ],
    },
    {
      year: 2013,
      reports: [
        { label: "Corporate Governance Report – March 2013", file: "" },
        { label: "Corporate Governance Report – June 2013", file: "" },
        { label: "Corporate Governance Report – September 2013", file: "" },
        { label: "Corporate Governance Report – December 2013", file: "" },
      ],
    },
    {
      year: 2012,
      reports: [
        { label: "Corporate Governance Report – March 2012", file: "" },
        { label: "Corporate Governance Report – June 2012", file: "" },
        { label: "Corporate Governance Report – September 2012", file: "" },
        { label: "Corporate Governance Report – December 2012", file: "" },
      ],
    },
    {
      year: 2011,
      reports: [
        { label: "Corporate Governance Report – June 2011", file: "" },
        { label: "Corporate Governance Report – September 2011", file: "" },
        { label: "Corporate Governance Report – December 2011", file: "" },

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
            src="./imgs/investors/investorcorporategovernance.png"
            alt="Chiripal Group Banner"
            className="object-cover w-full h-full md:h-[70vh] lg:h-[80vh] xl:h-[88vh]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 max-w-7xl flex items-center">
            <div className="px-4 sm:px-8 md:px-16 lg:px-32">
              <h1 className="text-yellow-400 text-3xl sm:text-5xl font-montserrat, sans-serif md:text-7xl font-bold text-left">
                Corporate Governance
              </h1>
              <p className="text-white font-serif text-lg sm:text-lg md:text-lg mt-4">
                Corporate Governance is about commitment to value and ethical business conduct.
                It is about how an organization is managed.
              </p>
            </div>
          </div>
        </div>


        {/* some  information  */}
        <div className="max-w-7xl mx-auto   mt-8 mb-12 space-y-2 font-signika text-justify">
          {/* heading */}
          <div className="bg-white px-6 font-sans text-sm space-y-2 ">
            <p className="">Government compliances are regulatory guidelines and parameters that every responsible company has to abide.
              Being an avid follower of the law, Nandan Denim pledges to contemplate to all
              the compliances set through by the administration. Here are the government compliances that we sincerely follow</p>
            <p className="font-medium ">Our corporate governance philosophy is based on the following principles:</p>
          </div>
          {/* principles */}
          <div>
            <ul className="list-disc px-12 py-1 space-y-1 text-blue-950 font-medium text-sm">
              <li>Be transparent and maintain a high degree of disclosure</li>
              <li>Make a clear distinction between personal conveniences and corporate resources</li  >
              <li>Communicate externally, in a truthful manner, about how the Company is run internally</li>
              <li>Comply with the laws in all the countries in which we operate</li  >
              <li>Have a simple and transparent corporate structure driven solely by business needs</li>
              <li>Management is the trustee of the shareholders’ capital and not the owner</li>
            </ul>
          </div>
        </div>



        {/* Governance heading */}
        <p className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 font-semibold text-2xl font-montserrat, sans-serif">Our previous Corporate Governance Reports can be downloaded here:</p>


        {/* Governance Tab Section */}
        <div className="p-4">
          <div className="max-w-7xl mx-auto mt-12 mb-10   bg-gray-100 rounded-lg flex flex-col md:flex-row">
            {/* Year Tabs */}
            <div className="w-full md:w-1/5 border-r border-gray-300">
              {governanceData.map((item) => (
                <button
                  key={item.year}
                  onClick={() => setActiveYear(item.year)}
                  className={`block w-full px-4 py-4 text-left text-sm md:text-base border-b border-gray-300 transition ${activeYear === item.year
                    ? "bg-gray-100 font-bold text-black"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                    }`}
                >
                  {item.year}
                </button>
              ))}
            </div>

            {/* Reports Panel */}
            <div className="w-full md:w-3/4 px-6 py-4">
              {governanceData
                .find((item) => item.year === activeYear)
                ?.reports.map((report, idx) => (
                  <li key={idx} className="list-disc ml-5 mb-2 text-blue-900 font-signika max-w-7xl mx-auto">
                    <a
                      href={`/investor/corporategovernance/${report.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {report.label}
                    </a>
                  </li>
                ))}
            </div>

          </div>
        </div>

      </div>
      <Footer />
    </>


  )
};

export default CorporateGovernance;
