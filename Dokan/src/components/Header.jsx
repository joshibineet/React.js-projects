import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <header className='flex flex-col md:flex-row bg-slate-700 justify-between items-center shadow-xl py-5 px-10 text-white sticky top-0 z-50 '>
      <div className="logo">
        <img src="./Dokan.png" className='w-24 h-10 rounded-md' alt="Image" />
      </div>
      <nav className='md:flex md:space-x-12 md:items-center mt-4 md:mt-0 space-x-7  sm:space-x-7'>
        <Link to={"/"} className='hover:text-orange-400'>Home</Link>
        <Link to={"/products"} className='hover:text-orange-400'>Product</Link>
        <Link to="/about" className='hover:text-orange-400'>About</Link>
        <Link to="/services" className='hover:text-orange-400'>Services</Link>
        <Link to="/blog" className='hover:text-orange-400'>Blog</Link>
        <Link to="/contact" className='hover:text-orange-400'>Contact</Link>
      </nav>
      <div className="buttons mt-4 md:mt-0 transition-transform duration-300  hover:scale-105">
        <button className='btn mr-5'>
         <FaCartShopping />
        </button>
        <button className='bg-white text-black px-6 py-2 rounded-2xl hover:bg-blue-400 font-semibold text-lg '>
          Sign In</button>
      </div>
    </header>
  );
};


export default Header;
