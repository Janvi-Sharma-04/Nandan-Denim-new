import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const DisclosureOfPartyTransaction = () => {

  const disclosurepartysection = [
    {
      title: "",
      items: [
        { label: "Disclosure of Related Party Transaction - 31.03.2025", file: "Disclosure of Related Party Transaction - 31.03.2025.pdf" },
        { label: "Disclosure of Related Party Transaction – 30.09.2024", file: "Disclosure-of-Related-Party-Transaction-30.09.2024.pdf" },
        { label: "Disclosure of Related Party Transaction – 31.03.2024", file: "Disclosure-of-Related-Party-Transaction-31.03.2024.pdf" },
        { label: "Disclosure of Related Party Transaction – 30.09.2023", file: "Disclosure-of-Related-Party-Transaction-30.09.2023.pdf" },
        { label: "Disclosure of Related Party Transaction – 31.03.2023", file: "Disclosure-of-Related-Party-Transaction-31.03.2023.pdf" },
        { label: "Disclosure of Related Party Transaction – 30.09.2022", file: "Disclosure-of-Related-Party-Transaction-30.09.2022.pdf" },
        { label: "Disclosure of Related Party Transaction – 31.03.2022", file: "1-Disclosure-of-Related-Party-Transaction-31.03.2022.pdf" },
        { label: "Disclosure of Related Party Transaction – 30.09.2021", file: "Disclosure-of-Related-Party-Tranasction-30.09.2021.pdf" },
        { label: "Disclosure of Related Party Transaction – 31.03.2021", file: "Disclosure-of-Related-Party-Transaction-31.03.2021.pdf" },
        { label: "Disclosure of Related Party Transaction – 30.09.2020", file: "Disclosure-Of-Related-Party-Transactions-30.03.2020.pdf" },
        { label: "Disclosure of Related Party Transaction – 31.03.2020", file: "Disclosure-Of-Related-Party-Transactions-30.03.2020.pdf" },
        { label: "Related-Party-Transaction- 30.09.2019", file: "Related-Party-Transactions-30.09.2019.pdf" },
        { label: "Disclosure of Related Party Transaction – 31.03.2019", file: "Statement-of-RPT-31.03.2019.pdf" },


      ]
    },

  ];

  return (
    <>
      <Header />
      <div>
        {/* Hero Section */}
        <div className="relative bg-[#193267]  p-28 px-32 w-full">
          <h1 className="text-white text-3xl sm:text-5xl md:text-7xl  font-montserrat, sans-serif  font-bold text-left">
            Disclosure of Related Party Transaction
          </h1>
        </div>

        {/* pdf sections */}
        <div className="py-12 px-4  font-signika max-w-7xl mx-auto">
          {disclosurepartysection.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-xl font-extrabold text-[#0b3a6a] mb-4">{section.title}</h2>
              <ul className="list-disc pl-6 space-y-2 text-[#0b3a6a]">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={`/investor/disclosurepartytransaction/${item.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              {index < disclosurepartysection.length - 1 && (
                <hr className="mt-6 border-gray-300" />
              )}
            </div>
          ))}
        </div>



      </div>
      <Footer />
    </>

  )
};

export default DisclosureOfPartyTransaction;
