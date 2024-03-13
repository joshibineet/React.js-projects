import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='relative'>
     <div className=' p-5 md:p-10 bg-gray-800 text-white grid grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4 h-72'>
     <div className="links">
        <h3 className="mb-3">Useful Links</h3>
        <ul className='flex flex-col gap-3'>
          <li><Link to='/about' className="hover:text-orange-400">About</Link></li>
          <li><Link to='/services' className="hover:text-orange-400">Services</Link></li>
          <li><Link to='/blog' className="hover:text-orange-400">Blog</Link></li>
          <li><Link to='/contact' className="hover:text-orange-400">Contact</Link></li>
        </ul>
      </div>
      <div className="links lg:ml-20">
        <h3 className="mb-3">Useful Links</h3>
        <ul className='flex flex-col gap-3'>
          <li><Link to='/about' className="hover:text-orange-400">About</Link></li>
          <li><Link to='/services' className="hover:text-orange-400">Services</Link></li>
          <li><Link to='/blog' className="hover:text-orange-400">Blog</Link></li>
          <li><Link to='/contact' className="hover:text-orange-400">Contact</Link></li>
        </ul>
      </div>
     </div>
      <div className="absolute bottom-0 left-0 w-full  p-4 text-center bg-gray-700 tracking-wider">
      <p className='tracking-widest mx-auto flex justify-between ml-6'>&copy; {new Date().getFullYear()} dokan. All rights reserved.</p>
      <div className='flex items-center justify-end gap-10 mr-5 '> 
        <a href=""><FaFacebook /></a>
      <a href=""><BiLogoInstagramAlt /></a>
      <a href=""><FaLinkedin /></a>
      <a href=""><FaGithub /></a>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
