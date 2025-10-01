import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div className='py-16'>
      <h1 className='text-3xl text-center sm:text-4xl font-bold text-white'>
                A small selection of recent <br /> <span className='text-cyan-200'>projects</span>
     </h1>
     <div className='mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 w-[70%]'>
        <ProjectCard title='Modern Finance Dashboard UI' subtitle='Apps , UI/UX' src='/img.png'/>
        <ProjectCard title='Modern Finance Dashboard UI' subtitle='Apps , UI/UX' src='/img2.png'/>
        <ProjectCard title='Modern Finance Dashboard UI' subtitle='Apps , UI/UX' src='/img4.png'/>
        <ProjectCard title='Modern Finance Dashboard UI' subtitle='Apps , UI/UX' src='/img3.png'/>
     </div>
    </div>
  )
}

export default Project
