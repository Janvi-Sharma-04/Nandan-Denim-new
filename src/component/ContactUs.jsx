import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Header from "./Header";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <>
      <Header />
      <div className="text-gray-800">

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
                src="./imgs/contactus/contactusbanner.png"
                alt="Slide 1"
                className="object-cover w-full h-full md:h-[70vh] lg:h-[80vh] xl:h-[80vh]"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="./imgs/contactus/contactusbanner2.jpg"
                alt="Slide 2"
                className="object-cover w-full h-full md:h-[70vh] lg:h-[80vh] xl:h-[80vh]"
              />
            </SplideSlide>
          </Splide>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
            <h1 className="text-yellow-400 text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-center px-4 font-roboto, Arial, sans-serif"
            >
              Contact Us
            </h1>
          </div>
        </div>

        {/* Form & Map */}
        <div className="px-4 py-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 font-montserrat, sans-serif" >
                Let’s Collaborate!
              </h2>
              <p className="text-gray-600 mb-8 text-sm sm:text-base text-justify font-signika" >
                Feel free to get in touch with any of our staff members. We would love to host you.
              </p>
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="First Name*"
                  required
                  className="w-full border border-gray-300 p-3 rounded outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  required
                  className="w-full border border-gray-300 p-3 rounded outline-none"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  required
                  className="w-full border border-gray-300 p-3 rounded outline-none"
                />
                <textarea
                  placeholder="Message*"
                  required
                  className="w-full border border-gray-300 p-3 h-40 resize-none rounded outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#1b2a52] hover:bg-black text-white px-6 py-3 font-semibold rounded transition"
                >
                  SUBMIT
                </button>
              </form>
            </div>

            {/* Map + Address */}
            <div>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.146273184232!2d72.5178165750436!3d23.09106457912659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e846e4f9a1671%3A0x83d8f6d0d832d0a3!2sChiripal%20Group%20of%20Companies!5e0!3m2!1sen!2sin!4v1719290084371!5m2!1sen!2sin"
                className="w-full h-64 sm:h-80 md:h-96"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-2 font-signika" >Atithi Devo Bhava!</h3>
                  <p className="font-semibold text-sm font-signika" >Corporate Office</p>
                  <p className="text-sm text-justify font-signika" >
                    Nandan Denim Ltd. <br />
                    Chiripal House, Shivranjani Cross Road, <br />
                    Satellite, Ahmedabad – 380 015. Gujarat, India <br />
                    <strong>Phone:</strong> +91 7926473301
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-sm font-signika" >Factory Address</p>
                  <p className="text-sm text-justify font-signika" >
                    Nandan Denim Ltd. <br />
                    Survey No. 198/1 & 203/2, <br />
                    Saijpur-Gopalpur, Pirana road, <br />
                    <strong>Phone:</strong> +91 98792 00199
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Contact Cards */}
        <div className="py-16 px-4  bg-gray-50">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-10 font-signika" >
            Feel Free To Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
            {/* Card 1 */}
            <div className="space-y-4 text-gray-700">
              <div className="flex justify-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#1b2a52] flex items-center justify-center">
                  <FaMobileAlt className="text-yellow-400 text-xl md:text-2xl" />
                </div>
              </div>
              <p className="text-base font-medium font-opensans,sans-serif" >Vivek - Vendor Inquiry</p>
              <p className="text-sm font-signika" >+91 98258 00185</p>
              <a
                href="mailto:vivekagarwal@chiripalgroup.com"
                className="text-sm text-blue-900 underline font-signika"

              >
                vivekagarwal@chiripalgroup.com
              </a>
            </div>

            {/* Card 2 */}
            <div className="space-y-4 text-gray-700">
              <div className="flex justify-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#1b2a52] flex items-center justify-center">
                  <FaMobileAlt className="text-yellow-400 text-xl md:text-2xl" />
                </div>
              </div>
              <p className="text-base font-medium font-opensans,sans-serif" >P K Srivastava - Career Inquiry</p>
              <p className="text-sm font-signika">+91 63573 10809</p>
              <a
                href="mailto:pks@chiripalgroup.com"
                className="text-sm text-blue-900 underline font-signika"

              >
                pks@chiripalgroup.com
              </a>
            </div>
          </div>
        </div>

        {/* inquiry form */}
        <div className="min-h-screen mt-10 flex items-center justify-center px-4
         bg-[url('/imgs/contactus/contactusimg1.jpg')] bg-cover bg-center">
          <form className="w-full max-w-2xl  text-white rounded-lg shadow-lg p-8 space-y-6">
            <h2 className="text-4xl font-bold text-center font-montserrat, sans-serif" > Inquiry</h2>

            <div >
              <label htmlFor="name" className="block mb-1 font-semibold">
                Name*
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-3 py-2 rounded-md border border-gray-300 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="companyname" className="block mb-1 font-semibold">
                Company Name*
              </label>
              <input
                id="companyname"
                name="companyname"
                type="text"
                required
                className="w-full px-3 py-2 rounded-md border border-gray-300 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="vendorship" className="block mb-1 font-semibold">
                Vendor Ship*
              </label>
              <input
                id="vendorship"
                name="vendorship"
                type="text"
                required
                className="w-full px-3 py-2 rounded-md border border-gray-300 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="contact" className="block mb-1 font-semibold">
                Contact number*
              </label>
              <input
                id="contact"
                name="contact"
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
              <label htmlFor="city" className="block mb-1 font-semibold">
                City*
              </label>
              <input
                id="city"
                name="city"
                type="text"
                required
                className="w-full px-3 py-2 rounded-md border border-gray-300 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-semibold">
                Inquiry For*
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

  );
};

export default ContactUs;
