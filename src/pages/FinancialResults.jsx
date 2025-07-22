import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const financialData = [
  {
    year: 2025,
    results: [
      {
        label: "Audited Financial Results – March 2025",
        file: "Audited Financial Results - March 2025.pdf",
      },
    ],
    newsPapers: [
      {
        label: "March 2025",
        file: "March 2025.pdf",
      },
    ],
  },
  {
    year: 2024,
    results: [
      {
        label: "Unaudited Financial Results – December 2024",
        file: "Unaudited-Financial-Results-December-2024.pdf",
      },
      {
        label: "Unaudited Financial Results – September 2024",
        file: "Unaudited-Financial-Results-September-2024.pdf",
      },
      {
        label: "Unaudited Financial Results – June 2024",
        file: "Unaudited-Financial-Results-June-2024.pdf",
      },
      {
        label: "Audited Financial Results – March 2024",
        file: "Audited-Financial-Results-March-2024.pdf",
      },
    ],
    newsPapers: [
      {
        label: "December 2024",
        file: "December-2024.pdf",
      },
      {
        label: "September 2024",
        file: "September-2024.pdf",
      },
      {
        label: "June 2024",
        file: "June-2024.pdf",
      },
      {
        label: "March 2024",
        file: " March-2024.pdf",
      },
    ],
  },
  {
    year: 2023,
    results: [
      {
        label: "Unaudited Financial Results – December 2023",
        file: "Unaudited-Financial-Results-December-2023.pdf",
      },
      {
        label: "Unaudited Financial Results – September 2023",
        file: "Unaudited-Financial-Results-September-2023.pdf",
      },
      {
        label: "Unaudited Financial Results – June 2023",
        file: "FinancialResults30062023andoutcome-2023june.pdf",
      },
      {
        label: "Audited Financial Results – March 2023",
        file: "Audited-Financial-Results-March-2023.pdf",
      },
    ],
    newsPapers: [
      {
        label: "December 2023",
        file: "December-2023.pdf",
      },
      {
        label: "September 2023",
        file: "September-2023.pdf",
      },
      {
        label: "June 2023",
        file: "June-2023.pdf",
      },
      {
        label: "March 2023",
        file: "March-2023.pdf",
      },
    ],
  },
  {
    year: 2022,
    results: [
      {
        label: "Unaudited Financial Results – December 2022",
        file: "Unaudited-Financial-Results-December-2022.pdf",
      },
      {
        label: "Unaudited Financial Results – September 2022",
        file: "Unaudited-Financial-Result-September-2022.pdf",
      },
      {
        label: "Unaudited Financial Results – June 2022",
        file: "4-Unaudited-Financial-Results-June-2022.pdf",
      },
      {
        label: "Audited Financial Results – March 2022",
        file: "4-Audited-Financial-Results-March-2022.pdf",
      },
    ],
    newsPapers: [
      {
        label: "December 2022",
        file: "December-2022.pdf",
      },
      {
        label: "September 2022",
        file: "September-2022.pdf",
      },
      {
        label: "June 2022",
        file: "June-2022.pdf",
      },
      {
        label: "March 2022",
        file: "March-2022.pdf",
      },
    ],
  },
  {
    year: 2021,
    results: [
      {
        label: "Unaudited Financial Results – December 2021",
        file: "Unaudited-Financial-Results-December-2021.pdf",
      },
      {
        label: "Unaudited Financial Results – September 2021",
        file: "Unaudited-Financial-Results-September-2021.pdf",
      },
      {
        label: "Unaudited Financial Results – June 2021",
        file: "Unaudited-Financial-Results-June-2021.pdf",
      },
      {
        label: "Audited Financial Results – March 2021",
        file: "NDLAFR31032021-mar.pdf",
      },
    ],
    newsPapers: [
      {
        label: "December 2021",
        file: "",
      },
      {
        label: "September 2021",
        file: "September-2021.pdf",
      },
      {
        label: "June 2021",
        file: "June-2021.pdf",
      },
      {
        label: "March 2021",
        file: "March-2021-results.pdf",
      },
    ],
  },
  {
    year: 2020,
    results: [
      {
        label: "Unaudited Financial Results – December 2020",
        file: "Unaudited-Financial-Results-December-2020.pdf",
      },
      {
        label: "Unaudited Financial Results – September 2020",
        file: "Unaudited-Financila-Results-September-2020.pdf",
      },
      {
        label: "Unaudited Financial Results – June 2020",
        file: "Unaudited-Financial-Results-June-2020.pdf",
      },
      {
        label: "Audited Financial Results – March 2020",
        file: "Audited-Financial-Results-March-2020.pdf",
      },
    ],
    newsPapers: [
      {
        label: "December 2020",
        file: "December-2020-results.pdf",
      },
      {
        label: "September 2020",
        file: "September-2020-results.pdf",
      },
      {
        label: "June 2020",
        file: "June-2020-results.pdf",
      },
      {
        label: "March 2020",
        file: "March-2020-results.pdf",
      },
    ],
  },

  {
    year: 2019,
    results: [
      { label: "Unaudited Financial Results – December 2019", file: "" },
      { label: "Unaudited Financial Results – September 2019", file: "" },
      { label: "Unaudited Financial Results – June 2019", file: "31.06.2019.pdf" },
      { label: "Audited Financial Results – March 2019", file: "Audited-Financial-Results-31.03.2019.pdf" },
    ],
    newsPapers: [
      { label: "December 2019", file: "December-2019.pdf" },
      { label: "September 2019", file: "September-2019.pdf" },
      { label: "June 2019", file: "June-2019.pdf" },
      { label: "March 2019", file: "March-2019.pdf" },
    ],
  },
  {
    year: 2018,
    results: [
      { label: "Unaudited Financial Results – December 2018", file: "Unaudited-Financial-Results-December-2018.pdf" },
      { label: "Unaudited Financial Results – September 2018", file: "NDLresults30092018.pdf" },
      { label: "Unaudited Financial Results – June 2018", file: "Audited-Financial-Results-June-2018.pdf" },
      { label: "Audited Financial Results – March 2018", file: "Audited-Financial-Results-March-2018.pdf" },
    ],
    newsPapers: [
      { label: "December 2018", file: "December-2018.pdf" },
      { label: "September 2018", file: "September-2018.pdf" },
      { label: "June 2018", file: "June-2018.pdf" },
      { label: "March 2018", file: "March-2018-newspaper-FR.pdf" },
    ],
  },
  {
    year: 2017,
    results: [
      { label: "Audited Financial Results – March 2017", file: "Audited-Financial-Results-March-2017.pdf" },
      { label: "Unaudited Financial Results – June 2017", file: "Unaudited-Financial-Results-September-2017.pdf" },
      { label: "Unaudited Financial Results – September 2017", file: "Unaudited-Financial-Results-June-2017.pdf" },
      { label: "Unaudited Financial Results – December 2017", file: "Unaudited-Financial-Results-December-2017.pdf" },
    ],
    newsPapers: [
      { label: "March 2017", file: "31.03.2017-2.pdf" },
      { label: "June 2017", file: "30.06.2017-1.pdf" },
      { label: "September 2017", file: "30.09.2017-2.pdf" },
      { label: "December 2017", file: "31.12.2017-1.pdf" },
    ],
  },
  {
    year: 2016,
    results: [
      { label: "Audited Financial Results – March 2016", file: "Audited-Financial-Results-March-2016.pdf" },
      { label: "Unaudited Financial Results – June 2016", file: "Unaudited-Financial-Results-June-2016.pdf" },
      { label: "Unaudited Financial Results – September 2016", file: "Unaudited-Financial-Results-September-2016.pdf" },
      { label: "Unaudited Financial Results – December 2016", file: "Unaudited-Financial-Results-December-2016.pdf" },
    ],
    newsPapers: [],
  },
  {
    year: 2015,
    results: [
      { label: "Audited Financial Results – March 2015", file: "Audited-Financial-Results-March-2015.pdf" },
      { label: "Unaudited Financial Results – June 2015", file: "Unaudited-Financial-Results-June-2015.pdf" },
      { label: "Unaudited Financial Results – September 2015", file: "Unaudited-Financial-Results-September-2015.pdf" },
      { label: "Unaudited Financial Results – December 2015", file: "Unaudited-Financial-Results-December-2015.pdf" },
    ],
    newsPapers: [],
  },
  {
    year: 2014,
    results: [
      { label: "Unaudited Financial Results – December 2014", file: "Audited-Financial-Results-March-2014.pdf" },
      { label: "Unaudited Financial Results – September 2014", file: "Unaudited-Financial-Results-September-2014.pdf" },
      { label: "Unaudited Financial Results – June 2014", file: "Unaudited-Financial-Results-June-2014.pdf" },
      { label: "Audited Financial Results – March 2014", file: "Unaudited-Financial-Results-December-2014.pdf" },
    ],
    newsPapers: [],
  },
  {
    year: 2013,
    results: [
      { label: "Unaudited Financial Results – December 2013", file: "Audited-Financial-Results-March-2013.pdf" },
      { label: "Unaudited Financial Results – September 2013", file: "Unaudited-Financial-Results-September-2013.pdf" },
      { label: "Unaudited Financial Results – June 2013", file: "Unaudited-Financial-Results-June-2013.pdf" },
      { label: "Audited Financial Results – March 2013", file: "Unaudited-Financial-Results-December-2013.pdf" },
    ],
    newsPapers: [],
  },

];

