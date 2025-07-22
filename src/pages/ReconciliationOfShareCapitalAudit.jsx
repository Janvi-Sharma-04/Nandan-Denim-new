import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const ReconciliationOfShareCapitalAudit = () => {


  const sharecapitalaudit = [
    {
      title: "",
      items: [
        { label: "31-December-2024", file: "31-December-2024.pdf" },
        { label: "30-September-2024", file: "30-September-2024.pdf" },
        { label: "30-June-2024", file: "30-June-2024.pdf" },
        { label: "31-March-2024", file: "31-March-2024.pdf" },
        { label: "31-December-2023", file: "31-December-2023.pdf" },
        { label: "30-September-2023", file: "30-September-2023.pdf" },
        { label: "30-June-2023", file: "30-June-2023.pdf" },
        { label: "31-March-2023", file: "Share-Reconciliation-Report-55A_31.03.2023.pdf" },
        { label: "27-January-2023", file: "27-January-2023.pdf" },
        { label: "31-October-2022", file: "31-October-2022.pdf" },
        { label: "27-June-2022", file: "6-Reconciliation-of-share-Capital-Audit-Report-June-2022.pdf" },
        { label: "31-March-2022", file: "31-March-2022-1.pdf" },
        { label: "31-December-2021", file: "30-December-2021.pdf.pdf" },
        { label: "30-September-2021", file: "30-September-2021.pdf" },
        { label: "30-June-2021", file: "30-June-2021.pdf" },
        { label: "31-March-2021", file: "31-March-2021.pdf" },
        { label: "31-December-2020", file: "31-December-2020.pdf" },
        { label: "30-September-2020", file: "30-September-2021.pdf" },
        { label: "31-March-2020", file: "31-March-2020.pdf" },
        { label: "NDLCertificate40(9) 30-09-2020", file: "NDLCertificate409-30-09-2020-1.pdf" },
        { label: "NDLCertificate40(9) 31-03-2020", file: "NDLCertificate409-31-03-2020-1.pdf" },
        { label: "31-December-2019", file: "31-December-2019.pdf" },
        { label: "30-September-2019", file: "Reconciliation-of-Share-Capital-audit-30.09.2019.pdf" },
        { label: "30-June-2019", file: "Agenda-No.-6-30-6-2019.pdf" },
        { label: "31-March-2019", file: "31-March-2019.pdf" },
        { label: "31-December-2018", file: "31-December-2018.pdf" },
        { label: "30-September-2018", file: "ROSCAR-30-9-2018.pdf" },
        { label: "31-March-2016", file: "31-March-2016.pdf" },
        { label: "30-June-2016", file: "30-June-2016.pdf" },
        { label: "30-September-2016", file: "30-September-2016.pdf" },
        { label: "31-December-2016", file: "31-December-2016.pdf" },
        { label: "30-June-2017", file: "30-June-2017.pdf" },
        { label: "30-September-2017", file: "30-September-2017.pdf" },
        { label: "31-December-2017", file: "31-December-2017.pdf" },
        { label: "31-March-2018", file: "31-March-2018.pdf" },
        { label: "30-June-2018", file: "30th-June-2018.pdf" },
      ]
    }
  ]


  return (
   <>
   <Header/>
    <div>
      {/* Hero Section */}
      <div className="relative  w-full">
        <img
          src="./imgs/investors/investorsharecapitalaudit.jpg"
          alt="Chiripal Group Banner"
          className="object-cover w-full h-full md:h-[70vh] lg:h-[80vh] xl:h-[88vh]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
          <div className="px-4 sm:px-8 md:px-16 lg:px-32">
            <h1 className="text-yellow-400 text-3xl sm:text-5xl md:text-7xl font-montserrat, sans-serif  font-bold text-left">
              Reconciliation of Share Capital Audit
            </h1>
          </div>
        </div>
      </div>


      {/* pdf sections */}
      <div className="py-12 px-4  font-signika max-w-7xl mx-auto ">
        {sharecapitalaudit.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-xl font-extrabold text-[#0b3a6a] mb-4">{section.title}</h2>
            <ul className="list-disc pl-6 space-y-2 text-[#0b3a6a]">
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`/investor/ReconciliationOfShareCapitalAudit/${item.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            {index < sharecapitalaudit.length - 1 && (
              <hr className="mt-6 border-gray-300" />
            )}
          </div>
        ))}
      </div>

    </div>
      <Footer/>
   </>
  )
};

export default ReconciliationOfShareCapitalAudit;
