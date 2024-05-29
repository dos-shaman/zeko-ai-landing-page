import React from 'react'
import dynamic from 'next/dynamic'

const page = () => {
  const Header = dynamic(() => import('@/components/Header'))
  const Customers = dynamic(() => import('@/components/Customers'))
  const ProductSection  = dynamic(() => import('@/components/ProductSection'))
  const AdvSection = dynamic(() => import('@/components/AdvSection'))
  const Roles = dynamic(() => import('@/components/Roles'))
  const ScrollingFeedback = dynamic(() => import('@/components/ScrollingFeedback'))
  const Demo = dynamic(() => import('@/components/Demo'))
  const Sponsors = dynamic(() => import('@/components/Sponsors'))

  return (
    <div>
      <Header/>
      <Customers/>
      <ProductSection/>
      <AdvSection/>
      <Roles/>
      <ScrollingFeedback/>
      <Demo/>
      <Sponsors/>
    </div>
  )
}

export default page