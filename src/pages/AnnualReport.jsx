import { FaDownload } from "react-icons/fa";
import Header from "../component/Header";
import Footer from "../component/Footer";

const AnnualReport = () => {

  const reports = [
    { label: "Annual Return 2023-24", file: "Annual-Return-2023-24.pdf" },
    { label: "Annual Report 2023-24", file: "Annual-Report-2023-24.pdf" },
    { label: "Annual Return 2022-23", file: "Annual-Return-2022-23.pdf" },
    { label: "Annual Report 2022-23", file: "Annual-Report-2022-23.pdf" },
    { label: "Annual Return 2021-22", file: "annual-return-form-mgt-7-2021-22.pdf" },
    { label: "Annual Return 2020-21", file: "Annual-Return-2020-21.pdf" },
    { label: "Annual Return 2019-20", file: "Annual-Return-2019-20.pdf" },
    { label: "For Year 2020-21", file: "For Year 2020-21.pdf" },
    { label: "For Year 2019-20", file: "For Year 2019-20.pdf" },
    { label: "For Year 2021-22", file: "Nandan-Annual-Report-2021-22.pdf" },
    { label: "Postal Ballot Notice ", file: "NDL-Postal-Ballot-Notice.pdf" },
  ];


  return (
    <>
      <Header />
      <div>
        {/* Hero Section */}
        <div className="relative  w-full">
          <img
            src="./imgs/investors/investorannual.png"
            alt="Chiripal Group Banner"
            className="object-cover w-full h-full md:h-[70vh] lg:h-[80vh] xl:h-[88vh]"
          />
          <div className="absolute  inset-0 bg-black bg-opacity-30 flex items-center">
            <div className="px-4 sm:px-8 md:px-24 lg:px-32">
              <h1 className="  text-yellow-400 text-3xl sm:text-5xl md:text-7xl font-bold font-montserrat  ">
                Annual Reports
              </h1>
            </div>
          </div>
        </div>


        {/* pdfs  section  */}
        <div className="py-12 px-4 sm:px-8 md:px-16 lg:px-24 font-signika max-w-8xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reports.map((report, index) => (
              <div key={index} className="text-center">
                <h3 className="font-semibold text-lg text-[#0b3a6a] mb-2">
                  {report.label}
                </h3>
                <a
                  href={`/investor/annualreport/${report.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0b3a6a] font-semibold flex items-center justify-center gap-2 hover:text-blue-800"
                >
                  Download <FaDownload />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
        <Footer/>
    </>
  )
};

export default AnnualReport;
