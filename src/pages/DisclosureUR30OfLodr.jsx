import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const DisclosureUR30OfLord = () => {
  const disclosureItems = [
    { label: "Proceeding of 30th AGM", file: "Proceeding-of-30th-AGM.pdf" },
    { label: "Record date Intimation", file: "Record-date-Intimation.pdf" },
    { label: "Amendments to MOA", file: "Amendments-to-MOA.pdf" },
    { label: "Outcome of BM 17.06.2024", file: "Outcome-of-BM-17.06.2024.pdf" },
  ];

  return (
    <>
      <Header />
      <div>
        {/* Hero Section */}
        <div className="relative bg-[#193267]  p-32 w-full">
          <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-bold text-left">
            Disclosure U.R. 30 of LODR
          </h1>
        </div>

        {/* PDF List Section */}
        <div className="py-12 px-4  font-signika max-w-7xl mx-auto">
          <ul className="list-disc pl-6 space-y-4 text-[#0b3a6a]">
            {disclosureItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`/investor/discloserur30oflodr/${item.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
        <Footer/>
    </>
  );
};

export default DisclosureUR30OfLord;
