import React from 'react';
import Link from 'next/link';
import Typed from 'react-typed';

const Hero = ({heading, message}) => {
  return (
    <><div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem] text-center'>
        <h2 className='text-6xl text-green-600 font-bold'>{heading}</h2>
        <p className='py-5 text-2xl mt-2 tracking-wider '>{message}</p>
        <button className='px-8 py-2 border rounded-lg hover:bg-green-950 transition-colors duration-300'>
          <Link href='/contact' className='tracking-wider text-xl'>Contactanos</Link>
        </button>
      </div>
    </div>
    <div></div>
    </>
  );
};

export default Hero;
