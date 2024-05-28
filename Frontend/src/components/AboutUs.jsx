import React from 'react'
import Image04 from "../../public/Image04.jpeg";
import Slider from 'react-slick';
import "./MyStyle.css";

function AboutUs() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className="mt-36 items-center justify-center text-center">
                    <h1 className="mx-5 text-2xl font-semibold md:text-4xl">
                        WHO WE ARE ?{" "} <br />
                        <span className="text-cyan-600"> HOW WE ESTABLISHED THIS ORGANIZATION.</span>
                    </h1>
                    <p className="mt-6">

                    </p>
                    <button className=" text-xl bg-cyan-600 text-white mx-5 px-6 py-2 rounded-md hover:bg-cyan-800 duration-300">
                        Back
                    </button>
                </div>
            </div>
            <div className="mt-6 max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row ">
                <div className="row w100">


                    <div className="col-md-3 mb1">
                        <div className='boxdiv tac'>
                            <h1 className='heading tac'>OUR GOAL 1 </h1>
                            <p className='p tac mt1 mb1'>
                                Education For All.
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

export default AboutUs