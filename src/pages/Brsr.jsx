import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

function Brsr() {

  const brsrSection = [
    {
      title: "",
      item: [
        { path: "BRSR Report_2023-24", label: "BRSR-report_2023-24.pdf" },
        { path: "BRSR Report_2022-23", label: "BRSR-Report_2022-23.pdf" },
      ]
    },
  ];
  return (
   <>
   
   <Header/>
    <div>
      {/* Hero Section */}
      <div className="relative w-full">
        <img
          src="./imgs/investors/investorbrsr.png"
          alt="Chiripal Group Banner"
          className="object-cover w-full h-full md:h-[70vh] lg:h-[80vh] xl:h-[88vh]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
          <div className="px-4 sm:px-8 md:px-16 lg:px-32">
            <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-bold font-montserrat, sans-serif text-left">
              BRSR
            </h1>
          </div>
        </div>
      </div>


      {/* pdf sections */}
      <div className="py-12 px-4 sm:px-8 md:px-16 lg:px-24 text-justify font-signika max-w-7xl mx-auto">
        {brsrSection.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-xl font-extrabold text-[#0b3a6a] mb-4">{section.title}</h2>
            <ul className="list-disc pl-6 space-y-2 text-[#0b3a6a]">
              {section.item.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`/investor/brsr/${item.label}`} // Assuming 'label' is the file name
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {item.path}
                  </a>
                </li>
              ))}
            </ul>
            {index < brsrSection.length - 1 && (
              <hr className="mt-6 border-gray-300" />
            )}
          </div>
        ))}

      </div>
    </div>

      <Footer/>
   </>
  )
}

export default Brsr;
