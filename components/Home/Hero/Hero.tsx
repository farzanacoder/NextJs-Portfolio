'use client'
import Image from 'next/image'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import Typewriter from 'typewriter-effect';
import ParticleBg from './ParticleBg';

const Hero = () => {
  return (
    <div className='relative flex items-center justify-center text-white overflow-hidden flex-col pt-28'>
        <ParticleBg/>
        <div className="relative z-10 flex flex-col items-center" >
            <Image height={150} width={150} alt='hero' src='/heroimage.png' className='rounded-full h-[150px] w-[150px] border-8 border-[#0c0c48aa]'/>
            <h1 className='text-2xl sm:text-4xl md:text-6xl mt-6 text-center font-bold'>Creating web products,<br />brands,<span className='text-cyan-200'> and experiences.</span></h1>
            <h2 className='mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center'>Hi! I&apos;m Farzana - A Passionate 
                <span className='text-cyan-200 font-bold'>
                    <Typewriter
                    options={{
                        strings: ['Frontend Developer' , 'Backend Developer' , 'Web Developer'],
                        autoStart: true,
                        loop: true,
                        delay:75,
                        deleteSpeed:50,
                        wrapperClassName:'pl-2'
                    }}
                    />

                </span>
            </h2>

            <button className='mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium'>
                <span>See my work</span>
                <BsArrowRight className='h-5 w-5 ml-2 inline-block' />
            </button>
        </div>
    </div>
  )
}

export default Hero