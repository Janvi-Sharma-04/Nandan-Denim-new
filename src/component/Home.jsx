import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import Header1 from "./Header1";

const Home = () => {
  const splideRef = useRef(null);
  let scrollTimeout = null;

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const node = splideRef.current?.splide?.root;
    if (!node) return;

    const handleWheel = (e) => {
      e.preventDefault();
      if (scrollTimeout) return;
      scrollTimeout = setTimeout(() => (scrollTimeout = null), 800);
      e.deltaY > 0
        ? splideRef.current?.splide?.go(">")
        : splideRef.current?.splide?.go("<");
    };

    node.addEventListener("wheel", handleWheel, { passive: false });
    return () => node.removeEventListener("wheel", handleWheel);
  }, []);

  const goNext = () => splideRef.current?.splide?.go(">");
  const goPrev = () => splideRef.current?.splide?.go("<");

  return (

    <>

      <Header1 />
      <div className="h-screen overflow-hidden relative">
        <Splide
          ref={splideRef}
          options={{
            direction: "ttb",
            height: "100vh",
            perPage: 1,
            pagination: false,
            arrows: false,
            wheel: false,
            speed: 800,
          }}
          className="w-full"
        >
          <SplideSlide className="relative">
            <video
              className="w-full h-screen object-cover"
              src="./videos/Home-Banner-Video.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </SplideSlide>
          <SplideSlide className="relative">
            <img
              src="./imgs/home/banner02.jpg"
              alt="img02"
              className="w-full h-screen object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <h2 className="text-white text-3xl md:text-5xl font-semibold drop-shadow-md text-center  px-4 font-oldstandard, serif"
              >
                One of the India’s denim Supplier !
              </h2>
            </div>
          </SplideSlide>

          <SplideSlide className="relative">
            <img
              src="./imgs/home/banner03.jpg"
              alt="img03"
              className="w-full h-screen object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 font-oldstandard, serif" >
              <h2 className="text-white text-4xl md:text-5xl font-bold font-serif drop-shadow-md text-center px-4">
                Consistently stays ahead of the fashion curve.
              </h2>
              <p className="text-white text-xl md:text-2xl font-sans italic drop-shadow-md text-left px-4 mt-4 font-Georgia, sans-serif "
              >
                Heritage of indigo and Gandhi inspire our fine craftsmanship and perseverance towards global dominance.
              </p>
            </div>
          </SplideSlide>

          <SplideSlide className="relative">
            <img
              src="./imgs/home/banner04.jpg"
              alt="img04"
              className="w-full h-screen object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 font-oldstandard, serif" >
              <h2 className="text-white text-4xl md:text-5xl font-serif font-bold drop-shadow-md text-center px-4">
                Done Rightly at First- Every time!
              </h2>
              <p className="text-white text-xl md:text-3xl drop-shadow-md font-thin text-center w-2/3 px-10 mt-4 font-Georgia, sans-serif"
              >
                We are largest vertically integrated production facility manufacturing  Yarn to Fabric under one roof.
              </p>
            </div>
          </SplideSlide>

          <SplideSlide className="relative">
            <img
              src="./imgs/home/banner05.jpg"
              alt="img05"
              className="w-full h-screen object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 font-oldstandard, serif" >
              <h2 className="text-white text-4xl md:text-5xl font-bold drop-shadow-md text-center px-4">
                We pledge for planet, community and people.
              </h2>
              <p className="text-white text-justify text-xl md:text-2xl  font-serif   mt-8 font-Georgia, sans-serif"
              >
                We have also built our own greenbelt with over 25000 trees.
              </p>
            </div>
          </SplideSlide>

          <SplideSlide className="relative">
            <img
              src="./imgs/home/banner06.jpg"
              alt="img06"
              className="w-full h-screen object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-start px-4 lg:px-32 justify-center z-10 font-oldstandard, serif ">
              <h2 className="text-white text-4xl md:text-6xl font-bold drop-shadow-md text-center px-4">
                Transcending market trends
              </h2>
              <p className="text-white text-xl md:text-2xl drop-shadow-md font-serif text-center px-6 mt-4 font-Georgia, sans-serif"
              >
                Trusted supplier to partners in 28+ countries.
              </p>
            </div>
          </SplideSlide>

        </Splide>

        {/* Custom Arrows - Side by Side up & down  */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-row bg-opacity-10000 items-center gap-4 z-20">
          <button
            onClick={goPrev}
            className=" text-white text-[50px] flex items-center justify-center hover:text-[#efe0c6] shadow-sm cursor-pointer"
          >
            <IoChevronUp />
          </button>
          <button
            onClick={goNext}
            className="text-white text-[50px] flex items-center justify-center hover:text-[#efe0c6] shadow-sm cursor-pointer"
          >
            <IoChevronDown />
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
