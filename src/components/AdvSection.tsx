import React from 'react'
import ProdCards from './ProdCards'
import { Button } from './ui/button'
import { AreaChart, Users, UserSearch, UserPlus } from 'lucide-react';

const AdvSection = () => {
  return (
    <div className='flex justify-between max-md:flex-col max-md:container'>
        <div className='my-5 flex flex-col justify-center items-center md:px-10'>
          <div className='text-start'>
            <h1 className='text-[rgb(79,51,204)] md:text-4xl ml-40 text-2xl font-bold mb-2'>The Unmatched Advantage with Zeko AI</h1>
            <h5 className='font-bold text-gray-500 ml-40 mb-3'>Explore the Acquisition intelligence in action</h5>
            <Button className='bg-[rgb(70,54,245)] max-md:w-full ml-40 hover:bg-[rgb(70,54,245)]'>Get Started 🔥</Button>
          </div>
        </div>
        <div className='px-20 mt-20 max-md:px-0 max-md:mt-0 max-md:w-full'>
          <div className='flex gap-3 max-md:flex-col'>
            <ProdCards 
                icon={<AreaChart className='bg-[rgb(156,171,253)] text-white items-center p-2 flex justify-center h-8 w-8 rounded-full' />} 
                heading='Broaden your Talent Pool' 
                content='Uncover hidden talent pool instantly as AI pinpoints & reachout to qualified candidates beyond your usual networks.' 
                className='bg-[rgb(238,240,255)] border-none hover:scale-105 cursor-pointer'
            />
            <ProdCards 
                icon={<Users className='bg-[rgb(203,166,253)] text-white items-center p-2 flex justify-center h-8 w-8 rounded-full' />} 
                heading='Stop Spending Hours on Irrelevant Profiles' 
                content='Utilize advanced AI algorithms, from sourcing to interviews, ensuring that candidates who move forward are those best matched to the job & culture' 
                className='md:mt-4 bg-[rgb(249,244,255)] border-none hover:scale-105 cursor-pointer'
            />
          </div>
          <div className='flex gap-3 max-md:flex-col'>
            <ProdCards 
                icon={<UserSearch className='bg-[rgb(203,166,253)] text-white items-center p-2 flex justify-center h-8 w-8 rounded-full' />} 
                heading='Faster Hiring with AI Avatars' 
                content='AI Avatars automate key tasks, speeding up the hiring process by screening and interviewing candidates, allowing HR teams to focus on strategic decisions' 
                className='md:mt-2 mt-2 bg-[rgb(241,232,254)] hover:scale-105 cursor-pointer'
            />
            <ProdCards 
                icon={<UserPlus className='bg-[rgb(156,171,253)] text-white items-center p-2 flex justify-center h-8 w-8 rounded-full' />} 
                heading='Data-Driven Insights for Key Decisions' 
                content='Leverage powerful talent analytics for insightful hiring decisions, improving your time to hire and overall return on investment.' 
                className='md:mt-4 bg-[rgb(221,228,254)] hover:scale-105 cursor-pointer'
            />
          </div>
        </div>
     </div>
  )
}

export default AdvSection
