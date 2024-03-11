import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

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
      <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
      </div>
    </footer>
  );
};

export default Footer;