const FinancialResults = () => {
  return (
    <>
      <Header />
      <div>
        {/* Hero Section */}
        <div className="relative  w-full">
          <img
            src="./imgs/investors/investorfinancialresult.png"
            alt="Chiripal Group Banner"
            className="object-cover w-full h-full md:h-[70vh] lg:h-[80vh] xl:h-[88vh]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
            <div className="px-4 sm:px-8 md:px-16 lg:px-32">
              <h1 className="text-yellow-400 text-3xl sm:text-5xl md:text-7xl font-montserrat, sans-serif font-bold text-left">
                Financial Results
              </h1>
            </div>
          </div>
        </div>

        {/* Financial Results Section */}
        <div className="py-12 px-4 font-signika text-justify max-w-7xl mx-auto ">
          {financialData.map((yearBlock, index) => {
            if (
              (!yearBlock.results || yearBlock.results.length === 0) &&
              (!yearBlock.newsPapers || yearBlock.newsPapers.length === 0)
            ) {
              return null;
            }

            return (
              <div
                key={index}
                className={`grid ${yearBlock.newsPapers.length > 0
                  ? "md:grid-cols-2"
                  : "grid-cols-1"
                  } gap-10  border-b border-gray-300 pb-6 mb-8`}
              >
                {/* Results Section */}
                <div>
                  <h2 className="text-xl  font-extrabold text-[#0b3a6a] mb-2">
                    FOR THE YEAR {yearBlock.year}
                  </h2>
                  <ul className="list-disc pl-6 space-y-1 text-[#0b3a6a]">
                    {yearBlock.results.map((item, idx) => (
                      <li key={idx}>
                        {item.file ? (
                          <a
                            href={`/investor/financialresult/${item.file}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-blue-900"
                          >
                            {item.label}
                          </a>
                        ) : (
                          <span className="text-gray-500">{item.label} (Coming Soon)</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newspaper Section */}
                {yearBlock.newsPapers.length > 0 && (
                  <div>
                    <h2 className="text-xl font-extrabold text-[#0b3a6a] mb-2">
                      Results News Paper
                    </h2>
                    <ul className="list-disc pl-6 space-y-1 text-[#0b3a6a]">
                      {yearBlock.newsPapers.map((item, idx) => (
                        <li key={idx}>
                          {item.file ? (
                            <a
                              href={`/investor/financialresult/${item.file}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline text-blue-900"
                            >
                              {item.label}
                            </a>
                          ) : (
                            <span className="text-gray-500">{item.label} (Coming Soon)</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
        <Footer/>
    </>
  );
};

export default FinancialResults;
