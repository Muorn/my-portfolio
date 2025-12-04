'use client'
import { getImgPath } from '@/utils/image'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='relative md:pt-44 pt-28 bg-white  dark:bg-darklight bg-cover text-white'>
      <div className='container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-4 relative z-10'>
        <div
          className='md:col-span-6 col-span-12 p-4 md:px-4 px-0 space-y-4 flex flex-col items-start justify-center'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <div className='flex gap-2 items-center'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
              Daniel Xavier B. Legaspi
            </span>
          </div>
          <h1 className='text-midnight_text font-bold dark:text-white text-4xl  md:text-5xl md:leading-[1.15]'>
            Welcome to My Portfolio
          </h1>
          <p className='text-grey dark:text-white/70 text-xl font-semibold'>
            A highly adaptable and curious engineer, passionate about continuous learning and exploring new technologies.
          </p>
          <Link
            href='/resume'
            className='py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 px-8'>
            View My Resume
          </Link>
        </div>

        <div className="md:col-span-6 col-span-12 relative flex items-center justify-center">
          <Image
            src={getImgPath('/images/profile/graduation_pic.jfif')}
            alt='Daniel Legaspi'
            width={350}
            height={350}
            quality={100}
            className='rounded-full'
            style={{ width: '350px', height: '350px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
