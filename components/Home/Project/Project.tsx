import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div className='py-16'>
      <h1 className='text-3xl text-center sm:text-4xl font-bold text-white'>
                A small selection of recent <br /> <span className='text-cyan-200'>projects</span>
     </h1>
     <div className='mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 w-[70%]'>
      <div data-aos='fade-up' data-aos-anchor-placement='top-center'>
        <ProjectCard title='Modern Finance Dashboard UI' subtitle='Apps , UI/UX' src='/img.png'/>
      </div>
        <div data-aos-delay='100'data-aos='fade-up' data-aos-anchor-placement='top-center'>
            <ProjectCard title='Modern Finance Dashboard UI' subtitle='Apps , UI/UX' src='/img2.png'/>
        </div>
        <div data-aos-delay='200'data-aos='fade-up' data-aos-anchor-placement='top-center'>
        <ProjectCard title='Modern Finance Dashboard UI' subtitle='Apps , UI/UX' src='/img4.png'/>
        </div>
        <div data-aos-delay='300'data-aos='fade-up' data-aos-anchor-placement='top-center'>
        <ProjectCard title='Modern Finance Dashboard UI' subtitle='Apps , UI/UX' src='/img3.png'/>
        </div>
     </div>
    </div>
  )
}

export default Project
