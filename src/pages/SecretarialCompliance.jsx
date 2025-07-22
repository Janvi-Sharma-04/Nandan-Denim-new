import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const SecretarialCompliance = () => {


  const SecretarialCompliance = [
    {
      title: "",
      items: [
        { label: "Secretarial Compliance Report 2025", file: "Secretarial Compliance Report 2025.pdf" },
        { label: "Secretarial Compliance Report 2024", file: "Secretarial-Compliance-Report-2024.pdf" },
        { label: "Secretarial Compliance Report 2023", file: "Secretarial-Compliance-Report-2023.pdf" },
        { label: "Secretarial Compliance Report 2022", file: "Secretarial-Compliance-Report-2022.pdf" },
        { label: "Secretarial Compliance Report 2021", file: "Secretarial-Compliance-Report-2021.pdf" },
        { label: "Secretarial Compliance Report 2020", file: "Secretarial-Compliance-Report-2020.pdf" },
      ]
    }
  ]


  return (
    <>
      <Header />
      <div>
        {/* Hero Section */}
        <div className="relative  w-full">
          <img
            src="./imgs/investors/investorsecretarialcompliancereport.png"
            alt="Chiripal Group Banner"
            className="object-cover w-full h-full md:h-[70vh] lg:h-[80vh] xl:h-[88vh]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
            <div className="px-4 sm:px-8 md:px-16 lg:px-32">
              <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-montserrat, sans-serif font-bold text-left">
                Secretarial Compliance Report
              </h1>
            </div>
          </div>
        </div>



        {/* pdf sections */}
        <div className="py-12 px-4  font-signika max-w-7xl mx-auto">
          {SecretarialCompliance.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-xl font-extrabold text-[#0b3a6a] mb-4">{section.title}</h2>
              <ul className="list-disc pl-6 space-y-2 text-[#0b3a6a]">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={`/investor/SecretarialCompliance/${item.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              {index < SecretarialCompliance.length - 1 && (
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

export default SecretarialCompliance;
