import React, { useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const InvestorShareholderServices = () => {
  const [activeTab, setActiveTab] = useState("contacts");

  return (
    <>
      <Header />
      <div>
        {/* Hero Section */}
        <div className="relative w-full">
          <img
            src="./imgs/investors/investorshareholderservices.png"
            alt="Chiripal Group Banner"
            className="object-cover w-full h-full md:h-[70vh] lg:h-[80vh] xl:h-[88vh]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
            <div className="px-4 sm:px-8 md:px-16 lg:px-32">
              <h1 className="text-yellow-400 text-3xl sm:text-5xl md:text-7xl font-montserrat, sans-serif font-bold text-left">
                Investor/Shareholder Services
              </h1>
            </div>
          </div>
        </div>

        {/* Tabs Section name  */}
        <div className="max-w-7xl mx-auto mt-12 mb-10 flex bg-gray-100 rounded-md overflow-hidden shadow font-signika">
          {/* Sidebar Tabs */}
          <div className="w-56 bg-[#eaeaea] flex flex-col">
            <button
              onClick={() => setActiveTab("contacts")}
              className={`text-left py-6 px-5 text-base font-semibold border-b ${activeTab === "contacts" ? "bg-gray-100 text-black" : "text-gray-700"
                }`}
            >
              INVESTOR <br /> CONTACTS
            </button>
            <button
              onClick={() => setActiveTab("odr")}
              className={`text-left py-6 px-5 text-base font-semibold ${activeTab === "odr" ? "bg-gray-100 text-black" : "text-gray-700"
                }`}
            >
              <span className="block">ODR</span>
              <span className="block">PORTAL</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="flex-1 p-8 bg-gray-100  text-gray-800 text-sm leading-relaxed">
            {/* Investor Contacts Tab */}
            {activeTab === "contacts" && (
              <div>
                <ul className="list-disc ml-5 text-blue-900">
                  <li>
                    <a
                      href="/investor/shareholderservices/Investor-Contact.pdf"
                      className="hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Investor Contact Details (PDF)
                    </a>
                  </li>
                </ul>
              </div>
            )}

            {/* ODR Portal Tab */}
            {activeTab === "odr" && (
              <div>
                <p className="font-medium">
                  <strong>1.</strong> SEBI vide circular no.{" "}

                  SEBI/HO/OIAE/OIAE_IAD-1/P/CIR/2023/145 on July 31, 2023
                  {" "}
                  has established a common Online Dispute Resolution Portal
                  (“ODR Portal”) which harnesses online conciliation and online
                  arbitration for resolution of disputes arising in the Indian
                  Securities Market. Please refer below mentioned SEBI circulars’
                  link, which has been given for shareholders’ information and
                  reference.
                </p>

                <ul className="list-disc ml-5 mt-4  text-blue-900">
                  <li>
                    <a
                      href="/investor/shareholderservices/SEBI-Circular-dated-July-31-2023.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      SEBI Circular dated July 31, 2023 on Online Resolution of
                      disputes in Securities Market (ODR)
                    </a>
                  </li>
                  <li>
                    <a
                      href="/investor/shareholderservices/SEBI-Circular-dated-August-04-2023.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      SEBI Circular dated August 04, 2023 on Corrigendum cum
                      Amendment to SEBI Circular dated July 31, 2023
                    </a>
                  </li>
                  <li>
                    <a
                      href="/investor/shareholderservices/SEBI-Circular-dated-September-20-2023.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      SEBI Circular dated September 20, 2023 on Redressal of
                      investor grievances through the SEBI Complaint Redressal
                      (SCORES)
                    </a>
                  </li>
                </ul>

                <p className="mt-4 font-medium">
                  <strong>2.</strong>
                  To initiate Online Resolution of Disputes
                  through ODR Portal, please{" "}
                  <a
                    href="https://smartodr.in/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-900 font-semibold hover:underline"
                  >
                    click here
                  </a>
                  .
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
  <Footer/>
    </>
  );
};

export default InvestorShareholderServices;
