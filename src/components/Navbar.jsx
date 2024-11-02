import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";


const Navbar = () => {

    const [isActive, setIsActive] = useState(false)

    const handleIsActive = () => {
        setIsActive(!isActive);
    }

    return (
        <nav className=" bg-gray-800">
            <div className="w-11/12 mx-auto flex flex-row justify-between items-center pt-6">
                <h2 className="text-white font-bold">Chefs Table</h2>
                {/* for large screen */}
                <div className="lg:flex flex-row justify-between items-center text-white font-semibold space-x-5  text-center hidden">
                    <ul className="flex gap-7 justify-between items-center">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Recipes</a></li>
                        <li><a href="#">About</a></li>
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <input type="search" placeholder="Search" className="rounded-full px-8 py-2 text-black font-normal text-xs" />
                                <CiSearch className="absolute top-2 left-1 text-black text-lg ml-2" />
                            </div>
                            <FaUserCircle className="text-3xl" />
                        </div>
                    </ul>
                </div>
                <div className="lg:hidden">
                    <button onClick={handleIsActive}>{isActive ? <IoClose className="text-white" /> : <GiHamburgerMenu className="text-white" />}</button>
                </div>
            </div>
            {/* for small screen */}
            {isActive && (<div className='absolute top-12 right-6 bg-gray-800 text-white w-64 rounded-lg translate-y-8 z-10'>
                <ul className="flex flex-col space-y-3 p-4">
                    <FaUserCircle className="text-3xl" />
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Recipes</a></li>
                    <li><a href="#">About</a></li>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <input type="search" placeholder="Search" className="rounded-full px-8 py-2 text-black font-normal text-xs" />
                            <CiSearch className="absolute top-2 left-1 text-black text-lg" />
                        </div>
                    </div>
                </ul>
            </div>)};
        </nav>
    );
};

export default Navbar;