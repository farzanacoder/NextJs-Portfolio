import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className='py-16 mt-22'>
      <h1 className='text-center text-2xl md:text-4xl lg:text-5xl font-bold text-white w-[40%] mx-auto'>Colleborate with brand and agencies to create impactful results</h1>
      <div className='grid mx-auto w-[90%] sm:w-[70%] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20 items-center'>
        <div  data-aos='fade-right' data-aos-anchor-placement='top-center'>
            <ServiceCard icon='/service1.png' name='UI and UX' description='Designing interfaces that are intuitive, efficient, and enjoyable to use.'/>
        </div>
        <div  data-aos='fade-right' data-aos-delay='100' data-aos-anchor-placement='top-center'>
           <ServiceCard icon='/service.png' name='Web and Mobile App' description='Designing interfaces that are intuitive, efficient, and enjoyable to use.'/>
        </div>
        <div data-aos='fade-right' data-aos-delay='200' data-aos-anchor-placement='top-center'>
             <ServiceCard icon='/service2.png' name='Design & Creative' description='Designing interfaces that are intuitive, efficient, and enjoyable to use.'/>
        </div>
        <div data-aos='fade-right' data-aos-delay='300' data-aos-anchor-placement='top-center'>
          <ServiceCard icon='/service3.png' name='Development' description='Designing interfaces that are intuitive, efficient, and enjoyable to use.'/>
        </div>
      </div>
    </div>
  )
}

export default Services
