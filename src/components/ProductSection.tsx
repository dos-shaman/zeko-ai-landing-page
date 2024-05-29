import Image from 'next/image'
import React from 'react'

const ProductSection = () => {
  return (
    <div className='bg-[rgb(57,45,130)]  mt-[6rem] p-3 text-white'>
      <h1 className='text-center font-bold text-4xl mt-8'>Driving Impactful Business Growth with a</h1>
      <div className='flex justify-center mt-10'>
        <div className='bg-[rgb(198,203,255)] text-[rgb(57,45,130)] text-center font-bold text-2xl inline-block px-4 py-2'>
          Powerful Suite of Products
        </div>
      </div>
      <Image src={"/products-frame.png"} alt='Products' width={1200} height={600} className='mx-auto mt-4' />
    </div>

  )
}

export default ProductSection
