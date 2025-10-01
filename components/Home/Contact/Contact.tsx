import React from 'react'
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi'
import { FaFacebook, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='py-16'>
      <div className="grid grid-cols-1 gap-10 items-center lg:grid-cols-2 mx-auto w-[90%] md:w-[80%] lg:w-[70%]">
        <div>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200'>Schedule a call with me to see if I can help</h1>
            <p className='text-gray-400 mt-6
            text-base sm:text-lg'>Reach out to me today and let’s discuss how I can help you achieve your goals.</p>
            <div className='mt-7'>
                <div className='flex items-center space-x-3 mb-4'>
                    <BiPhone className='h-9 w-9 text-cyan-300'/>
                    <p className='text-xl font-bold text-gray-400'>+9843582345</p>
                </div>
                <div className='flex items-center space-x-3 mb-4'>
                    <BiEnvelope className='h-9 w-9 text-cyan-300'/>
                    <p className='text-xl font-bold text-gray-400'>hello@example.com</p>
                </div>
                <div className='flex items-center space-x-3 mb-4'>
                    <BiMap className='h-9 w-9 text-cyan-300'/>
                    <p className='text-xl font-bold text-gray-400'>Dhaka, Bangladesh</p>
                </div>
            </div>

            <div className="flex items-center mt-8 space-x-3">
                <div className='h-14 w-14 bg-blue-950/60 rounded-full items-center flex justify-center cursor-pointer hover:bg-blue-800 transition-all duration-300 flex-col'>
                    <FaFacebookF className='text-white h-6 w-6'/>
                </div>
                <div className='h-14 w-14 bg-blue-950/60 rounded-full items-center flex justify-center cursor-pointer hover:bg-red-600 transition-all duration-300 flex-col'>
                    <FaYoutube className='text-white h-6 w-6'/>
                </div>
                <div className='h-14 w-14 bg-blue-950/60 rounded-full items-center flex justify-center cursor-pointer hover:bg-sky-400 transition-all duration-300 flex-col'>
                    <FaTwitter className='text-white h-6 w-6'/>
                </div>
                <div className='h-14 w-14 bg-blue-950/60 rounded-full items-center flex justify-center cursor-pointer hover:bg-pink-500 transition-all duration-300 flex-col'>
                    <FaInstagram className='text-white h-6 w-6'/>
                </div>
            </div>
        </div>

            <div className='md:p-10 p-5 bg-[#131332] rounded-lg'>
                <input type="text" placeholder='Name' className='px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'/>
                <input type="email" placeholder='Email Address' className='px-4 py-3.5 my-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'/>
                <input type="text" placeholder='Mobile Number' className='px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'/>
                <textarea name="msg" id="" cols="30" rows="10" placeholder='Your Message' className='px-4 py-3.5 mt-6 bg-[#363659] h-[10rem] text-white outline-none rounded-md w-full placeholder:text-white/70'></textarea>
                <button className='mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all cursor-pointer text-white rounded-full duration-300'>Send Message</button>
            </div>
      </div>
    </div>
  )
}

export default Contact
