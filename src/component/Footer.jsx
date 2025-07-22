import React from "react";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-[#193267] text-white pt-10">
            <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-2 gap-10 border-b border-white/20 pb-10">
                {/* Left Content */}
                <div style={{ fontFamily: ' Signika, sans-serif' }}>
                    <img src="./imgs/whitenandanlogo.png" alt="Logo" className="h-16 mb-5" />
                    <p className="text-sm mb-6 leading-relaxed">
                        Pursuing its ambitious plans of expansion, Chiripal Group laid
                        foundations of an ultra-modern 100% cotton & blended bottom wear
                        fabrics and the most modern & versatile denim manufacturing project
                        called Nandan Denim Limited. United with a vision to provide
                        continuous value through innovation, expertise, excellence and
                        attain the highest value of customer satisfaction.
                    </p>
                    <p className="text-sm mb-2">nandan@chiripalgroup.com</p>
                    <p className="text-sm mb-5">+91 - 79 26473301</p>
                    <a href="#" className="text-sm underline hover:text-blue-300">
                        Privacy Policy
                    </a>
                    <div className="flex items-center gap-4 mt-6 text-xl">
                        <FaFacebookF className="hover:text-blue-300 cursor-pointer" />
                        <FaTwitter className="hover:text-blue-300 cursor-pointer" />
                        <FaGooglePlusG className="hover:text-blue-300 cursor-pointer" />
                        <FaInstagram className="hover:text-blue-300 cursor-pointer" />
                        <FaYoutube className="hover:text-blue-300 cursor-pointer" />
                    </div>
                </div>

                {/* Right (Twitter) */}
                <div className="border-l border-white/20 pl-6" style={{ fontFamily: ' Signika, sans-serif' }} >
                  <a href="https://x.com/nandan_denim" target="_blank">  <h4 className="font-sans mb-2">Tweets by nandan_denim</h4></a>
                    {/* You can embed a Twitter widget here or use a placeholder */}

                </div>
            </div>

            {/* Bottom Footer */}
            <div className="text-left px-20  text-sm py-4 bg-[#ebebed] text-blue-950" style={{ fontFamily: ' Signika, sans-serif' }}>
                © Copyright 2023. <strong>NANDAN DENIM LTD.</strong> All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
