import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Header from '../component/Header';
import Footer from '../component/Footer';

const Employees = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const contentBlocks = [
    {
      title: "Personal Development Plan",
      text: `We make our employees undergo a comprehensive analysis of their skills, defining what is important to them, what they want to achieve, what strengths they already have that help to achieve their goals, and what they need to improve and develop with time.`,
      img: "./imgs/wecare/employee/employeeicon1.png",
    },
    {
      title: "Employee Social Security Schemes",
      text: `Gives opportunities for long term survival and growth by providing social benefits to our employees and reduced employee absenteeism and increased productivity.`,
      img: "./imgs/wecare/employee/employeeicon2.png",
      reverse: true,
    },
    {
      title: "Statutory Labour Welfare Facility As Per The Act",
      text: `
This is for social comfort and intellectual improvement of the employee. This ensures a higher standard of working condition, to make life worth living for the employees. It is a voluntary effort to improve the existing industrial system and the condition of employment in the factory. This includes among the employees a sense of responsibility, dignity, belonging and makes them proud of themselves and the company.`,
      img: "./imgs/wecare/employee/employeeicon3.png",
    },
    {
      title: "Women Leadership",
      text: `We make our employees undergo a comprehensive analysis of their skills,  defining what is important to them, what they want to achieve, what strengths they already have that help to achieve their goals, and what they need to improve and develop with time.`,
      img: "./imgs/wecare/employee/employeeicon4.png",
      reverse: true,
    },
    {
      title: "Training and Development",
      text: `We enhance the right skill sets so that our team is prepared to handle any market challenges and serve the niche customer demands.`,
      img: "./imgs/wecare/employee/employeeicon5.png",
    },
  ];

  return (
    <>
      <Header />
      <div className="w-full overflow-hidden">
        {/* Hero Section */}
        <div className="relative  w-full overflow-x-hidden">
          <Splide
            options={{
              type: "fade",
              rewind: true,
              perPage: 1,
              autoplay: true,
              interval: 4000,
              speed: 400,
              arrows: false,
              pagination: false,
              pauseOnHover: false,
              pauseOnFocus: false,
            }}
            className="h-full"
          >
            {[
              "employeebanner1",
              "employeebanner5",
              "employeebanner3",
              "employeebanner4",
              "employeebanner2",
            ].map((img, i) => (
              <SplideSlide key={i}>
                <img
                  src={`./imgs/wecare/employee/${img}.png`}
                  alt={`Slide ${i + 1}`}
                  className="object-cover w-full h-full max-w-full md:h-[70vh] lg:h-[80vh] xl:h-[80vh]"
                />
              </SplideSlide>
            ))}
          </Splide>
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h1 className="text-yellow-400 text-3xl sm:text-5xl md:text-7xl font-bold font-roboto, Arial, sans-serif" >Employees</h1>
          </div>
        </div>

        {/* Dynamic Content Sections */}
        {contentBlocks.map((block, idx) => (
          <div key={idx} className="w-full max-w-7xl mx-auto bg-white py-10 ">
            <div className={`flex flex-col ${block.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center `}>
              <div className="w-full mx-auto md:w-3/4 text-left space-y-4">
                <h2 className="text-2xl font-bold text-black mb-16 text-justify font-signika" >{block.title}</h2>
                <p className="text-gray-800 text-sm leading-6 text-justify font-signika" >{block.text}</p>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <img
                  src={block.img}
                  alt={block.title}
                  className="w-40 sm:w-52 h-40 sm:h-52 object-contain"
                  data-aos={block.reverse ? 'fade-right' : 'fade-left'}
                />
              </div>
            </div>
          </div>
        ))}

        {/* Full-width Images */}
        <div className="max-w-7xl mx-auto">
          <img
            src="./imgs/wecare/employee/employeeimg1.jpg"
            alt="employee_1"
            className="w-full object-contain mt-10"
          />
          <img
            src="./imgs/wecare/employee/employeeimg2.png"
            alt="employee_2"
            className="w-full object-contain mt-10 mb-10"
          />
        </div>
      </div>
        <Footer/>
    </>
  );
};

export default Employees;
