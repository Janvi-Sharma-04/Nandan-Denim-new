import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const PoliciesCodes = () => {

  const policySections = [
    {
      title: "Company Policies",
      items: [
        { label: "Authority for Determination & Disclosure of Material Events", file: "Authority-for-Determination-Disclosure-of-Material-Events.pdf" },
        { label: "Familiarization Programme", file: "Familiarization-Programme.pdf" },
        { label: "Sexual Harassment Policy", file: "Sexual-Harassment-Policy.pdf" },
        { label: "Related Party Transaction Policy", file: "Related-Party-Transaction-Policy.pdf" },
        { label: "Risk Management Policy", file: "Risk-Management-Policy.pdf" },
        { label: "Whistle Blower Policy", file: "Whistle-Blower-Policy.pdf" },
        { label: "Code of Conduct for Prevention of Insider Trading", file: "Code of Conduct for Prevention of Insider Trading.pdf" },
        { label: "NDL COVID-19 Business Update", file: "NDL-COVID19-business-update.pdf" },
        { label: "Code of Practices and Procedures for UPSI 2019", file: "Code-of-Practices-and-Procedures-for-fair-disclosure-of-Unpublished-Price-Sensitive-Information-2019-1.pdf" },
        { label: "Terms & conditions of Appointment of Independent Directors", file: "Terms-conditions-of-Appointment-of-Independent-Directors.pdf" },
        { label: "Policy on Material Subsidiary", file: "Policy-on-Material-Subsidiary.pdf" },
        { label: "Corporate Social Responsibility Policy", file: "Corporate-Social-Responsibility-Policy (1).pdf" },
        { label: "Policy Materiality of Event", file: "Policy-on-Material-Subsidiary.pdf" },
        { label: "Dividend Distribution Policy", file: "Dividend-Distribution-Policy.pdf" },
        { label: "Archival Policy", file: "Archival-policy.pdf" },
        { label: "Nomination & Remuneration Policy", file: "Nomination-Remuneration-Policy.pdf" },
        { label: "Code of Conduct and Ethics NDL", file: "Code-of-Conduct-and-Ethics_NDL.pdf" },
      ]
    },
    {
      title: "ESG Policies",
      items: [
        { label: "Grievance Redressal Policy for Employees", file: "Grievance-Redressal-Policy-for-Employees.pdf" },
        { label: "Equal Opportunity Policy", file: "Equal-Opportunity-policy.pdf" },
        { label: "Business Responsibility Policy", file: "Business-Responsibility-Policy.pdf" },
        { label: "Anti Bribery Policy", file: "Anti-Bribery-Policy.pdf" },
        { label: "Waste Management Policy", file: "Waste-Management-Policy.pdf" },
        { label: "IT Security Policy", file: "IT-Security-Policy.pdf" },
        { label: "Human Rights Policy", file: "Human-Rights-Policy.pdf" },
        { label: "Grievance Redressal Policy for Investors", file: "Grievance-Redressal-Policy-for-Investors.pdf.pdf" },
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
            src="./imgs/investors/investorpolicescodes.png"
            alt="Chiripal Group Banner"
            className="object-cover w-full h-full md:h-[70vh] lg:h-[80vh] xl:h-[88vh]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
            <div className="px-4 sm:px-8 md:px-16 lg:px-32">
              <h1 className="text-yellow-400 text-3xl sm:text-5xl md:text-7xl font-montserrat, sans-serif font-bold text-left">
                Policies & Codes
              </h1>
            </div>
          </div>
        </div>

        {/* pdf sections */}
        <div className="py-12 px-4 font-signika max-w-7xl mx-auto">
          {policySections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-xl font-extrabold text-[#0b3a6a] mb-4">{section.title}</h2>
              <ul className="list-disc pl-6 space-y-2 text-[#0b3a6a]">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={`/investor/policescode/${item.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              {index < policySections.length - 1 && (
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

export default PoliciesCodes;
