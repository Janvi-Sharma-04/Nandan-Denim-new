import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const NoticeOtherIntimation = () => {

  const noticeotherintimation = [
    {
      title: "Notices",
      folder: "notices",
      items: [

        { label: "Notice - 31-03-2025", file: "Notice - 31-03-2025.pdf" },
        { label: "Notice – 31.12.2024", file: "Notice-31.12.2024.pdf" },
        { label: "Notice – 30-09-2024", file: "Notice-30-09-2024.pdf" },
        { label: "Notice of 30th AGM", file: "Notice-of-30th-AGM.pdf" },
        { label: "Notice – 30-06-2024", file: "Notice-30-06-2024.pdf" },
        { label: "Notice of BM dated 17.06.2024", file: "Notice-of-BM-dated-17.06.2024.pdf" },
        { label: "Notice – 31-03-2024", file: "Notice-31-03-2024.pdf" },
        { label: "Notice – 31-12-2023", file: "Notice-31-12-2023.pdf" },
        { label: "Notice – 30-09-2023", file: "Notice-30-09-2023.pdf" },
        { label: "Notice of 29th AGM", file: "Notice-of-29th-AGM.pdf" },
        { label: "Notice – 30-06-2023", file: "30-6-2023.pdf" },
        { label: "Intimation of Credit Rating_28.06.2023", file: "Intimation-of-Credit-rating_28.06.2023.pdf" },
        { label: "Notice – 31-03-2023", file: "Notice-31.03.2023.pdf" },
        { label: "Notice – 31-12-2022", file: "Notice-31-12-2022.pdf" },
        { label: "Notice – 30.09.2022", file: "Notice-30.09.2022.pdf" },
        { label: "Notice of 28th AGM", file: "Notice-of-28th-AGM.pdf" },
        { label: "Notice – 30-06-2022", file: "2-Notice-30-06-2022.pdf" },
        { label: "Notice – 31-03-2022", file: "2-Notice-31-03-2022.pdf" },
        { label: "Notice – 31-12-2021", file: "Notice-31-12-2021.pdf" },
        { label: "Notice – 30-09-2021", file: "" },
        { label: "Notice – 30-06-2021", file: "" },
        { label: "Notice – 31-03-2021", file: "" },
        { label: "Notice – 31-12-2020", file: "31-12-2020.pdf" },
        { label: "Notice – 30-09-2020", file: "30-09-2020.pdf" },
        { label: "Notice – 30-06-2020", file: "30-06-2020.pdf" },
        { label: "31-03-2020_Final intimation", file: "31-03-2020_Final-intimation.pdf" },
        { label: "31-03-2020_Cancellation", file: "31-03-2020_Cancellation.pdf" },
        { label: "31-03-2020_First Intimation", file: "31-03-2020_First-Intimation.pdf" },
        { label: "Notice – 12-02-2020", file: "" },
        { label: "Notice – 13-11-2019", file: "Notice-13.11.2019.pdf" },
        { label: "Notice – 12-08-2019", file: "12-8-2019.pdf" },
        { label: "Notice – 25-05-2019", file: "" },
        { label: "Notice – 08-02-2019", file: "Notice-08-02-2019.pdf" },
        { label: "Notice – 03-11-2018", file: "" },
        { label: "Notice – 13-08-2018", file: "" },
        { label: "Notice – 26-05-2018", file: "26.05.2018.pdf" },
        { label: "Notice – 13-02-2018", file: "13.02.2018.pdf" },
        { label: "Notice – 11-12-2017", file: "11.12.2017.pdf" },
        { label: "Notice – 14-08-2017", file: "14.08.2017.pdf" },
        { label: "Notice – 29-05-2017", file: "29.05.2017.pdf" },
        { label: "Notice – 09-02-2017", file: "9.02.2017.pdf" },
        { label: "Notice – 14-11-2016", file: "14.11.2016.pdf" },
        { label: "Notice – 10-08-2016", file: "10.08.2016.pdf" },
        { label: "Notice – 10-08-2016 – Addendum", file: "10.08.2016_Addendum.pdf" },
      ]
    },
    {
      title: "Other Intimations",
      folder: "other-intimations",
      items: [

        { label: "Intimation of Credit Ratings_15.01.2025", file: "Intimation-of-Credit-Ratings_15.01.2025.pdf" },
        { label: "Withdrawal of Credit Rating_08.02.2024", file: "Withdrawal-of-Credit-Rating_08.02.2024.pdf" },
        { label: "Intimation of Credit Ratings_11.12.2023", file: "Intimation-of-Credit-Ratings_11.12.2023.pdf" },
        { label: "Revised Credit Rating – 29.08.2023", file: "Revised-Credit-Rating_29082023.pdf" },
        { label: "Intimation of Change in Credit Rating", file: "intimation-of-Change-in-Credit-Rating.pdf" },
        { label: "Intimation of Loss of Share Certificate – 02.03.2023", file: "Intimation-of-Loss-of-Share-Certificate_02.03.2023.pdf" },
        { label: "Revision in Credit Ratings – 05.06.2019", file: "Credit-Rating-05.06.2019.pdf" },
        { label: "Intimation of Con Call Meeting with Investors – 28.05.2019", file: "Intimation-of-Loss-of-Share-Certificate_02.03.2023.pdf" },
        { label: "Intimation of Con Call Meeting with Investors – 12.02.2019", file: "" },
        { label: "Intimation of Con Call Meeting with Investors – 06.11.2018", file: "" },
        { label: "Intimation of Con Call Meeting with Investors – 16.08.2018", file: "" },
        { label: "Intimation of Con Call Meeting with Investors – 29.05.2018", file: "" },
        { label: "Intimation of Con Call Meeting with Investors – 16.03.2018", file: "Intimation-of-Con-call-meeting-with-Investors_16.03.2018.pdf" },
        { label: "Intimation of Con Call Meeting with Investors – 08.03.2018", file: "Intimation-of-Con-call-meeting-with-Investors_08.03.2018.pdf" },
        { label: "Intimation of Con Call Meeting with Investors – 15.02.2018", file: "Intimation-of-Con-call-meeting-with-Investors_15.02.2018.pdf" },
        { label: "Intimation of Con Call Meeting with Investors – 09.01.2018", file: "Intimation-of-Con-call-meeting-with-Investors_09.01.2018.pdf" },
        { label: "Intimation of Revision in Credit Rating by Brickwork India Ratings Private Limited", file: "Intimation-of-Revision-in-Credit-Rating-by-Brickwork-India-Ratings-Private-Limited.pdf" },
      ]
    }
  ];



  return (
    <>
      <Header />
      <div>
        {/* Hero Section */}
        <div className="relative  w-full">
          <img
            src="./imgs/investors/investornoticeintimation.png"
            alt="Chiripal Group Banner"
            className="object-cover w-full h-full md:h-[70vh] lg:h-[80vh] xl:h-[88vh]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
            <div className="px-4 sm:px-8 md:px-16 lg:px-32">
              <h1 className="text-yellow-400 text-3xl sm:text-5xl md:text-7xl font-montserrat, sans-serif font-bold text-left">
                Notice & Other Intimations
              </h1>
            </div>
          </div>
        </div>


        {/* PDF sections */}
        <div className="py-12 px-4  font-signika max-w-7xl mx-auto">
          {noticeotherintimation.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-xl font-extrabold text-[#0b3a6a] mb-4">{section.title}</h2>
              <ul className="list-disc pl-6 space-y-2 text-[#0b3a6a]">
                {section.items.map((item, idx) => (
                  item.file && (
                    <li key={idx}>
                      <a
                        href={`/investor/noticeotherintimation/${section.folder}/${item.file}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {item.label}
                      </a>
                    </li>
                  )
                ))}
              </ul>
              {index < noticeotherintimation.length - 1 && (
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

export default NoticeOtherIntimation;
