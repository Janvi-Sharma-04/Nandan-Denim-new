import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const NewspaperPublication = () => {

  const newspaperpublicationsection = [
    {
      title: "Newspaper Publication of Notices",
      items: [
        { label: "Pre – Dispatch 30th AGM", file: "Pre-dispatch-30th-AGM.pdf" },
        { label: "Post – Dispatch 30th AGM", file: "Post-Dispatch-30th-AGM.pdf" },
        { label: "Pre – Dispatch 28th AGM", file: "Newspaper-Advertisement-Pre-Dispatch.pdf" },
        { label: "Post – Dispatch 28th AGM", file: "Newspaper-Advertisement-Post-Dispatch.pdf" },
        { label: "Notice – 05.03.2022", file: "5-March-2022.pdf" },
        { label: "Notice – 05.12.2021", file: "5-December-2021.pdf" },
        { label: "Notice – 05.09.2021", file: "5-September-2021.pdf" },
        { label: "Notice – 05.06.2021", file: "5-June-2021.pdf" },
        { label: "Notice – 01.03.2021", file: "March-2021-notice.pdf" },
        { label: "Notice – 12.09.2020", file: "September-2020-notice.pdf" },
        { label: "Notice – 12.06.2020", file: "June-2020-notice.pdf" },
        { label: "Notice – 12.03.2020", file: "march-2020-notice.pdf" },
        { label: "Notice – 12.02.2020", file: "Notice-12.02.2020.pdf" },
        { label: "Notice – 13.11.2019", file: "Notice-13.11.2019.pdf" },
        { label: "Notice – 12.08.2019", file: "Notice-12.08.2019.pdf" },
        { label: "Notice – 25.05.2019", file: "BM-25.05.2019.pdf" },
        { label: "Notice – 08.02.2019", file: "Notice-08.02.2019-compressed.pdf" },
        { label: "Notice – 03.11.2018", file: "Newspaper-Notice-Nov-BM.pdf" },
        { label: "Notice – 13.08.2018", file: "13.08.2018.pdf" },
        { label: "Notice – 26.05.2018", file: "BM-26.05.2018.pdf" },
        { label: "Notice – 13-02-2018", file: "Newspaper-Notice-Nov-BM (1).pdf" },
        { label: "Notice – 11-12-2017", file: "11.12.2017.pdf" },
        { label: "Notice – 14-08-2017", file: "14.08.2017.pdf" },
        { label: "Notice – 29-05-2017", file: "29.05.2017.pdf" },
        { label: "Notice – 09-02-2017", file: "9.02.2017.pdf" },
      ]
    },
  ];



  return (
  <>
  <Header/>
    <div>
      {/* Hero Section */}
      <div className="relative  w-full">
        <img
          src="./imgs/investors/investornewspaperpublicationofnotice.png"
          alt="Chiripal Group Banner"
          className="object-cover w-full h-full md:h-[70vh] lg:h-[80vh] xl:h-[88vh]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
          <div className="px-4 sm:px-8 md:px-16 lg:px-32">
            <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-montserrat, sans-serif font-bold text-left">
              Newspaper Publication of Notices
            </h1>
          </div>
        </div>
      </div>



      {/* pdf sections */}
      <div className="py-12 px-4  font-signika max-w-7xl mx-auto">
        {newspaperpublicationsection.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-xl font-extrabold text-[#0b3a6a] mb-4">{section.title}</h2>
            <ul className="list-disc pl-6 space-y-2 text-[#0b3a6a]">
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`/investor/newspaperpublication/${item.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            {index < newspaperpublicationsection.length - 1 && (
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

export default NewspaperPublication;
