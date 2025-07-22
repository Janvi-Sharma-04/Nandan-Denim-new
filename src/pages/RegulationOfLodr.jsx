import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const RegulationOfLodr = () => {


  const regulationsection = [
    {
      title: "",
      items: [
        { label: "Compliance Certificate u.r. 7(3)_31.03.2024", file: "Compliance-Certificate-u.r.-73_31.03.2024.pdf" },
        { label: "Compliance Certificate u.r. 7(3)_31.03.2023", file: "Compliance-Certificate-u.r.-73_31.03.2023.pdf" },
        { label: "Certificate Regulation 7 of LODR 31.03.2022", file: "Certificate-Regulation-7-of-LODR-31.03.2022.pdf" },
        { label: "Certificate – Reg 7(3)_30-09-2020", file: "Certificate-Reg-73_30-09-2020.pdf" },
        { label: "Certificate – Reg 7(3)_31-03-2020", file: "Certificate-Reg-73_31-03-2020.pdf" },
        { label: "Certificate-under-Regulation-73-30.09.2019", file: "Certificate-under-Regulation-73-30.09.2019.pdf" },
        { label: "Certificate under Regulation 7(3) – 31.03.2019", file: "Certificate-under-Regulation-73-31.03.2019.pdf" },
        { label: "Certificate under Regulation 7(3) -31.03.2018", file: "Certificate-Reg.-73_31.03.2018.pdf" },
        { label: "Certificate under Regulation 7(3) -30.09.2017", file: "Certificate-Reg.-73_30.09.2017.pdf" },

      ]
    },
  ];

  return (
    <>
      <Header />
      <div>
        {/* Hero Section */}
        <div className="relative  w-full">
          <img
            src="./imgs/investors/investorregulation7oflodr.png"
            alt="Chiripal Group Banner"
            className="object-cover w-full h-full md:h-[70vh] lg:h-[80vh] xl:h-[88vh]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
            <div className="px-4 sm:px-8 md:px-16 lg:px-32">
              <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-montserrat, sans-serif font-bold text-left">
                Regulation 7 of LODR
              </h1>
            </div>
          </div>
        </div>


        {/* pdf sections */}
        <div className="py-12 px-4  font-signika max-w-7xl mx-auto">
          {regulationsection.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-xl font-extrabold text-[#0b3a6a] mb-4">{section.title}</h2>
              <ul className="list-disc pl-6 space-y-2 text-[#0b3a6a]">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={`/investor/regulation7oflodr/${item.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              {index < regulationsection.length - 1 && (
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

export default RegulationOfLodr;
