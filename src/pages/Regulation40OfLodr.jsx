import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Regulation40OfLodr = () => {

  const regulationsection = [
    {
      title: "",
      items: [
        { label: " Certificate Under Regulation 40(9)_31.03.2024", file: "Certificate-under-Regulation-409_31.03.2024.pdf" },
        { label: "Certificate Under Regulation 40(9)_31.03.2023", file: "Certificate-under-Regulation-409_31.03.2023.pdf" },
        { label: "Certificate Under Regulation 40(9) – 31.03.2022", file: "" },
        { label: "NDLCertificate40(9) 31-03-2021", file: "NDL-Certificate-regulation-409.pdf" },
        { label: "NDLCertificate40(9) 30-09-2020", file: "NDLCertificate409-30-09-2020.pdf" },
        { label: "NDLCertificate40(9) 31-03-2020", file: "NDLCertificate409-31-03-2020.pdf" },
        { label: "Certificate Under Regulation 40(9) – 30.09.2019", file: "Certificate-Under-Regulation-409-30.09.2019.pdf" },
        { label: "Certificate Under Regulation40 (9) – 31-03-2019", file: "" },
        { label: "Certificate Under Regulation 40(9) – 30.09.2018", file: "" },
        { label: "Certificate Under Regulation40 (9) – 31-03-2018", file: "31.03.2018.pdf" },
        { label: "Certificate Under Regulation40 (9) – 30-09-2017", file: "30.09.2017.pdf" },
        { label: "Certificate Under Regulation40 (9) – 31-03-2017", file: "31.03.2017.pdf" },
        { label: "Certificate Under Regulation40 (9) – 30-09-2016", file: "30.09.2016.pdf" },

      ]
    },

  ];

  return (
    <>
      <Header />
      <div>
        {/* Hero Section */}
        <div className="relative w-full">
          <img
            src="./imgs/investors/investorregulations40oflodr.png"
            alt="Chiripal Group Banner"
            className="object-cover w-full h-full md:h-[70vh] lg:h-[80vh] xl:h-[88vh]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
            <div className="px-4 sm:px-8 md:px-16 lg:px-32">
              <h1 className="text-yellow-400 text-3xl sm:text-5xl md:text-7xl font-montserrat, sans-serif font-bold text-left">
                Regulation 40 of LODR
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
                      href={`/investor/regulation40oflodr/${item.file}`}
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

export default Regulation40OfLodr;
