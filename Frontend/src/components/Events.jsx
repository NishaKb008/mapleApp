import React from 'react'
import Image01 from "../../public/Image01.jpeg";
import Image02 from "../../public/Image02.jpeg";
import Image04 from "../../public/Image04.jpeg";
import Image05 from "../../public/Image05.jpeg";
import Image06 from "../../public/Image06.jpeg";
import Image07 from "../../public/Image07.jpeg";
import Image08 from "../../public/Image08.jpeg";
import Slider from 'react-slick';
import "./MyStyle.css";

function Events() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-36 items-center justify-center text-center">
          <h1 className="mx-5 text-2xl font-semibold md:text-4xl">
            Scholarship Test Prize Distribution{" "}
            <span className="text-cyan-600"> Here! :)</span>
          </h1>
          <p className="mt-6">

          </p>
          <button className=" text-xl bg-cyan-600 text-white mx-5 px-6 py-2 rounded-md hover:bg-cyan-800 duration-300">
            Back
          </button>
        </div>

        <div className="mt-6 max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row ">
          <div className="row w100">


            <div className="col-md-3 mb1">
              <div className='boxdiv tac'>
                <h1 className='heading tac'>Scholarship </h1>
                <p className='p tac mt1 mb1'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ut elit tellus.
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


            <div className="col-md-3 mb1">
              <div className='boxdiv tac'>
                <h1 className='heading tac'>Scholarship </h1>
                <p className='p tac mt1 mb1'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ut elit tellus. Ut elit tellus.
                </p>
                <hr className='hr mt1 mb1'></hr>
                <div className='box_img'>
                  <img src={Image05} alt="" />
                </div>
                <hr className='hr mt2 mb2'></hr>
                <button type='text' className='button'>Submit</button>
              </div>
            </div>


            <div className="col-md-3 mb1">
              <div className='boxdiv tac'>
                <h1 className='heading tac'>Scholarship </h1>
                <p className='p tac mt1 mb1'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ut elit tellus. Ut elit tellus.
                </p>
                <hr className='hr mt1 mb1'></hr>
                <div className='box_img'>
                  <img src={Image06} alt="" />
                </div>
                <hr className='hr mt2 mb2'></hr>
                <button type='text' className='button'>Submit</button>
              </div>
            </div>


            <div className="col-md-3 mb1">
              <div className='boxdiv tac'>
                <h1 className='heading tac'>Scholarship </h1>
                <p className='p tac mt1 mb1'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ut elit tellus. Ut elit tellus.
                </p>
                <hr className='hr mt1 mb1'></hr>
                <div className='box_img'>
                  <img src={Image07} alt="" />
                </div>
                <hr className='hr mt2 mb2'></hr>
                <button type='text' className='button'>Submit</button>
              </div>
            </div>


            <div className="col-md-3 mb1">
              <div className='boxdiv tac'>
                <h1 className='heading tac'>Scholarship </h1>
                <p className='p tac mt1 mb1'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ut elit tellus. Ut elit tellus.
                </p>
                <hr className='hr mt1 mb1'></hr>
                <div className='box_img'>
                  <img src={Image08} alt="" />
                </div>
                <hr className='hr mt2 mb2'></hr>
                <button type='text' className='button'>Submit</button>
              </div>
            </div>


            <div className="col-md-3 mb1">
              <div className='boxdiv tac'>
                <h1 className='heading tac'>Scholarship </h1>
                <p className='p tac mt1 mb1'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ut elit tellus. Ut elit tellus.
                </p>
                <hr className='hr mt1 mb1'></hr>
                <div className='box_img'>
                  <img src={Image07} alt="" />
                </div>
                <hr className='hr mt2 mb2'></hr>
                <button type='text' className='button'>Submit</button>
              </div>
            </div>


            <div className="col-md-3 mb1">
              <div className='boxdiv tac'>
                <h1 className='heading tac'>Scholarship </h1>
                <p className='p tac mt1 mb1'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ut elit tellus. Ut elit tellus.
                </p>
                <hr className='hr mt1 mb1'></hr>
                <div className='box_img'>
                  <img src={Image08} alt="" />
                </div>
                <hr className='hr mt2 mb2'></hr>
                <button type='text' className='button'>Submit</button>
              </div>
            </div>


            <div className="col-md-3 mb1">
              <div className='boxdiv tac'>
                <h1 className='heading tac'>Scholarship </h1>
                <p className='p tac mt1 mb1'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ut elit tellus. Ut elit tellus.
                </p>
                <hr className='hr mt1 mb1'></hr>
                <div className='box_img'>
                  <img src={Image07} alt="" />
                </div>
                <hr className='hr mt2 mb2'></hr>
                <button type='text' className='button'>Submit</button>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}
export default Events;