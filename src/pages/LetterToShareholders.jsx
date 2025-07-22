import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const LetterToShareholders = () => {


  const lettertoshareholders = [
    {
      title: "",
      items: [
        { label: "IEPF trf. Notice to Shareholders with list 2025", file: "IEPF trf. Notice to Shareholders with list 2025.pdf" },
        { label: "SEBI circular- Non-submission of ‘Choice of Nomination’", file: "SEBI-circular-Non-submission-of-Choice-of-Nomination.pdf" },
        { label: "IEPF trf. Notice to Shareholders with list 2024", file: "IEPF-trf.-Notice-to-Shareholders-with-list-2024.pdf" },
        { label: "KYC Reminder", file: "KYC-Reminder.pdf" },
        { label: "Simplification of Procedure and Standardization of Formats of Documents_Transmission", file: "Simplification-of-procedure-and-standardization-of-formats-of-documents_Transmission-.._.pdf" },
        { label: "Notice to Shareholders Tr Sh to IEPF 2023", file: "Notice-to-Shareholders_Tr-SH-to-IEPF-2023.pdf" },
        { label: "Intimation to Shareholders -Arbitration", file: "Intimation-to-Shareholders-Arbitration.pdf" },
        { label: "Form ISR-1 revised1", file: "Form-ISR-1-revised1.pdf" },
        { label: "Form ISR-2_p", file: "Form-ISR-2_p.pdf" },
        { label: "Form ISR-3_p", file: "Form-ISR-3_p.pdf" },
        { label: "Form SH-13 revised", file: "Form-SH-13-revised.pdf" },
        { label: "Form No. SH-14_p", file: "Form-No.-SH-14_p.pdf" },
        { label: "ISR4", file: "ISR4.pdf" },
      ]
    }
  ]


  return (
    <>
      <Header />
      <div>
        {/* Hero Section */}
        <div className="relative w-full">
          <img
            src="./imgs/investors/investorletterofshareholders.png"
            alt="Chiripal Group Banner"
            className="object-cover w-full h-full md:h-[70vh] lg:h-[80vh] xl:h-[88vh]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
            <div className="px-4 sm:px-8 md:px-16 lg:px-32">
              <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-montserrat, sans-serif font-bold text-left">
                Letter to Shareholders
              </h1>
            </div>
          </div>
        </div>

        {/* pdf sections */}
        <div className="py-12 px-4  font-signika max-w-7xl mx-auto">
          {lettertoshareholders.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-xl font-extrabold text-[#0b3a6a] mb-4">{section.title}</h2>
              <ul className="list-disc pl-6 space-y-2 text-[#0b3a6a]">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={`/investor/lettertoshareholders/${item.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              {index < lettertoshareholders.length - 1 && (
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

export default LetterToShareholders;
