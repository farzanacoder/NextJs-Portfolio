import Image from 'next/image';
import React from 'react'

type Props={
    image: string;
    title: string;
}
const BlogCard = ({image,title}: Props) => {
  return (
    <div>
      <Image height={500} width={500} src={image} className='object-cover' alt='blog'/>
      <p className='mt-4 font-medium text-gray-500 text-base sm:text-lg'>5 July 2025</p>
      <h1 className=' text-white hover:underline mt-5 text-lg sm:text-xl font-bold cursor-pointer transition-all duration-300 hover:text-cyan-300'>{title}</h1>
      <div className='mt-4 flex gap-2 items-center'>
        <p className='px-4 py-1.5 bg-blue-950 text-white text-sm sm:text-base font-bold rounded-full'>React</p>
        <p className='px-4 py-1.5 bg-blue-950 text-white text-sm sm:text-base font-bold rounded-full'>Next Js</p>
        <p className='px-4 py-1.5 bg-blue-950 text-white text-sm sm:text-base font-bold rounded-full'>Tailind</p>
      </div>
    </div>
  )
}

export default BlogCard
