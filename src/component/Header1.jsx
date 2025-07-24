import { link } from "framer-motion/client";
import { Menu, Search, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const navItems = [
    { path: "/", label: "Home" },
    {
        path: "#",
        label: "About Us",
        submenu: [
            { path: "/culture", label: "Culture" },
            {
                path: "/leadership",
                label: "Leadership",
                submenu: [
                    { path: "/message-of-managing-director", label: "Message of Managing Director" },
                    { path: "/ceo-message", label: "CEO's Message" },
                    { path: "/board-of-director", label: "Board of Director" }
                ]
            },
            { path: "/chiripal-group", label: "Chiripal Group" },
            { path: "", label: "Group Data", }
        ]
    },
    {
        path: "#",
        label: "Products",
        submenu: [
            { path: "/denim", label: "Denim" },
            { path: "/shirting", label: "Shirting" },
            { path: "/https://ww1.nandandenim.co/lander", label: "Yarn" }
        ]
    },
    {
        path: "#",
        label: "We Care",
        submenu: [
            { path: "/sustainability", label: "Sustainability" },
            { path: "/quality", label: "Quality" },
            { path: "/community", label: "Community" },
            { path: "/employees", label: "Employees" }
        ]
    },
    {
        path: "/media",
        label: "Media",
        submenu: [
            { path: "/blog", label: "Blog" }
        ]
    },
    {
        path: "#",
        label: "Investors",
        megaMenu: true,
        submenu: [
            [
                { path: "/annual-report", label: "Annual Report/ Annual Return/ Postal Ballot" },
                { path: "/shareholding-pattern", label: "Shareholding Pattern" },
                { path: "/policies-codes", label: "Policies & Codes" },
                { path: "/regulation7-lodr", label: "Regulation 7 of LODR" },
                { path: "/newspaper-publication", label: "Newspaper Publication" },
                {
                    path: "https://nandandenim.com/wp-content/uploads/2023/05/Committee-Membership-and-Chairmanship.pdf", target: "_blank",
                    label: "Committee Membership and Chairmanship"
                },
                { path: "/brsr", label: "BRSR" }
            ],
            [
                { path: "/business", label: "Business" },
                { path: "/research-reports", label: "Research Reports" },
                { path: "/welfare-practice", label: "Welfare Practice" },
                { path: "/regulation40-lodr", label: "Regulation 40 of LODR" },
                { path: "/related-party-transaction", label: "Disclosure of Related Party Transaction" },
                { path: "/unpaid-dividend", label: "Unpaid Dividend" },
                { path: "/ur30-lodr", label: "Disclosures U.R. 30 of LODR" }
            ],
            [
                { path: "/voting-results", label: "Voting Results" },
                { path: "/concall-transcripts", label: "Concall Transcripts" },
                { path: "/notice-intimations", label: "Notice & Other Intimations" },
                { path: "/investor-complaints", label: "Statement of Investor Complaints" },
                { path: "/trading-window", label: "Closure of Trading Window" },
                { path: "/letter-to-shareholders", label: "Letter to Shareholders" },
                { path: "https://nandandenim.com/wp-content/uploads/2025/02/Profile-of-Board-of-Directors.pdf", label: "Profile of Board of Directors" }
            ],
            [
                { path: "/financial-results", label: "Financial Results" },
                { path: "/corporate-governance", label: "Corporate Governance" },
                { path: "/investor-services", label: "Investor/Shareholder Services" },
                { path: "/share-capital-audit", label: "Reconciliation of Share Capital Audit" },
                { path: "https://www.bseindia.com/stock-share-price/nandan-denim-limited/ndl/532641/corp-announcements/", label: "Corporate Announcement" },
                { path: "/compliance-report", label: "Secretarial Compliance Report" },
                { path: "https://nandandenim.com/wp-content/uploads/2025/02/MOA-AOA.pdf", label: "MOA – AOA" }
            ]
        ]
    },
    { path: "/careers", label: "Careers" },
    { path: "/contact-us", label: "Contact Us" }
];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
    const [showOverlay, setShowOverlay] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileSubmenu, setMobileSubmenu] = useState(null);
    const [openNestedSubmenu, setOpenNestedSubmenu] = useState(null);
    const [activeMenuIndex, setActiveMenuIndex] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const hoverTimeoutRef = useRef(null);

    const handleMouseEnter = (index) => {
        clearTimeout(hoverTimeoutRef.current);
        setActiveMenuIndex(index);
    };

    const handleMouseLeave = () => {
        hoverTimeoutRef.current = setTimeout(() => {
            setActiveMenuIndex(null);
        }, 200); // delay in ms
    };
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed w-full  top-0 z-50 left-0 transition-all duration-300 
    ${scrolled ? "bg-[#193267]" : "lg:bg-transparent bg-white "}`}
        >
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* logo */}
                <div className="flex items-center">
                    <a href="/">
                        <img
                            src={
                                scrolled || windowWidth < 1024
                                    ? "./imgs/NandanLogo.svg"
                                    : "./imgs/NandanLogo.svg"
                            }
                            alt="Nandan Logo"
                            className="h-16 transition-all duration-300"
                        />
                    </a>
                </div>
                {/* toggle button  */}
                <div className="lg:hidden text-black">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* desktop menu  */}
                <nav className="hidden lg:flex space-x-10 text-lg font-medium   font-signika" >
                    {navItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative group hoverable-menu"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link to={item.path} className="flex items-center  gap-1 text-black  hover:text-yellow-400 ">
                                {item.label} {item.submenu && <FaAngleDown />}
                            </Link>
                            {item.submenu && !item.megaMenu && activeMenuIndex === index && (
                                <div className="absolute top-full left-0 mt-2 w-56 bg-white   text-md  shadow-lg rounded z-50">
                                    <ul className="py-2 text-sm font-sans text-gray-400   ">
                                        {item.submenu.map((sub, i) => (
                                            <li key={i}>
                                                {sub.submenu && sub.label === "Leadership" ? (
                                                    <div
                                                        className="relative"
                                                        onMouseEnter={() => setOpenSubmenuIndex(i)}
                                                        onMouseLeave={() => setOpenSubmenuIndex(null)}
                                                    >
                                                        <Link
                                                            to={sub.path}
                                                            className="flex justify-between px-4 py-2 w-full text-left bg-yellow-400 hover:bg-gray-200 hover:text-black"
                                                            onMouseEnter={() => setOpenSubmenuIndex(i)}
                                                        >
                                                            {sub.label} {sub.submenu && <FaAngleRight className="h-5" />}
                                                        </Link>

                                                        {openSubmenuIndex === i && (
                                                            <ul className="absolute top-0 left-full w-56 bg-white shadow-lg rounded z-50">
                                                                {sub.submenu.map((deep, j) => (
                                                                    <li key={j}>
                                                                        <Link to={deep.path} className="block px-4 py-2 hover:bg-gray-100 hover:text-black">
                                                                            {deep.label}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <Link to={sub.path} className="block px-4 py-2 hover:bg-gray-100 hover:text-black">
                                                        {sub.label}
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {item.submenu && item.megaMenu && activeMenuIndex === index && (
                                <div className="absolute top-full -left-60   -translate-x-1/2 mt-4 flex bg-white shadow-lg w-[1300px] mx-auto p-6 z-50">
                                    <div className="grid grid-cols-4 gap-10  text-sm font-sans font-bold text-black   ">
                                        {item.submenu.map((column, colIndex) => (
                                            <div key={colIndex} className="border-r-2  border-gray-100 pr-8 ">
                                                <ul className=" space-y-4 text-md   font-bold text-right  text-gray-700">
                                                    {column.map((colItem, itemIndex) => (
                                                        <li key={itemIndex}>
                                                            <Link to={colItem.path} className="hover:bg-gray-100 block py-2 px-2  text-left">
                                                                {colItem.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    {/* search icon and overlay */}
                    <div className="relative flex">
                        <div className="border-l h-6 border-white mx-4"></div>
                        <button onClick={() => setShowOverlay(true)} className="hover:text-yellow-300 text-white">
                            <Search size={22} />
                        </button>
                        {showOverlay && (
                            <div className="fixed inset-0 bg-white z-50 text-black flex flex-col">
                                {/* Top Bar */}
                                <div className="flex items-center justify-between px-4 sm:px-8 py-4  ">
                                    <span className="text-lg font-semibold"></span>
                                    <button onClick={() => setShowOverlay(false)}>
                                        <X size={28} className="hover:text-red-500" />
                                    </button>
                                </div>

                                {/* Centered Search Box */}
                                <div className="flex-1 flex justify-center items-center px-4">
                                    <div className="flex items-center w-full max-w-[400px] bg-white    ">
                                        <label className="text-black px-3 font-semibold  hidden sm:block">Search:</label>
                                        <input
                                            type="text"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="flex-1 px-2 py-2 text-black outline-none border-b border-black"
                                            placeholder="Type here..."
                                        />
                                        <button className="p-2 text-black">
                                            <Search size={22} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </nav>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden fixed top-0 left-0 w-full h-screen z-50 bg-white overflow-y-auto px-6 py-4">
                        {/* Top Section: Search - Logo - Close */}
                        <div className="relative flex items-center justify-center mb-6 h-14">
                            <button onClick={() => setShowOverlay(!showOverlay)} className="absolute left-4 text-black">
                                <Search size={22} />
                            </button>
                            <img src="./imgs/NandanLogo.svg" alt="Logo" className="h-10" />
                            <button onClick={() => setMobileMenuOpen(false)} className="absolute right-4 text-black">
                                <X size={28} />
                            </button>
                        </div>

                        {/* Mobile Search Input */}
                        {showOverlay && (
                            <div className="mb-4">
                                <div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="flex-1 bg-transparent text-black outline-none placeholder:text-sm"
                                        placeholder="Search..."
                                    />
                                    <button className="text-gray-700">
                                        <Search size={20} />
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Mobile Navigation Items */}
                        {navItems.map((item, index) => (
                            <div key={index} className="mb-4">
                                {item.submenu ? (
                                    <>
                                        <button
                                            onClick={() =>
                                                setMobileSubmenu(mobileSubmenu === index ? null : index)
                                            }
                                            className="w-full text-left text-lg font-medium py-2 border-b"
                                        >
                                            {item.label} <FaAngleDown className="inline ml-2" />
                                        </button>

                                        {mobileSubmenu === index && (
                                            <div className="pl-4 mt-2">
                                                {item.megaMenu ? (
                                                    <div className="max-h-60 overflow-y-auto space-y-4">
                                                        {item.submenu.map((column, colIdx) => (
                                                            <div key={colIdx}>
                                                                {column.map((link, i) => (
                                                                    <Link
                                                                        key={i}
                                                                        to={link.path}
                                                                        className="block py-1 text-xs text-gray-700 hover:text-blue-600"
                                                                        onClick={() => setMobileMenuOpen(false)}
                                                                        style={{ fontFamily: ' Signika, sans-serif' }}
                                                                    >
                                                                        {link.label}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) :
                                                    (
                                                        item.submenu.map((sub, i) => (
                                                            <div key={i} className="ml-2">

                                                                {sub.submenu ? (
                                                                    <>
                                                                        <div className="flex justify-between items-center"
                                                                            style={{ fontFamily: ' Signika, sans-serif' }}>
                                                                            <Link
                                                                                to={sub.path}
                                                                                className="block py-1 text-sm text-gray-700 hover:text-blue-600"
                                                                                onClick={() => setMobileMenuOpen(false)}
                                                                            >
                                                                                {sub.label}
                                                                            </Link>
                                                                            <button
                                                                                onClick={() =>
                                                                                    setOpenNestedSubmenu(openNestedSubmenu === i ? null : i)
                                                                                }
                                                                                className="text-gray-700 ml-2"
                                                                            >
                                                                                <FaAngleDown />
                                                                            </button>
                                                                        </div>


                                                                        {openNestedSubmenu === i && (
                                                                            <div className="ml-4 mt-1 space-y-1">
                                                                                {sub.submenu.map((deep, j) => (
                                                                                    <Link
                                                                                        key={j}
                                                                                        to={deep.path}
                                                                                        className="block text-sm text-gray-600 hover:text-blue-600"
                                                                                        onClick={() => setMobileMenuOpen(false)}
                                                                                    >
                                                                                        {deep.label}
                                                                                    </Link>
                                                                                ))}
                                                                            </div>
                                                                        )}
                                                                    </>
                                                                ) : (
                                                                    <Link
                                                                        to={sub.path}
                                                                        className="block py-1 text-sm text-gray-700 hover:text-blue-600"
                                                                        onClick={() => setMobileMenuOpen(false)}
                                                                    >
                                                                        {sub.label}
                                                                    </Link>
                                                                )}
                                                            </div>
                                                        ))
                                                    )}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        to={item.path}
                                        className="block w-full text-left text-lg font-medium py-2 border-b"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </header>
    );
};

export default Header;
