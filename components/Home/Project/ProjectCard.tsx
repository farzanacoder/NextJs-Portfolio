import Image from 'next/image'
import React from 'react'

type Props={
    src: string;
    title: string;
    subtitle: string;
}

const ProjectCard = ({src,title,subtitle}: Props) => {
  return (
    <div>
         <Image height={650} alt='img' src={src} width={800}/>
            <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white '>{title}</h1> 
            <h1 className='pt-4 font-semibold text-white/80 '>{subtitle}</h1> 
        </div>
  )
}

export default ProjectCard
