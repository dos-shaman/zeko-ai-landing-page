"use server"
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { Input } from './ui/input'

const Header = () => {
  return (
    <div className='flex justify-between max-md:flex-col-reverse px-4'>
        <div className='max-w-4xl mt-10 md:p-8 p-4 max-md:w-full'>
            <h1 className='text-5xl max-md:text-3xl text-[rgb(79,51,204)] font-bold'>
                Intelligent Automation in Recruitment
            </h1>
            <h2 className='text-[rgb(156,83,249)] text-2xl mt-4'>
                Experience the Future of Hiring with AI-Powered Precision and Speed
            </h2>
            <button className='hover:bg-inherit mt-10'>
                <Image src={"/product-button.svg"} alt='button' height={60} width={300}/>
                <div className='flex gap-3 mt-10 items-center'>
                    <Input placeholder='Enter your email' className='w-[25rem] max-md:w-full'/>
                    <Button className='bg-[rgb(70,54,245)] hover:bg-[rgb(70,54,245)]'>Sign up</Button>
                </div>
            </button>
        </div>
        <Image src={"/header-photo.webp"} alt="logo" height={600} width={600} className='mr-10' />
    </div>
  )
}

export default Header
