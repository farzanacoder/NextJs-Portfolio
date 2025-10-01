import React from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <div className='py-16'>
      <h1 className='text-2xl xl:text-5xl md:text-4xl text-center font-bold text-white'>
                My latest  <span className='text-cyan-200'>Blogs</span>
     </h1>
     <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto gap-10 items-center w-[70%] mt-16">
            <BlogCard image='/blog.png' title='Learn how to build an amazing portfolio website using next js'/>
            <BlogCard image='/blog1.png' title='Learn how to build an amazing portfolio website using next js'/>
            <BlogCard image='/blog2.png' title='Learn how to build an amazing portfolio website using next js'/>
     </div>
    </div>
  )
}

export default Blog
