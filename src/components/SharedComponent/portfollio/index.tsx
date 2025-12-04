import React from 'react'
import PortfolioCard from '@/components/SharedComponent/portfollio/Portfolio-card'

const Portfolio = () => {
  return (
    <section id='portfolio' className='dark:bg-darkmode py-16 md:py-24'>
      <div className='text-center px-8'>
        <h2
          className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text text-center pt-7 pb-4 md:w-4/6 w-full m-auto dark:text-white'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          My Projects
        </h2>
        <div className='pb-14 inline-flex'>
          <p className='text-lg font-normal text-grey max-w-2xl dark:text-white/70'>
            A showcase of my key projects, demonstrating my expertise in full-stack development, IoT, and system design.
          </p>
        </div>
      </div>
      <PortfolioCard />
    </section>
  )
}

export default Portfolio
