import React, { useEffect, useState } from 'react';

import Cards from './Cards';
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-32 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl text-cyan-700">
            COURSES FOR YOU{" "}
            {/* <span className="text-cyan-700"> Here! :)</span> */}
          </h1>

          <p className="mt-10 text-2xl font-semibold text-pink-600 mb-3">We Provide Coaching Classes For Following Courses.</p>
          <div className="mt-3 p-2 font-semibold text-pink-600 mb-3 border ">
              <h1 className="mx-6 text-2xl font-semibold text-cyan-700 ">Courses By Class</h1>             
            </div>

          <div className=" mt-6 max-w-screen-2xl container mx-auto md:px-20 px-2 flex flex-col md:flex-row">
         

            <div className="w-full md:w-1/2 py-2 border mx-2 mb-2">
              <h1 className="mx-6 text-2xl font-semibold text-pink-600 ">8th</h1>
              <p>ALL SUBJECTS</p>
            </div>

            <div className="w-full md:w-1/2 border mx-2 py-2 md:px-2 mb-2">
              <h1 className="mx-6 text-2xl font-semibold text-pink-600">9th</h1>
              <p>MATHEMATICS <span className="text-pink-500 font-bold "><span className="text-pink-500 font-bold"> | </span></span> SCIENCE <span className="text-pink-500 font-bold"><span className="text-pink-500 font-bold"> | </span></span> ENGLISH<span className="text-pink-500 font-bold"> | </span>SOCIAL SCIENCE</p>
            </div>

            <div className="w-full md:w-1/2 border mx-2 py-2 mb-2">
              <h1 className="mx-6 text-2xl font-semibold text-pink-600">10th</h1>
              <p>MATHEMATICS <span className="text-pink-500 font-bold "><span className="text-pink-500 font-bold"> | </span></span> SCIENCE <span className="text-pink-500 font-bold"><span className="text-pink-500 font-bold"> | </span></span> ENGLISH<span className="text-pink-500 font-bold"> | </span>SOCIAL SCIENCE</p>
            </div>

            <div className="w-full md:w-1/2 border mx-2 py-2 mb-2">
              <h1 className="mx-6 text-2xl font-semibold text-pink-600">11th</h1>
              <p>MEDICAL<span className="text-pink-500 font-bold"> | </span>NON-MEDICAL<span className="text-pink-500 font-bold"> | </span>COMMERCE</p>
            </div>

            <div className="w-full md:w-1/2 border mx-2 py-2 mb-2">
              <h1 className="mx-6 text-2xl font-semibold text-pink-600">12th</h1>
              <p>MEDICAL<span className="text-pink-500 font-bold"> | </span>NON-MEDICAL<span className="text-pink-500 font-bold"> | </span>COMMERCE</p>
            </div>
          </div>




          <div className="mx-3 mt-6 text-2xl font-semibold text-cyan-700 text-left px-3 border py-2">
            Courses By Foundation:
          </div>
          <div className=" mt-6 max-w-screen-2xl container mx-auto md:px-20 px-2 flex flex-col md:flex-row">

            <div className="w-full md:w-1/2 py-2 border mx-2 mb-2">
              <h1 className="mx-6 text-2xl font-semibold text-pink-600 ">JEE</h1>
              <p>ALL SUBJECTS</p>
            </div>

            <div className="w-full md:w-1/2 border mx-2 py-2 md:px-2 mb-2">
              <h1 className="mx-6 text-2xl font-semibold text-pink-600">NEET</h1>
              <p>ALL SUBJECTS</p>
            </div>

            <div className="w-full md:w-1/2 border mx-2 py-2 mb-2">
              <h1 className="mx-6 text-2xl font-semibold text-pink-600">NTSE</h1>
              <p>ALL SUBJECTS</p>
            </div>

          </div>




          <Link to="/">
            <button className=" mt-6 text-xl bg-cyan-600 text-white mx-5 px-7 py-2 rounded-md hover:bg-cyan-800 duration-300">
              Back
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Course;