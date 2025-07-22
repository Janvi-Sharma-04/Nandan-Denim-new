import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const BoardOfDirector = () => {
    const people = [
        { id: 1, name: 'Mr. Jyotiprasad Chiripal', role: "Managing Director", img: './imgs/aboutus/leadership/boardofdirector/boardofdirectorimg1.png' },
        { id: 2, name: 'Mr. Shaktidan Gadhavi', role: "Whole Time Director", img: './imgs/aboutus/leadership/boardofdirector/boardofdirectorimg2.jpg' },
        { id: 3, name: 'Mr. Rahul Mehta', role: "Independent Director", img: './imgs/aboutus/leadership/boardofdirector/boardofdirectorimg3.jpg' },
        { id: 4, name: 'Mr. Giraj Mohan Sharma', role: "Independent Director", img: './imgs/aboutus/leadership/boardofdirector/boardofdirectorimg4.jpg' },
        { id: 5, name: 'Mr. Kirit Joshi', role: "Independent Director", img: './imgs/aboutus/leadership/boardofdirector/boardofdirectorimg5.jpg' },
        { id: 6, name: 'Ms. Nalini Nageswaran', role: "Independent Director", img: './imgs/aboutus/leadership/boardofdirector/boardofdirectorimg6.jpg' },
    ];
    return (
        <>
            <Header />
            <div>
                {/* hero section  */}
                <div
                    className="relative bg-cover bg-center bg-no-repeat min-h-[88vh] flex items-center text-left px-40"
                    style={{ backgroundImage: "url('./imgs/aboutus/leadership/boardofdirector/boardofdirectorbanner1.png')" }} // Change to your actual image path
                >
                    <div className=" absolute text-left text-white max-w-4xl">
                        <h1 className=" md:text-7xl font-extrabold text-yellow-400  text-justify font-montserrat, sans-serif"
                        >
                            Board of Directors
                        </h1>
                        <p className="text-lg md:text-2xl italic ">
                            Nandan Denim Limited

                        </p>
                    </div>
                </div>

                {/* image gallery */}
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {people.map((person) => (
                            <div key={person.id} className="  relative group rounded-lg overflow-hidden">
                                <img
                                    src={person.img}
                                    alt={person.name}
                                    className="w-full h-72 object-contain"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center
                             justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h2 className="text-white text-lg font-semibold" >{person.name}</h2>
                                    <p className="text-white text-sm">{person.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>

              <Footer/>
        </>
    )
};

export default BoardOfDirector;
