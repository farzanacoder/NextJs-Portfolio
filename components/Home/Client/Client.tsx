'use client'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ClientCard from './ClientCard';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const Client = () => {
  return (
    <div className='py-16'>
      <h1 className='text-2xl xl:text-5xl md:text-4xl text-center font-bold text-white'>
                Kind words from satisfied <br /> <span className='text-cyan-200'>clients</span>
     </h1>
     <div className='mt-16 mx-auto w-[70%]'>
            <Carousel
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            >
            <ClientCard image='/client.png' name='John Doe' role='UI UX Designer'/>
            <ClientCard image='/client1.png' name='John Doe' role='UI UX Designer'/>
            <ClientCard image='/client2.png' name='John Doe' role='UI UX Designer'/>
           </Carousel>
     </div>
    </div>
  )
}

export default Client
