import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';

const Quality = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
  <>
  <Header/>
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <div className="relative  w-full overflow-x-hidden">
        <img
          src="./imgs/wecare/quality/qualitybanner1.png"
          alt="Quality Banner"
          className="object-cover w-full h-full max-w-full md:h-[70vh] lg:h-[80vh] xl:h-[80vh]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center px-6 md:px-40">
          <h1 className="text-yellow-400 text-4xl md:text-7xl font-bold font-montserrat, sans-serif" 
          >Quality</h1>
        </div>
      </div>

      {/* Spinning Lab */}
      <div className="w-full bg-gray-100 px-4  py-16 ">
        <div className="flex flex-col-reverse md:flex-row items-center max-w-7xl mx-auto ">
          <div className="w-full md:w-2/3" data-aos="fade-right">
            <h2 className="text-xl font-bold text-black text-justify font-signika" >Spinning Lab</h2>
            <p className="text-gray-800 text-sm mt-4 text-justify font-signika" >
              For homogeneous mixing, an advanced bale management software is in place to test and categorize every bale of cotton.
              Our state of the art lab is equipped with the following machines:
            </p>
            <ul className="text-gray-800 list-disc  text-sm ml-20 list-inside mt-7 space-y-2 text-justify font-signika" >
              <li>HVI-900</li>
              <li>Uster Tester</li>
              <li>Uster Tensojet</li>
              <li>Classimat-III</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 flex justify-center" data-aos="fade-left">
            <img
              src="./imgs/wecare/quality/qualityimg1.png"
              alt="Spinning Lab"
              className="w-56 h-56 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Fabric Physical Lab */}
      <div className="w-full bg-white px-4  py-16  mt-16">
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto ">
          <div className="w-full md:w-1/3 flex justify-center" data-aos="fade-right">
            <img
              src="./imgs/wecare/quality/qualityimg2.png"
              alt="Fabric Lab"
              className="w-52 h-52 object-contain"
            />
          </div>
          <div className="w-full md:w-2/3" data-aos="fade-left">
            <h2 className="text-xl font-bold text-black text-justify font-signika" >Fabric Physical Lab</h2>
            <p className="text-gray-800 text-sm  mt-4 text-justify font-signika" >
              A sophisticated Fabric Physical Lab tests every batch of fabric before packaging. Testing follows international AATCC and ASTM methods for:
              tensile strength, washing speed, shrinkage, and more. Equipment includes:
            </p>
            <ul className="text-gray-800 text-sm ml-20 list-disc list-inside mt-7 space-y-2 text-justify font-signika" >
              <li>Tensile strength tester</li>
              <li>Tearing strength tester</li>
              <li>Spectrophotometer</li>
              <li>Projection microscope</li>
              <li>Stiffness tester</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Chemical Lab */}
      <div className="w-full bg-gray-100 px-4  py-20  mt-16">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 max-w-7xl mx-auto">
          <div className="w-full md:w-2/3" data-aos="fade-right">
            <h2 className="text-xl font-bold text-black text-justify font-signika " >Chemical Lab</h2>
            <p className="text-gray-800  text-sm mt-4 text-justify font-signika" >
              All input dyes and chemicals are properly tested and certified. Equipment includes:
            </p>
            <ul className="text-gray-800 text-sm ml-20 list-disc list-inside mt-4 space-y-2 text-justify font-signika" >
              <li>Ovens</li>
              <li>Muffle furnace</li>
              <li>Miniature padding mangle</li>
              <li>Various other chemical testing apparatus</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 flex justify-center" data-aos="fade-left">
            <img
              src="./imgs/wecare/quality/qualityimg3.png"
              alt="Chemical Lab"
              className="w-56 h-56 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
      <Footer/>
  </>
  );
};

export default Quality;
