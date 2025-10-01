import React from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Resume from './Resume/Resume'
import Project from './Project/Project'
import Skills from './Skills/Skills'
import Client from './Client/Client'
import Blog from './Blog/Blog'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Services/>
      <Resume/>
      <Project/>
      <Skills/>
      <Client/>
      <Blog/>
    </div>
  )
}

export default Home