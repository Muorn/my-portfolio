import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { portfolioinfo } from '@/app/api/data'

const PortfolioCard = () => {
  return (
    <div id='portfolio-gallery' className='dark:bg-darkmode py-12 md:py-20'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {portfolioinfo.map((item, index) => (
            <Link key={index} href={`/portfolio/${item.slug}#interactive-demo`} passHref>
              <div className="group relative overflow-hidden rounded-xl bg-white/50 dark:bg-darklight/50 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
                <div className="absolute inset-0 bg-gradient-to-r from-gradient-start to-gradient-end opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
                <div className="relative w-full aspect-square overflow-hidden rounded-t-xl">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    layout="fill"
                    objectFit="cover"
                    className='group-hover:scale-110 transition-transform duration-500 ease-in-out'
                  />
                </div>
                <div className="p-6 relative">
                  <h4 className='text-2xl font-bold font-heading text-midnight_text dark:text-white mb-2 group-hover:text-primary transition-colors duration-300'>
                    {item.title}
                  </h4>
                  <p className='text-lg text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300'>
                    {item.info}
                  </p>
                  <span className="mt-4 inline-block text-primary group-hover:underline transition-all duration-300 font-semibold">
                    View Project <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard;