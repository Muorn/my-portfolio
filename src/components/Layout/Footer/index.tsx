import React, { FC } from 'react';
import Link from 'next/link';

const Footer: FC = () => {
  return (
    <footer className='bg-darkmode border-t border-dark_border'>
      <div className='container mx-auto max-w-6xl px-4 py-8'>
        <div className='flex flex-col md:flex-row justify-between items-center text-center md:text-left'>
          <p className='text-base text-white/50 mb-4 md:mb-0'>
            &copy; {new Date().getFullYear()} Daniel Xavier B. Legaspi. All rights reserved.
          </p>
          <div className='flex items-center space-x-6'>
            <Link href='mailto:daxalegaspi@gmail.com' className='text-white/50 hover:text-primary transition-colors duration-300'>
                Email
            </Link>
            <Link href='https://www.linkedin.com/in/daniel-legaspi-62a867309/' target='_blank' rel='noopener noreferrer' className='text-white/50 hover:text-primary transition-colors duration-300'>
                LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
