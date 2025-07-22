import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const VotingResult = () => {

  const votingresults = [
    {
      year: 2024,
      reports: [
        { label: "Voting Results 2024", file: "Voting-Results-2024.pdf" },
      ],
    },
    {
      year: 2023,
      reports: [
        { label: "Voting Results 2023", file: "voting-results_2023.pdf" },
      ],
    },
    {
      year: 2022,
      reports: [
        { label: "Voting Result – Postal Ballot – 2022", file: "Scrutinizer-Report-ndl-2022.pdf" },
      ],
    },
    {
      year: 2021,
      reports: [
        { label: "Voting-Result-AGM-2021", file: "Voting-Result-AGM-2021.pdf" },
      ],
    },
    {
      year: 2020,
      reports: [
        { label: "Voting-Result-AGM-2020", file: "Voting-Result-AGM-2020.pdf" },
      ],
    },
    {
      year: 2019,
      reports: [
        { label: "Voting Result – AGM 2019", file: "VOTING-RESULTS-AGM-2019.pdf" },
      ],
    },
    {
      year: 2018,
      reports: [
        { label: "Voting Result – AGM 2018", file: "Voting-Results-AGM-2018-ilovepdf-compressed.pdf" },
      ],
    },
  ]




  return (
    <>
    <Header/>
     <div>
      {/* Hero Section */}
      <div className="relative w-full">
        <img
          src="./imgs/investors/investorvotingresult.png"
          alt="Chiripal Group Banner"
          className="object-cover w-full h-full md:h-[70vh] lg:h-[80vh] xl:h-[88vh]"
        />
        <div className="absolute inset-0   flex items-center">
          <div className="px-4 sm:px-8 md:px-16 lg:px-32">
            <h1 className="text-yellow-400 text-3xl sm:text-5xl md:text-7xl font-montserrat, sans-serif font-bold text-left">
              Voting Results
            </h1>
          </div>
        </div>
      </div>


      {/* pdf section  */}
      <div className="py-12 px-4  max-w-7xl mx-auto font-signika">
        {votingresults.map((yearGroup, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-2xl font-extrabold text-[#0b3a6a] uppercase mb-4">
              For the Year {yearGroup.year}
            </h2>
            <ul className="list-disc pl-5 text-[#0b3a6a] font-medium space-y-2">
              {yearGroup.reports.map((report, idx) => (
                <li key={idx}>
                  <a
                    href={`/investor/votingresult/${report.file}`}
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

export default VotingResult;
