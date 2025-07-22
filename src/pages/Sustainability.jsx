import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Header from '../component/Header';
import Footer from '../component/Footer';

const Sustainability = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const sections = [
    {
      title: "Water Management",
      text: `We take the entire issue of water management with utmost seriousness and realize that we owe a lot to the environment. And that is why we reuse and recycle water by employing Effluent Treatment Plant (ETP) and Reverse Osmosis (RO) Plant. We also ensure we treat wastewater with responsibility through Sewage Treatment Plant (STP) and reuse the same for gardening purpose.`,
      image: "sustainabilityimg1.png",
      imagePosition: "left",
    },
    {
      title: "Energy Management",
      text: `We are pleased to let all our stakeholders know that Nandan Denim is aiming at carbon neutral company. The company has set goals and targets considering the ESG parameters.`,
      bullets: [
        "Reduction in water usage and discharge by 5% i.e. 50KL/Day.",
        "Use of renewable energy from wind and solar (approx. 5.84 million units).",
        "Save 100,000 units via inverters, heat recovery, etc.",
        "Plant over 5,000 trees for a greenbelt.",
      ],
      image: "sustainabilityimg2.png",
      imagePosition: "right",
    },
    {
      title: "Social, Health & Safety",
      text: `Social, health and safety compliances aid us in enhancing the work culture and overall atmosphere at Nandan Denim. We ensure non-discrimination and uphold zero tolerance toward child labor. Our workforce is equipped with protective gear to ensure a 100% PPE policy.`,
      image: "sustainabilityimg3.png",
      imagePosition: "left",
    },
    {
      title: "Chemical Compliance",
      text: `We take our chemical compliances seriously as sustainable development is central to our company. Our manufacturing is certified with:`,
      bullets: [
        "Oeko Tex 100 certification",
        "GOTS 5.0 certification",
        "BCI certification",
      ],
      image: "sustainabilityimg1.png",
      imagePosition: "right",
    },
    {
      title: "Waste Management",
      text: `As part of our compliance, we recycle denim and set up garneting to convert used garments into fiber. We also operate a Caustic Recovery Plant and continuously evaluate our process to minimize waste generation.`,
      image: "sustainabilityimg5.png",
      imagePosition: "left",
    },
  ];

  return (
  <>
  <Header/>
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
          {["sustainability-1", "sustainability-2", "sustainability-3", "sustainability-4"].map((img, i) => (
            <SplideSlide key={i}>
              <img
                src={`./imgs/wecare/sustainability/${img}.png`}
                alt={`Slide ${i + 1}`}
                className="object-cover w-full h-full max-w-full md:h-[70vh] lg:h-[80vh] xl:h-[80vh]"
              />
            </SplideSlide>
          ))}
        </Splide>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-yellow-400 md:text-7xl  font-bold text-center font-serif px-4 font-roboto, Arial, sans-serif"
           >
            Sustainability
          </h1>
        </div>
      </div>

      {/* Info Sections */}
      {sections.map((section, idx) => (
        <div
          key={idx}
          className={`w-full ${idx % 2 === 0 ? "bg-white" : "bg-gray-100"} mt-10 px-4  py-12 `}
        >
          <div className={`flex flex-col ${section.imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"} items-center max-w-7xl mx-auto `}>
            <div
              className="w-full md:w-1/3 flex justify-center"
              data-aos={section.imagePosition === "left" ? "fade-right" : "fade-left"}
            >
              <img
                src={`./imgs/wecare/sustainability/${section.image}`}
                alt={section.title}
                className="w-40 sm:w-44 md:w-44 lg:w-52 object-contain"
              />
            </div>
            <div className="w-full md:w-2/3 text-left">
              <h2 className="text-2xl sm:text-xl font-bold text-black text-justify font-signika" >{section.title}</h2>
              <p className="text-gray-700 mt-4 text-sm leading-relaxed text-justify font-signika" >{section.text}</p>
              {section.bullets && (
                <ul className="list-disc list-inside text-sm ml-20 text-gray-700 mt-4 space-y-2 text-justify font-signika" >
                  {section.bullets.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
      <Footer/>
  </>
  );
};

export default Sustainability;
