import React from 'react';
import Link from 'next/link';

const ContactInfo = () => {
  return (
    <section className='dark:bg-darkmode py-16 md:py-24'>
      <div className='container mx-auto max-w-4xl px-4'>
        <div className='grid md:grid-cols-2 gap-12'>
          {/* Email Contact Card */}
          <div className='bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center'>
            <div className='flex justify-center mb-4'>
              <div className='bg-primary/20 w-16 h-16 flex items-center justify-center rounded-full'>
                <i className="bg-[url('/images/contact-page/email.svg')] bg-no-repeat bg-center bg-contain w-8 h-8 inline-block"></i>
              </div>
            </div>
            <h3 className='text-2xl font-bold text-midnight_text dark:text-white mb-2'>Email Me</h3>
            <p className='text-DeepOcean dark:text-white/70 mb-4'>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
            </p>
            <Link
              href='mailto:daxalegaspi@gmail.com'
              className='text-primary text-lg font-semibold hover:underline'
            >
              daxalegaspi@gmail.com
            </Link>
          </div>

          {/* LinkedIn Contact Card */}
          <div className='bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center'>
            <div className='flex justify-center mb-4'>
               <div className='bg-primary/20 w-16 h-16 flex items-center justify-center rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="#2F73F2" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
            </div>
            <h3 className='text-2xl font-bold text-midnight_text dark:text-white mb-2'>Connect on LinkedIn</h3>
            <p className='text-DeepOcean dark:text-white/70 mb-4'>
              Let's connect on LinkedIn to discuss my qualifications and how I can contribute to your team.
            </p>
            <Link
              href='https://www.linkedin.com/in/daniel-legaspi-62a867309/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary text-lg font-semibold hover:underline'
            >
              linkedin.com/in/daniel-legaspi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
