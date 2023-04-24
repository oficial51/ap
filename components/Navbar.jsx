"use client"

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-20 ease-in duration-300'
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white max-h-[500px] bg-gray-800 rounded-b-lg'>
        <Link href='/'>
          <h1  className='text-green-800 font-bold text-4xl '>
            Captur
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex '>
          <li className='m-4 hover:hover:text-gray-500 transition-colors duration-100 ease-in'>
            <a href='/' className='underline text-violet-600 decoration-solid'>Home</a>
          </li>
          <li className='m-4 hover:hover:text-gray-500 transition-colors duration-100 ease-in'>
            <Link href='/#gallery'>Galeria</Link>
          </li>
          <li className='m-4 hover:hover:text-gray-500 transition-colors duration-100 ease-in'>
            <Link href='/work'>Trabajos</Link>
          </li>
          <li className='m-4 hover:hover:text-gray-500 transition-colors duration-100 ease-in'>
            <Link href='/Contact' >Contacto</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gray-900 text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gray-850 text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 border-solid border border-x-gray-900 border-t-gray-900 border-b-violet-600 text-4xl hover:text-gray-500 transition-colors duration-100 ease-in'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl  border-solid border border-x-gray-900 border-t-gray-900 hover:text-gray-500 transition-colors duration-100 ease-in'>
              <Link href='/#gallery'>Gallery</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl  border-solid border border-x-gray-900 border-t-gray-900 hover:text-gray-500 transition-colors duration-100 ease-in'>
              <Link href='/work'>Work</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl  border-solid border border-x-gray-900 border-t-gray-900 hover:text-gray-500 transition-colors duration-100 ease-in'>
              <Link href='/Contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;