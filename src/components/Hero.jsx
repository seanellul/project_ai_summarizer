import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
      </nav>
      <img src={logo} alt='sumz_logo' className='w-20 justify-center' />
      <h1 className='head_text pb-3'>
        Time to Start <br className='max-md:hidden' />
        <span className='orange_gradient'>Lovin AI</span>
      </h1>
      <h2 className='desc'>
        A frontend and backend proof of concept, which aims to collect useful content creation AI tools and plugins into one domain for Lovin Malta.
      </h2>
    </header>
  );
};

export default Hero;
