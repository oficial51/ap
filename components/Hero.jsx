import React from 'react';
import Link from 'next/link';
import Typedx from './Typedx';

const Hero = ({heading, message}) => {
  return (
    <><div className='bg-[url(../public/jr-korpa-stwHyPWNtbI-unsplash\(1\).jpg)] relative flex items-center justify-center h-screen bg-fixed bg-center bg-cover bg-no-repeat'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem] text-center'>
        <h2 className='text-6xl text-green-600 font-bold'>{heading}</h2>
        <p className='py-5 text-2xl mt-2 tracking-wider '>{message} <Typedx></Typedx></p>
        <button className='px-8 py-2 border rounded-lg hover:bg-green-950 transition-colors duration-300'>
          <Link href='/Contact' className='tracking-wider text-xl'>
            <p className='tracking-wider hover:scale-105 hover:transition hover:ease-in hover:duration-300'>Contactanos</p>
            </Link>
        </button>
      </div>
    </div>
    <div></div>
    </>
  );
};

export default Hero;
