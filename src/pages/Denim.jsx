import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Header from "../component/Header";
import Footer from "../component/Footer";

const DenimCard = ({ title, description }) => (
  <div className="bg-white hover:bg-gray-200 rounded-lg shadow-md px-6 py-12 mb-4 w-full">
    <h2 className="text-xl font-bold text-blue-900 mb-1 text-center font-signika, " >{title}</h2>
    <p className="text-gray-500 text-base leading-relaxed text-center font-signika" >{description}</p>
  </div>
);

const Denim = () => {
  const cards = [
    { title: 'Core Classics', description: 'The “Core classics” includes the selection of timeless “regular basic denims” that are essential items in everybody’s wardrobe.' },
    { title: 'Reinvented Classics', description: 'Our “Reinvented Classic” line are the fashionably modified form of our “Core Classics” product. Which adds some value to our core products.' },
    { title: 'Novelty', description: 'Presenting an amazing combination of the popular favourites Slubs / Crosshatch / Textures & Linen Blends.' },
    { title: 'Structured', description: 'By adding this denim to wardrobe for a look that’s a combination of casual & smart. Its indigo fabric makes it easy to define a person’s style.' },
    { title: 'Knit Denim', description: 'Our knit denim fabric has the desirable knit properties of natural stretch and air permeability.' },
    { title: 'Innovation', description: 'An area for new inspiration, dedicated to innovation and technology in service of creating new kinds of denim, corresponding to current needs and desires.' },
    { title: 'Lt. Wt. Denim', description: 'Lightweight denim jeans are a fashion favorite for a stylish look in summers.' },
    { title: 'Blends', description: 'Denim can be blended with a variety of other materials .Tencel / Excel / Linen / Spun Poly are some of the best blended denims fabrics.' },
    { title: 'Feather Touch', description: 'Denims as soft as a feather with the smoothest hand feel' },
    { title: 'S. Tech', description: 'Our “S. Tech” denim stretches to extreme dimensions without getting saggy.' },
    { title: 'Prints', description: 'We provide wide range of printed denims.' },
  ];

  return (
    <>
      <Header />
      <div>
        {/* Hero Section */}
        <div className="relative w-full  overflow-x-hidden">
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
            <SplideSlide>
              <img src="./imgs/products/denim/denimbanner2.jpg" alt="Slide 1" className="object-cover w-full h-full md:h-[70vh] lg:h-[70vh] xl:h-[80vh]" />
            </SplideSlide>
            <SplideSlide>
              <img src="./imgs/products/denim/denimbanner1.png" alt="Slide 2" className="object-cover w-full h-full md:h-[70vh] lg:h-[70vh] xl:h-[80vh]" />
            </SplideSlide>
            <SplideSlide>
              <img src="./imgs/products/denim/denimbanner4.png" alt="Slide 3" className="object-cover w-full h-full md:h-[70vh] lg:h-[70vh] xl:h-[80vh]" />
            </SplideSlide>
          </Splide>
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center font-serif">
            <h1 className="text-yellow-400 text-5xl md:text-8xl  text-justify font-roboto, Arial, sans-serif " >Denim</h1>
          </div>
        </div>

        {/* Denim Info Section */}
        <div className="text-center mt-10 max-w-7xl mx-auto px-4">
          <h2 className="font-extrabold  text-3xl md:text-4xl text-center font-montserrat, sans-serif" >Our Denim Product Basket</h2>
          <hr className="border border-gray-300 mt-6 mb-8" />
          <p className="text-lg md:text-xl  mt-14 font-light text-justify font-montserrat, sans-serif" >
            Nandan denim manufacturing facility produces quality fabric from cotton fiber with due research &
            development backing the innovations and production techniques involved. Our world-class facilities are ably
            backed by a solid infrastructure to make our process more productive, people more efficient and products
            unbeatable in quality.
          </p>
        </div>

        {/* Denim Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-10 max-w-7xl mx-auto">
          {cards.map((card, idx) => (
            <DenimCard key={idx} title={card.title} description={card.description} />
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="w-full max-w-7xl mx-auto bg-gray-100 rounded-lg shadow-md p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 ">
          <div className="w-full md:w-1/3 bg-gray-200 h-72 rounded-md flex items-center justify-center text-gray-500 text-center">
            <div>

              <img src="/imgs/NandanLogo.svg" alt="" />

            </div>
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <blockquote className="italic text-gray-400 text-lg leading-relaxed">
              “Design is a journey of discovery. A freedom to explore and express exactly{' '}
              <span className="font-semibold text-gray-400">‘What makes the difference’</span>”

            </blockquote>
            <footer className="mt-4 text-sm font-medium text-gray-400">– Design and Product Development</footer>
          </div>
        </div>

        {/* YouTube Video */}
        <div className="mt-10 px-4">
          <h2 className="text-3xl font-bold text-center mb-5 font-montserrat, sans-serif" >How Denim Fabrics Are Made</h2>
          <div className="aspect-w-16 aspect-h-9 h-96 max-w-2xl mx-auto">
            <iframe
              src="https://www.youtube.com/embed/gO_T0vT2J94?si=9OQhIVRZSVJKYGAM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full rounded-md"
            ></iframe>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="min-h-screen mt-10 flex items-center justify-center px-4 py-10 bg-cover bg-center bg-no-repeat
      bg-[url('/imgs/products/denim/denimbgimg.png')]">
          <form className="w-full max-w-md backdrop-brightness-90 text-white rounded-lg shadow-lg p-6 md:p-8 space-y-6">
            <h2 className="text-2xl font-bold text-center">Enquire Now</h2>
            <div>
              <label htmlFor="firstName" className="block mb-1 font-semibold">First Name*</label>
              <input id="firstName" name="firstName" type="text" required className="w-full px-3 py-2 rounded-md border border-gray-300 text-gray-900" />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-1 font-semibold">Last Name*</label>
              <input id="lastName" name="lastName" type="text" required className="w-full px-3 py-2 rounded-md border border-gray-300 text-gray-900" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-semibold">Your Email*</label>
              <input id="email" name="email" type="email" required className="w-full px-3 py-2 rounded-md border border-gray-300 text-gray-900" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-semibold">Your Message*</label>
              <textarea id="message" name="message" rows="4" required className="w-full px-3 py-2 rounded-md border border-gray-300 text-gray-900"></textarea>
            </div>
            <button type="submit" className="w-48 bg-blue-950 hover:bg-black transition font-bold py-2 px-4 rounded-md">SUBMIT</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Denim;
