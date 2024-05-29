import Image from 'next/image'
import React from 'react'

const Sponsors = () => {
  return (
    <div className='my-5 max-md:px-4 mb-5'>
        <h1 className='text-center text-[rgb(57,45,130)] text-3xl font-bold'>Backed By</h1>
        <Image src={'/backed-by.png'} alt='Sponsors' height={200} width={500} className='mx-auto mt-5 mb-5 py-4'/>
    </div>
  )
}

export default Sponsors