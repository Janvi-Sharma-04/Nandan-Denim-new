import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const StatementOfInvestorCompaints = () => {

  const statementofinvestor = [
    {
      year: 2024,
      reports: [
        { label: "Statement of Investor Complaints_31.12.2024", file: "Statement-of-Investor-Complaints_31.12.2024.pdf" },
        { label: "Statement of Investor Complaints_30.09.2024", file: "Statement-of-Investor-Complaints_30.09.2024.pdf" },
        { label: "Statement of Investor Complaints_30.06.2024", file: "Statement-of-Investor-Complaints_30.06.2024.pdf" },
        { label: "Statement of Investor Complaints_31.03.2024", file: "Statement-of-Investor-Complaints_31.03.2024.pdf" },
      ],
    },
    {
      year: 2023,
      reports: [
        { label: "Statement of Investor Complaints_31.12.2023", file: "Statement-of-Investor-Complaints_31.12.2023.pdf" },
        { label: "Statement of Investor Complaints_30.09.2023", file: "Statement-of-Investor-Complaints_30.09.2023.pdf" },
        { label: "Statement of Investor Complaints_30.06.2023", file: "Statement-of-Investor-Complaints_30.06.2023.pdf" },
        { label: "Statement of Investor Complaints_31.03.2023", file: "Statement-of-Investor-Complaints_31.03.2023.pdf" },
      ],
    },
    {
      year: 2022,
      reports: [
        { label: "Statement of Investor Complaints – 31.12.2022", file: "Statement-of-Investor-Complaints-31.12.2022.pdf" },
        { label: "Statement of Investor Complaints – 30.09.2022", file: "Statement-of-Investor-Complaints-30.09.2022.pdf" },
        { label: "Statement of Investor Complaints – 30.06.2022", file: "3-Statement-of-Investor-Complaints-30.06.2022.pdf" },
      ],
    },
    {
      year: 2021,
      reports: [
        { label: "Statement of Investor Complaints – 31.03.2022", file: "" },
        { label: "Statement of Investor Complaints – 31.12.2021", file: "" },
        { label: "Statement of Investor Complaints – 30.09.2021", file: "Statement-of-Investor-Complaints-30.09.2021.pdf" },
        { label: "Statement of Investor Complaints – 30.06.2021", file: "Statement-of-Investor-Complaints-30.06.2021.pdf" },
      ],
    },
    {
      year: 2020,
      reports: [
        { label: "Statement of Investors Complaint-31.03.2021", file: "Statement-of-Investor-Complaints-31.03.2021.pdf" },
        { label: "Statement of Investors Complaint-31.12.2020", file: "Statement-of-Investor-Complaints-31.12.2020.pdf" },
        { label: "Statement of Investor Complaints – 30.09.2020", file: "Statement-of-Investor-Complaints-30.09.2020.pdf" },
        { label: "Statement of Investor Complaints – 30.06.2020", file: "Statement-of-Investors-Complaint-30.06.2020.pdf" },
      ],
    },
    {
      year: 2019,
      reports: [
        { label: "Statement of Investors Complaint-31.12.2019", file: "Statement-of-Investors-Complaint-31.12.2019.pdf" },
        { label: "Statement of Investors Complaint-30.09.2019", file: "Statement-of-Investors-Complaint-30.09.2019.pdf" },
        { label: "Statement of Investor Complaints – 31.06.2019", file: "Statement-of-Investor-Complaints.pdf" },
        { label: "Statement of Investor Complaints – 31.03.2019", file: "" },
      ],
    },
    {
      year: 2018,
      reports: [
        { label: "Statement of Investor Complaints – 31.12.2018", file: "Statement-of-Investor-Complaints-31.12.2018.pdf" },
        { label: "Statement of Investor Complaints – 30.09.2018", file: "Investor-Complaints-Sept-2018.pdf" },
        { label: "Statement of Investor Complaints – 31.03.2018", file: "31.03.2018-1.pdf" },
        { label: "Statement of Investor Complaints – 30.06.2018", file: "30.06.2018.pdf" },
      ],
    },
    {
      year: 2017,
      reports: [

        { label: "Statement of Investor Complaints – 31.12.2017", file: "31.12.2017.pdf" },
        { label: "Statement of Investor Complaints – 30.09.2017", file: "30.09.2017-1.pdf" },
        { label: "Statement of Investor Complaints – 30.06.2017", file: "30.06.2017.pdf" },
        { label: "Statement of Investor Complaints – 31.03.2017", file: "31.03.2017-1.pdf" },
      ],
    },
    {
      year: 2016,
      reports: [
        { label: "Statement of Investor Complaints – 31.12.2016", file: "31.12.2016.pdf" },
        { label: "Statement of Investor Complaints – 30.09.2016", file: "30.09.2016-1.pdf" },
        { label: "Statement of Investor Complaints – 30.06.2016", file: "30.06.2016.pdf" },
        { label: "Statement of Investor Complaints – 31.03.2016", file: "31.03.2016.pdf" },

      ],
    },
  ]


  return (
  <>
  <Header/>
    <div>
      {/* Hero Section */}
      <div className="relative  w-full">
        <img
          src="./imgs/investors/investorstatementcomplaints.png"
          alt="Chiripal Group Banner"
          className="object-cover w-full h-full md:h-[70vh] lg:h-[80vh] xl:h-[88vh]"
        />
        <div className="absolute inset-0  flex items-center">
          <div className="px-4 sm:px-8 md:px-16 lg:px-32">
            <h1 className="text-yellow-400 text-3xl sm:text-5xl font-montserrat, sans-serif md:text-7xl font-bold text-left">
              Statement of Investor Complaints
            </h1>
          </div>
        </div>
      </div>

      {/* pdf section  */}
      <div className="py-12 px-4  max-w-7xl mx-auto font-signika">
        {statementofinvestor.map((yearGroup, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-2xl font-extrabold text-[#0b3a6a] uppercase mb-4">
              For the Year {yearGroup.year}
            </h2>
            <ul className="list-disc pl-5 text-[#0b3a6a] font-medium space-y-2">
              {yearGroup.reports.map((report, idx) => (
                <li key={idx}>
                  <a
                    href={`/investor/statementofinvestor/${report.file}`}
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

export default StatementOfInvestorCompaints;
