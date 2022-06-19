/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { GoCalendar,GoFlame,GoLightBulb } from "react-icons/go";
import { FaHandsHelping } from "react-icons/fa";
import { BsFillBookFill } from "react-icons/bs";

function Organizations() {
  return (
    <div>
      <div className="px-3 md:lg:xl:px-40   border-t border-b py-20 bg-opacity-10">
        <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border ">
          <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200">
             <GoCalendar />
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
             <a  href='https://github.com/shikha-16/Women-in-Technology#Scholarships-and-Programs-for-Women'> Scholarships</a> 
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Team BrainEdge education is a bunch of highly focused, energetic
              set of people.
            </p>
          </div>

          <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200">
            <GoFlame />
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Best Test preparation for Technical Interviews
              <a href='https://github.com/yangshun/tech-interview-handbook'></a>
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Know where you stand and what next to do to succeed .
            </p>
          </div>

          <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-yellow-500 text-white shadow-lg shadow-yellow-200">
             <GoLightBulb />
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
            Women in Technology Role Models
            <a href='https://github.com/shikha-16/Women-in-Technology#Women-in-Technology-Role-Models'></a>
            </p>
            <p className="mt-2 text-sm text-slate-500">
            Strong role models are leading the charge and the change. 🙌
            </p>
          </div>
          <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-green-500 text-white shadow-lg shadow-green-200">
             <FaHandsHelping />
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
             Hackathons For Women
             <a href='https://github.com/nishapant/Women-in-Tech-Resources#all-women-hackathons'></a>
            </p>
            <p className="mt-2 text-sm text-slate-500">
            All-Women Hackathons
            </p>
          </div>
        
          <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-purple-500 text-white shadow-lg shadow-purple-200">
             <BsFillBookFill />
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
            High School Hackathons
            <a href='https://github.com/nishapant/Women-in-Tech-Resources#all-women-hackathons'></a>
            </p>
            <p className="mt-2 text-sm text-slate-500">
           Hackathons for high School Students
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organizations;
