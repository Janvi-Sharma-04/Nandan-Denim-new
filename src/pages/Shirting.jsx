import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Header from "../component/Header";
import Footer from "../component/Footer";



const DenimCard = ({ title, description }) => (
  <div className=" hover:bg-gray-200 rounded-lg shadow-md px-10 py-12 mt-5  w-full md:w-96">
    <h2 className="text-xl font-bold text-blue-900 mb-1 text-center font-signika" >{title}</h2>
    <p className="text-gray-500 text-sm leading-relaxed text-center font-signika" >{description}</p>
  </div>
);

const Shirting = () => {
  const cards = [
    {
      title: 'Basics',
      description:
        'fil a fils with carbon peaching to provide smooth touch and comfort',
    },
    {
      title: 'Smart Casuals',
      description:
        'varied combination of colour , weave and patterns for a neat yet casual attire',
    },
    {
      title: 'Casuals',
      description:
        'interesting tartans , madras plaids, ombres, engineered plaids with an added twist of innovative yarns',
    },
    {
      title: 'Textured',
      description:
        'inventing the basic with an element of texture to play with slubs/linens',
    },
    {
      title: 'Indigoes',
      description:
        'We present different hues of indigoes with an amazing range of stories dipped in indigoes from basics to rugged cauals, from slubs , neps to injections',
    },
    {
      title: 'Sulphur',
      description:
        'A concept of sulphur play with indigo which allows washing possibilities to an exagerated level . Range continues from basics to casuals..',
    },
    {
      title: 'Fancy',
      description:
        'Plaid play with fancy yarns like melange , grindle , space dyeds, neps, injected slubs .',
    },
    {
      title: 'Blends',
      description: 'different blends with cotton like tencel , viscose , modal, linen to provide an enriched look to the shirts',
    },

  ];
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
            className="h-full"
          >
            <SplideSlide>
              <img
                src="./imgs/products/shirting/shirtingbanner4.jpg"
                alt="Slide 1"
                className="object-cover w-full h-full md:h-[70vh] lg:h-[70vh] xl:h-[80vh]"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="./imgs/products/shirting/shirtingbanner1.png"
                alt="Slide 2"
                className="object-cover w-full h-full md:h-[70vh] lg:h-[70vh] xl:h-[80vh]"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="./imgs/products/shirting/shirtingbanner2.png"
                alt="Slide 3"
                className="object-cover w-full h-full md:h-[70vh] lg:h-[70vh] xl:h-[80vh]"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="./imgs/products/shirting/shirtingbanner3.png"
                alt="Slide 4"
                className="object-cover w-full h-full md:h-[70vh] lg:h-[80vh] xl:h-[80vh]"
              />
            </SplideSlide>

          </Splide>

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center font-serif">
            <h1 className="text-yellow-400 md:text-8xl font-roboto, Arial, sans-serif " >Shirting</h1>
          </div>
        </div>

        {/* our denim  product basket */}
        <div className=" flex items-center  mb-8 max-w-7xl mx-auto  text-justify font-signika" >
          {/* <hr className="border border-gray-300 mt-10 " /> */}
          <p className="mt-20 text-sm text-gray-600  leading-6  p-2 text-justify">The yarn dyeing facility of 20 TPD with different configuration right from 6 kg onwards enables
            us to have larger number of shades. Along with that, the art weaving facilities worth 10 MMPA with latest high speed looms with
            dobby attachments using air jets and rapier technology. With that, we ensure that we produce the best plain, twill, dobby, oxford,
            chambray, fila fil, herringbone, basket weave and pin-point oxford to name a few. The state of the art weaving is coupled with
            the processing machines ranging from preparatory to finishing including prints, peach, bio finish, ETI, normal soft finish,
            carbon finish, airo, coating, printing over yarn dyed fabrics,
            Indigo dyed fabrics and many more to give a touch to the fabric that suits the
            customer requirement of being the fashion frontier.</p>
        </div>

        {/* card of the denim product  */}
        <div >
          <div className="flex flex-wrap justify-center gap-6 px-4 py-10 ">
            {cards.map((card, idx) => (
              <DenimCard key={idx} title={card.title} description={card.description} />
            ))}
          </div>



        </div>

        {/* testomonial section  */}
        <div className="w-full mx-auto bg-gray-100 max-w-7xl  rounded-lg shadow-md p-8 flex flex-col md:flex-row items-center gap-8">
          {/* Image Placeholder */}
          <div className="w-full md:w-1/4  h-72 rounded-md flex items-center justify-center  text-center">
            <div>

              <img src="./imgs/products/shirting/testomonialimg.png" alt="" className="w-72 h-72" />
              {/* <p className="text-sm">ADD IMAGE TO YOUR ELEMENT</p> */}
            </div>
          </div>

          {/* Quote */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <blockquote className="italic text-gray-700 text-lg leading-relaxed">
              Every design, pattern and texture speaks a story about warmth, care, nature and love. -
              <span className="font-semibold text-gray-700">Ms Ruchi Mittal (Design, Shirting)</span>”
            </blockquote>
            <footer className="mt-4 text-sm font-medium text-gray-600">
              – Design and Product Development
            </footer>
          </div>
        </div>



        {/* inquiry form */}
        <div className="min-h-screen mt-10 flex items-center justify-center px-4 bg-[url('/imgs/products/denim/denimbgimg.png')] bg-cover bg-center">


          <form className="w-full max-w-md  text-white rounded-lg shadow-lg p-8 space-y-6">
            <h2 className="text-2xl font-bold text-center">Enquire Now</h2>

            <div >
              <label htmlFor="firstName" className="block mb-1 font-semibold">
                First Name*
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                className="w-full px-3 py-2 rounded-md border border-gray-300 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block mb-1 font-semibold">
                Last Name*
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                className="w-full px-3 py-2 rounded-md border border-gray-300 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-semibold">
                Your Email*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-3 py-2 rounded-md border border-gray-300 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-semibold">
                Your Message*
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full px-3 py-2 rounded-md border border-gray-300 text-gray-900"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-48 bg-blue-950 hover:bg-black transition font-bold py-2 px-4 rounded-md"
            >
              SUBMIT!
            </button>
          </form>
        </div>


      </div>
      <Footer />
    </>
  )
};

export default Shirting;
