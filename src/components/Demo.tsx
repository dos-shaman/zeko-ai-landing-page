import React from 'react'
import { Button } from './ui/button'

const Demo = () => {
  return (
    <div className="bg-[url('/banner.png')] mt-10 mb-10 bg-cover bg-center h-[8rem] flex items-center justify-between px-5">  
      <h1 className="text-white ml-10 text-4xl font-bold">Start a new, effortless hiring adventure now.</h1>
      <div className='flex gap-4'>
        <Button className='bg-[rgb(70,54,245)] text-xl mr-10'>Sign up</Button>
        <Button variant={"outline"} className='border-[rgb(163,169,254)] text-xl bg-transparent text-white mr-10 hover:text-black'>Book A Demo</Button>

      </div>
    </div>
  )
}

export default Demo
