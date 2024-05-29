"use client";
import React, { useRef } from "react";
import EffortsComp from "./EffortsComp";

const ScrollingFeedback = () => {
  const data = {
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    name: "Roshinee",
    role: "Senior Engineering Manager",
  };


  return (
    <div className="relative flex justify-between max-md:flex-col container">
      <div className="flex flex-col justify-center items-center md:px-10 max-w-6xl">
        <div className="text-start mt-4">
          <h1 className="text-[rgb(79,51,204)] md:text-5xl text-3xl font-bold mb-2 ">
            Effortless Acquisition
          </h1>
          <div className="flex gap-2 my-5">
            <div className="p-2 text-sm inline-block">
              <span className="text-[rgb(79,51,204)] text-3xl font-bold">86%</span> FASTER
            </div>
            <div className="p-2 text-sm inline-block">
              <span className="text-[rgb(79,51,204)] text-3xl font-bold">40%</span> RESPONSE RATE
            </div>
            <div className="p-2 text-sm inline-block">
              <span className="text-[rgb(79,51,204)] text-3xl font-bold">100%</span> BETTER THAN HR
              INTERN
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 mt-20 max-md:px-0 max-md:mt-0 max-md:w-full">
        <div className="scrolling-container">
          <div className="scrolling-content">
            <div className="flex gap-3 max-md:flex-col">
              <div>
                <EffortsComp
                  name={data.name}
                  role={data.role}
                  content={data.content}
                  className=""
                  logo={"/airmeet.png"}
                />
              </div>
              <div>
                <EffortsComp
                  name={data.name}
                  role={data.role}
                  content={data.content}
                  className="mt-6"
                  logo={"/airmeet.png"}
                />
              </div>
            </div>
            <div className="flex gap-3 max-md:flex-col">
              <div>
                <EffortsComp
                  name={data.name}
                  role={data.role}
                  content={data.content}
                  className="mt-2"
                  logo={"/airmeet.png"}
                />
              </div>
              <div>
                <EffortsComp
                  name={data.name}
                  role={data.role}
                  content={data.content}
                  className="mt-4"
                  logo={"/airmeet.png"}
                />
              </div>
            </div>
            <div className="flex gap-3 max-md:flex-col">
              <div>
                <EffortsComp
                  name={data.name}
                  role={data.role}
                  content={data.content}
                  className="mt-2"
                  logo={"/airmeet.png"}
                />
              </div>
              <div>
                <EffortsComp
                  name={data.name}
                  role={data.role}
                  content={data.content}
                  className="mt-4"
                  logo={"/airmeet.png"}
                />
              </div>
              
            
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </div>
  );
};

export default ScrollingFeedback;
