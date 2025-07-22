import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Header from "./Header";
import Footer from "./Footer";

const Careers = () => {
  const images = [
    "./imgs/careers/careerimg1.png",
    "./imgs/careers/careerimg2.png",
    "./imgs/careers/careerimg3.png",
  ];

  const testimonials = [
    {
      text: "Being Humble, collaborative, completely transparent and extremely responsive to external environment is the key to achieve global business in today’s fast-changing world.",
      name: "Mr Ashok Bothra",
      role: "CFO",
      image: "./imgs/careers/careerslider1.jpg",
    },
    {
      text: "Nandan Denim today is standing at a point of inflection- in its existence, catalyzing the denim industry.",
      name: "Ms Purvee Roy",
      role: "CS",
      image: "./imgs/careers/careerslider2.jpg",
    },
    {
      text: "Consistent innovation and persist effort to understand the changing tastes of the customers are the growth engines for any company.",
      name: "Mr. Ghosh",
      role: "Head, Product Development",
      image: "./imgs/careers/careerslider3.jpg",
    },
    {
      text: "At Nandan, all processes are designed to achieve – quality, delivery, and service to ensure a happy customer.",
      name: "Dr. D.K. Jain",
      role: "Head- Marketing",
      image: "./imgs/careers/careerslider4.jpg",
    },
    {
      text: "The only two ways a business can progress are – marketing and product Innovation.",
      name: "Mr Amresh Narayan",
      role: "Head- Marketing, Shirting",
      image: "./imgs/careers/careerslider5.png",
    },
    {
      text: "Market conditions change so rapidly that we must keep our aim constantly focused on the future demands of our customers beforehand.",
      name: "Mr Milind Bhortakke",
      role: "Head- Plant Operation, Nova",
      image: "./imgs/careers/careerslider6.jpg",
    },
    {
      text: " Investing in Employees, give the highest return.  We focus to align our employee’s personal goals to our organizational goal through empowering them.",
      name: "Mr. Joy Christian",
      role: "Chief People Officer",
      image: "./imgs/careers/careerslider7.jpeg",
    },
  ];

  return (
   <>
   <Header/>
    <div>
      {/* Hero Section */}
      <div className="relative  w-full">
        <img
          src="./imgs/careers/careerbanner1.png"
          alt="Culture"
          className="object-cover w-full h-full md:h-[70vh] lg:h-[80vh] xl:h-[80vh]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-4 sm:px-10 lg:px-32">
          <h1 className="text-yellow-400 text-4xl sm:text-5xl md:text-7xl font-bold font-montserrat, sans-serif" >Career</h1>
          <p className="text-white text-lg sm:text-2xl italic mt-4 text-justify">
            Explore where we work, how we work and the opportunities that await you.
          </p>
        </div>
      </div>

      {/* Life At Nandan */}
      <div className="w-full bg-white mt-10 rounded-lg text-center  max-w-7xl mx-auto ">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="w-full md:w-4/5 mx-auto text-left p-2 mt-10  md:p-4 ">
            <h2 className="text-3xl font-extrabold text-black font-montserrat, sans-serif" >Life At Nandan</h2>
            <p className="text-gray-700 text-sm mt-5 leading-6 text-justify font-signika" >
              Life at Nandan is a life full of empowerment! We believe in empowering people not just with authority,
              but by the vehement desire to let people express their best. In our view,
              people don’t work for us but they rather work with us, we firmly invest in this philosophy.
            </p>
            <p className="text-gray-700 text-sm mt-5 leading-6 text-justify font-signika" >
              Life at Nandan Denim is full of ownership and every individual contributing to the company is motivated
              to take up initiatives and complete tasks with sheer responsibility. It is a learning space where mutual
              growth encompasses the work environment and the culture!
            </p>
          </div>

          <div className="w-full md:w-3/4 ">
            <Splide
              options={{
                type: "loop",
                perPage: 1,
                arrows: true,
                pagination: false,
                autoplay: true,
                interval: 3000,
                speed: 600,
                pauseOnHover: true,
                pauseOnFocus: false,
                rewind: true,
              }}
              className="rounded-md  overflow-hidden"
            >
              {images.map((src, index) => (
                <SplideSlide key={index} >
                  <img
                    src={src}
                    // alt={`Slide ${index + 1}`}
                    className="w-full h-full   object-contain"
                  />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>

      {/* Employee Testimonials */}
      <div className="bg-white mt-10 mb-10 max-w-7xl mx-auto ">
        <h2 className="text-4xl font-bold text-center mb-8 font-montserrat, sans-serif" >Employee Testimonials</h2>

        <Splide
          options={{
            type: "loop",
            perPage: 1,
            autoplay: true,
            interval: 4000,
            speed: 600,
            pauseOnHover: true,
            pagination: true,
            arrows: true,
          }}
          className="max-w-4xl mx-auto"
        >
          {testimonials.map((t, index) => (
            <SplideSlide key={index}>
              <div className="text-center px-4 py-10">
                <div className="text-3xl sm:text-5xl text-gray-300 mb-4">“</div>
                <p className="italic text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
                  {t.text}
                </p>
                <div className="flex justify-center items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover border border-gray-300 shadow-sm"

                  />
                  <div className="text-left">
                    <h4 className="text-black font-semibold font-signika" >{t.name.toUpperCase()}</h4>
                    <p className="text-sm text-gray-500 font-opensans,sans-serif" >{t.role}</p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* Job Openings */}
      <div className="bg-gray-100 py-14 px-4  w-full mx-auto">
        <div className="text-left mb-12 max-w-7xl mx-auto ">
          <h1 className="text-3xl sm:text-4xl  font-extrabold text-gray-800 mb-1 font-montserrat, sans-serif"
          >
            Job Openings At Nandan
          </h1>
          <p className="text-gray-600 text-sm font-medium text-justify font-signika"
          >
            We have vacancies for full time job applicants as well as interns.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <div className="bg-white p-6 sm:p-8 shadow-sm rounded-md">
            <p className="font-medium text-lg mb-4 font-signika text-justify">
              If you are looking out a full time job, you may attach your resume below.
            </p>
            <label className="block text-sm text-gray-600 mb-1 font-signika">
              Upload Resume (required)
            </label>
            <input
              type="file"
              required
              className="w-full bg-gray-100 p-2 mb-4 border border-gray-200"
            />
            <button className="bg-[#1b2a52] text-white px-6 py-2 font-semibold">
              SUBMIT
            </button>
          </div>

          <div className="bg-white p-6 sm:p-8 shadow-sm rounded-md">
            <p className="font-medium text-lg mb-4 text-justify font-signika" >
              If you are looking out for an internship, you may attach your resume below.
            </p>
            <label className="block text-sm text-gray-600 mb-1 font-signika" >
              Upload Resume (required)
            </label>
            <input
              type="file"
              required
              className="w-full bg-gray-100 p-2 mb-4 border border-gray-200"
            />
            <button className="bg-[#1b2a52] text-white px-6 py-2 font-semibold">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
   
     <Footer/>
   </>
  );
};

export default Careers;
