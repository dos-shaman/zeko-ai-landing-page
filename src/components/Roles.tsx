import React from 'react'
import { Settings, DollarSign, Tag, Wrench } from 'lucide-react';

const Roles = () => {
    const comp = [
        {
            icon: <Settings />,
            heading: "Technology and Product",
            content: "AI-powered analysis and skill matching, ensuring companies stay ahead with the best minds in technology.",
            color: "bg-gradient-to-tr from-[rgb(239,68,68)] to bg-[rgb(254,202,202)]"
        },
        {
            icon: <DollarSign />,
            heading: "Finance, Accounts & HR",
            content: "Excel at sourcing & auto-interviewing candidates with the intricate blend of analytical and soft skills",
            color: "bg-gradient-to-tr from-[rgb(156,83,249)] to bg-[rgb(230,212,255)]"
        },
        {
            icon: <Tag />,
            heading: "Sales and Support",
            content: "Rely on conversational AI interviews to evaluate interpersonal skills, and the strategic thinking at bulk, before talking to anyone",
            color: "bg-gradient-to-tr from-[rgb(16,185,129)] to bg-[rgb(167,243,208)]"
        },
        {
            icon: <Wrench />,
            heading: "Blue and Gray Collar",
            content: "Precise evaluation, of training effectiveness, in local language, to assess skill acquisition & alignment with operational standards",
            color: "bg-gradient-to-tr from-[rgb(156,83,249)] to bg-[rgb(230,212,255)]"
        },
    ]

    return (
        <div className='bg-[rgb(80,27,136)] pb-40 py-4 text-gray-300 mt-10 text-center'>
            <h1 className='font-bold pt-5 text-3xl'>Talent Acquisition for every role</h1>
            <h4 className='px-[15rem] max-md:p-4 mt-4 ml-44 mr-44'>
                Discover Tailored Talent Acquisition Solutions for Every Role, Designed to Empower Businesses in Streamlining Talent Needs and Accelerating Growth
            </h4>
            <div className='max-md:flex-col px-4 flex justify-around mt-10'>
                {
                    comp.map((info, index) => (
                        <div key={index} className='max-md:mt-3 flex flex-col items-center'>
                            <div className={`flex justify-center items-center ${info.color} p-2 w-[3rem] h-[3rem] rounded-full`}>
                                {info.icon}
                            </div>
                            <h1 className='text-xl font-bold mt-4 text-gray-300'>{info.heading}</h1>
                            <p className='text-center tracking-tight mt-2 text-gray-300 ml-5 mr-5'>{info.content}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Roles
