import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const WelfarePractice = () => {
  return (
   <>
   <Header/>
    <div>
      {/* Hero Section */}
      <div className="relative  w-full">
        <img
          src="./imgs/investors/investorwelfarepractices.png"
          alt="Chiripal Group Banner"
          className="object-cover w-full h-full md:h-[70vh] lg:h-[80vh] xl:h-[88vh]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
          <div className="px-4 sm:px-8 md:px-24 lg:px-32">
            <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-montserrat, sans-serif  mb-1 font-bold text-left">
              Welfare Practice
            </h1>
            <p className="text-white text-2xl font-serif px-2">Nandan Denim Welfare Practice Content.</p>
          </div>
        </div>
      </div>



      {/*  */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 flex flex-col md:flex-row items-center gap-10 bg-white rounded-lg shadow">
        {/* Text */}
        <div className="md:w-1/2 space-y-4 max-w-7xl mx-auto font-signika">
          <p className="text-gray-700 text-sm leading-relaxed">
            <span className="font-bold  text-left"> Personal Development Plan:</span> We make our employees undergo a comprehensive analysis of their skills,
            defining what is important to them, what they want to achieve, what
            strengths they already have that help to achieve their goals, and what they need to improve and develop with time.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            <span className="font-bold  text-left">  Employee Social Security Schemes:</span> We give opportunities for long term survival
            and growth by providing social benefits to our employees while reducing employee
            absenteeism and increasing productivity.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
           <span className="font-bold  text-left"> Statutory labour welfare facility as per the act:</span> For social comfort and intellectual improvement of the employee.
            To ensure higher standard of working condition, to make life worth living for the employees with voluntary
            effort to improve the existing industrial system and the condition of employment in the factory. To
            include among the employees a sense of responsibility, dignity, belongingness and pride for themselves and the company.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="./imgs/aboutus/culture/aboutimg2.png"
            alt="Employees"
            className="w-full h-auto rounded-md object-cover"
          />
        </div>
      </div>

    </div>
      <Footer/>
   </>
  )
};

export default WelfarePractice;
