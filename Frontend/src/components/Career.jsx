import React from 'react'
import Image04 from "../../public/Image04.jpeg";
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import "./MyStyle.css";

function Career() {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className="mt-36 items-center justify-center text-center">
                    <h1 className="mx-5 text-2xl font-semibold md:text-4xl">
                        YOUR CAREER OPTIONS{" "}
                        <span className="text-cyan-600"> Here! :)</span>
                    </h1>
                    <p className="mt-6">

                    </p>


                    <p className="mt-10 text-2xl font-semibold text-pink-600 ">We have Job options for you...Hurrey!!</p>
          <div className="mx-3 mt-6 text-2xl font-semibold text-cyan-700 text-left px-3 border py-2">
            JOB VACANCY:
          </div>
          <div className=" mt-6 max-w-screen-2xl container mx-auto md:px-20 px-2 flex flex-col md:flex-row">

            <div className="w-full md:w-1/2 py-2 border mx-2 ">
              <h1 className="mx-6 text-2xl font-semibold text-pink-600 ">RECEPTIONIST</h1>
              <p>FEMAL STAFF: 10:00 AM to 02:00 PM</p>
            </div>

            <div className="w-full md:w-1/2 border mx-2 py-2 md:px-2">
              <h1 className="mx-6 text-2xl font-semibold text-pink-600">FACULTY CHEMISTRY</h1>
              <p>CHEMISTRY : TGT</p>
            </div>

            <div className="w-full md:w-1/2 border mx-2 py-2 md:px-2">
              <h1 className="mx-6 text-2xl font-semibold text-pink-600">FACULTY CHEMISTRY</h1>
              <p>CHEMISTRY : PGT</p>
            </div>

            <div className="w-full md:w-1/2 border mx-2 py-2 md:px-2">
              <h1 className="mx-6 text-2xl font-semibold text-pink-600">FACULTY Social Science</h1>
              <p>S.St. : TGT</p>
            </div>

            <div className="w-full md:w-1/2 border mx-2 py-2">
              <h1 className="mx-6 text-2xl font-semibold text-pink-600">Offiice Boy</h1>
              <p>MATHEMATICS<span className="text-pink-500 font-bold"> | </span>PHYSICS<span className="text-pink-500 font-bold"> | </span>CHEMISTRY<span className="text-pink-500 font-bold"> | </span>BIOLOGY<span className="text-pink-500 font-bold"> | </span>ENGLISH<span className="text-pink-500 font-bold"> | </span>ACCOUNTS</p>
            </div>
          </div>




          <div className="mx-3 mt-6 text-2xl font-semibold text-cyan-700 text-left px-3 border py-2">
            Courses By Foundation:
          </div>
          <div className=" mt-6 max-w-screen-2xl container mx-auto md:px-20 px-2 flex flex-col md:flex-row">

            <div className="w-full md:w-1/2 py-2 border mx-2 ">
              <h1 className="mx-6 text-2xl font-semibold text-pink-600 ">JEE</h1>
              <p>ALL SUBJECTS</p>
            </div>

            <div className="w-full md:w-1/2 border mx-2 py-2 md:px-2">
              <h1 className="mx-6 text-2xl font-semibold text-pink-600">NEET</h1>
              <p>MATHEMATICS <span className="text-pink-500 font-bold "><span className="text-pink-500 font-bold"> | </span></span> PHYSICS <span className="text-pink-500 font-bold"><span className="text-pink-500 font-bold"> | </span></span> CHEMISTRY<span className="text-pink-500 font-bold"> | </span>BIOLOGY<span className="text-pink-500 font-bold"> | </span>ENGLISH</p>
            </div>

            <div className="w-full md:w-1/2 border mx-2 py-2">
              <h1 className="mx-6 text-2xl font-semibold text-pink-600">NTSE</h1>
              <p>MATHEMATICS<span className="text-pink-500 font-bold"> | </span>PHYSICS<span className="text-pink-500 font-bold"> | </span>CHEMISTRY<span className="text-pink-500 font-bold"> | </span>BIOLOGY<span className="text-pink-500 font-bold"> | </span>ENGLISH</p>
            </div>

          </div>

















                    <Link to="/">
                    <button className=" text-xl bg-cyan-600 text-white mx-5 px-6 py-2 rounded-md hover:bg-cyan-800 duration-300">
                        Back
                    </button>
                    </Link> 
                </div>
            </div>
            <div className="mt-6 max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row ">
                <div className="row w100">


                    <div className="col-md-3 mb1">
                        <div className='boxdiv tac'>
                            <h1 className='heading tac'>JOB VACANCY 1</h1>
                            <p className='p tac mt1 mb1'>
                                Requirement for Receptionist.
                            </p>
                            <hr className='hr mt1 mb1'></hr>
                            <div className='box_img'>
                                <img src={Image04} alt="" />
                            </div>
                            <hr className='hr mt2 mb2'></hr>
                            <button type='text' className='button' >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Career;