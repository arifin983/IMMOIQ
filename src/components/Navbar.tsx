import React from 'react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import MenuBar from './MenuBar';
import { Link } from 'react-router-dom';



const NavBar: React.FC = () => {
  // Toggle Menu Function
  const [showMenu, setShowMenu] = React.useState(false);
  
  // Toggle Menu Function
  const toggleMenu = () => {
    console.log("its working")
    setShowMenu(!showMenu);
 
  };
  return (
    <nav className="w-full h-24 bg-gradient-to-r from-[rgb(46,65,89)] via-[rgb(67,159,154)] to-[rgb(46,65,89)] flex justify-between items-center px-6">
      
      {/* Left: Menu Icon */}
      <div className="text-white cursor-pointer">
        <FiMenu className="text-3xl" onClick={toggleMenu} />
      </div>
      
      {/* Center: Image Icon, ImmoTrust Text, and SCHWEIZ AG */}
      <div className="flex flex-col items-center text-white">
        {/* Replace with Image Icon */}
        <div className="flex items-center font-bold text-xl">
          <img src="/logo.svg" alt="ImmoTrust Logo" className=" text-white w-[205px] h-[67px] mr-2" />
          {/* ImmoTrust */}
        </div>
        {/* SCHWEIZ AG below ImmoTrust */}
        {/* <span className="text-xs font-light">SCHWEIZ AG</span> */}
      </div>
      
      {/* Right: LinkedIn, Instagram Icon and KONTAKT */}
      <div className="flex items-center text-white space-x-4">
        <Link target='_blank' to="https://www.linkedin.com/in/arif-uddin-a99273230">
        <FaLinkedinIn className="text-2xl font-light" />
        </Link>
        <Link target='_blank' to="https://arifincom-arifin983s-projects.vercel.app/">
        <FaInstagram className="text-2xl font-light" />
        </Link>
        <Link to='/kontakt'>
        <span className="uppercase font-light">Kontakt</span>
        </Link>
      </div>
      
      {/* Menu */}
      <MenuBar 
      showMenu={showMenu}
      toggleMenu={toggleMenu}  // Call toggleMenu function when menu is clicked
      />
    </nav>
  );
};

export default NavBar;






