import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../App.css"; // ← Fixed path
import Header from "../component/Header";
import Footer from "../component/Footer";


const Culture = () => {
  return (
    <>
      <Header />
      <div>
        {/* Hero Section */}
        <div className="relative  w-full">
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
            className="h-full "
          >
            <SplideSlide>
              <img
                src="/imgs/aboutus/culture/aboutbanner1.png"
                alt="Slide 1"
                className="object-cover w-full h-full md:h-[70vh] lg:h-[70vh] xl:h-[80vh] "
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="/imgs/aboutus/culture/aboutbanner2.png"
                alt="Slide 2"
                className="object-cover w-full h-full md:h-[70vh] lg:h-[70vh] xl:h-[80vh]"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="/imgs/aboutus/culture/aboutbanner3.png"
                alt="Slide 3"
                className="object-cover w-full h-full md:h-[70vh] lg:h-[70vh] xl:h-[80vh]"
              />
            </SplideSlide>
          </Splide>

          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className=" text-4xl sm:text-5xl md:text-7xl font-semibold font-roboto, Arial, sans-serif text-[#ffdc00]"


            >Culture</h1>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className=" max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-4  py-10  text-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl   text-blue-900 mb-4 font-montserrat, sans-serif"
            >Vision</h2>
            <h4 className="text-base sm:text-lg md:text-2xl mt-10 text-gray-600 font-signika" >
              To Be No. 1</h4>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl  text-yellow-400 mb-4 font-montserrat, sans-serif " >Mission</h2>
            <ul className="text-left text-sm sm:text-base md:text-sm mt-10  text-gray-600  list-inside space-y-6 font-signika"
            >
              <li>TO HAVE NANDAN ON EVERY TABLE.</li>
              <li>TO DEVELOP NANDAN INTO A FASHION BRAND.</li>
              <li>SMOOTH TRANSITIONING FROM MANUFACTURING TO SERVICE PROVIDER.</li>
            </ul>
          </div>
        </div>

        {/* Value Section */}
        <div className=" px-4  py-12 max-w-7xl mx-auto ">
          <h2 className="text-3xl sm:text-4xl md:text-6xl  text-center text-yellow-400 mb-10 font-montserrat, sans-serif">Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 text-center"   >
            {[
              { img: "aboutvalue1.png", text: "Passion Towards Work" },
              { img: "aboutvalue2.png", text: "Work For Excellence" },
              { img: "aboutvalue8.png", text: "Ethical" },
              { img: "aboutvalue4.png", text: "Respect For Diverse View" },
              { img: "aboutvalue5.png", text: "Care For The Environment" },
              { img: "aboutvalue6.png", text: "Collaborative And Relationship Driven" },
              { img: "aboutvalue7.png", text: "Fashion Perspective" },
            ].map((item, index) => (
              <div key={index}>
                <img
                  src={`./imgs/aboutus/culture/${item.img}`}
                  alt={item.text}
                  className="mx-auto mt-10 mb-4 h-16 object-contain"
                />
                <h3 className="text-sm sm:text-xl font-thin text-gray-400 font-signika" >{item.text}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Poetic Text Section */}
        <div className=" w-full max-w-7xl  mx-auto  mt-14 text-gray-500 text-center space-y-6 px-2 ">
          <div className="flex flex-col md:flex-row text-left gap-6   sm:text-lg md:text-xl mb-10">
            <div className="relative flex  ">
              {/* Oversized Background Quote */}
              <span className="absolute left-0 top-full   z-10  -translate-y-1/2 text-[200px] md:text-[400px]
                             text-gray-200 font-serif leading-none  select-none">
                &ldquo;
              </span>
              {/* Tagline Text */}
              <div className=" relative z-10 px-6 md:w-5/5  space-y-4 italic text-justify font-signika" >
                <p>The quest is on to reach the sky with a vision to grow and lead. A desire always burns inside, to deliver what the people need.</p>
                <p>We are friends with the nature, and care for our employees. We give back what we take, by planting countless trees!</p>
              </div>
              <div className="md:w-5/5  space-y-4 italic font-signika text-justify" >
                <p>Our ambition soars high, while scaling the global route. We’re here to deliver the best, being true to Indian roots!</p>
                <p>We envision a stylish world, through solutions that are smart. With a will to serve the world, Nandan stays Indian by heart!</p>
              </div>
            </div>
          </div>

          <h6 className=" text-sm  text-justify font-signika" >
            Nandan Denim works tirelessly to be the number one choice of customers all over the world. Our identity is truly Indian, especially because of our willingness to serve and deliver the best to everyone. We are grounded to our Indian roots and bank on that to explore new horizons across the globe!
          </h6>
        </div>



        {/* Employee Values Section */}
        <div className="max-w-7xl mx-auto   py-10 flex flex-col md:flex-row 
       gap-2  ">
          {/* Text */}
          <div className="md:w-1/2 space-y-7">
            <h2 className="text-2xl font-bold px-3 text-gray-800 mt-5 text-justify font-signika" >Employee Values</h2>
            <p className="text-gray-600 px-3  text-sm leading-7 text-justify font-signika" >
              The key to a successful, employee centric culture is to provide ample freedom to the team members
              along with the cushion to experiment. This happens when each and every individual takes up significant
              ownership of work. This happens when one is also allowed to commit errors, only to learn from them and
              continuously improve performance. And lastly, this happens when the team is trained not to just come up
              with problems, but also with solutions to those problems. These values are imbibed in our culture since
              25 years and we function as a unit that represents our customers!
              This inward approach helps us better understand consumer requirements and serve them faster!
            </p>

          </div>


          {/* Image */}
          <div className="md:w-2/2">
            <img
              src="./imgs/aboutus/culture/aboutimg2.png"
              alt="Employees"
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
        </div>

        {/* Inverted Pyramid Section */}
        <div className="max-w-7xl mx-auto  py-10 flex flex-col md:flex-row  gap-2 ">
          {/* Image */}
          <div className="md:w-2/2">
            <img
              src="./imgs/aboutus/culture/aboutimg1.png"
              alt="Inverted Pyramid"
              className="w-full h-auto rounded-md object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 space-y-1 ">
            <h2 className="text-2xl font-bold px-3 text-gray-800 mt-5 mb-7 text-justify font-signika" >Inverted Pyramid Approach</h2>
            <p className="text-gray-700 px-3  text-sm leading-7 text-justify font-signika" >
              A conventional pyramid has the leader on top, followed by the management, the staff, with customers placed right at the bottom.
            </p>
            <p className="text-gray-700 px-3  text-sm leading-7 text-justify font-signika" >
              But at Nandan Denim, the customer is considered the Alta. The Inverted Pyramid Approach puts the customers on top of the pyramid,
              followed by the staff, followed by the management, and lastly the leaders.
            </p>
            <p className="text-gray-700 px-3  text-sm leading-7 text-justify font-signika" >
              This idea lets customer voices drive company decisions and actions so that we collectively maximize the utility and expand the
              customer base. It’s an ideal system to produce fruitful results and enhance customer experience!
            </p>
          </div>
        </div>

      </div >
  <Footer/>
    </>
  );
};

export default Culture;
