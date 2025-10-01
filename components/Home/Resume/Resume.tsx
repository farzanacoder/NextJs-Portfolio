import React from 'react'
import ResumeCard from './ResumeCard'
import { FaDatabase, FaReact } from 'react-icons/fa'
import { FaCodepen } from 'react-icons/fa6'
import { BiBadge } from 'react-icons/bi'

const Resume = () => {
  return (
    <div className='py-16 mt-4'>
      <div className='grid mx-auto w-[90%] sm:w-[70%] grid-cols-1 md:grid-cols-2 gap-10'>
        <div>
            <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                My Work <span className='text-cyan-200'>Experience</span>
            </h1>
            <div className='mt-10'>
                <ResumeCard Icon={FaCodepen} role='Front-End Developer'/>
                <ResumeCard Icon={FaReact} role='Full-Stack Developer'/>
                <ResumeCard Icon={FaDatabase} role='Backend Developer'/>
            </div>
        </div>


        <div>
            <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                My  <span className='text-cyan-200'>Education</span>
            </h1>
            <div className='mt-10'>
                <ResumeCard Icon={BiBadge} role='Design Institute of Technology' date='Jan 2023 - Dec 2024'/>
                <ResumeCard Icon={FaReact} role='Bachelor in Computer Science' date='Jan 2023 - Dec 2024'/>
                <ResumeCard Icon={FaDatabase} role='Certificate in Digital Marketing' date='Jan 2023 - Dec 2024'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
