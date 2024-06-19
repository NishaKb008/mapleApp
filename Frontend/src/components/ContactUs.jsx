import React, { useState } from 'react'
import Image04 from "../../public/Image04.jpeg";
import Slider from 'react-slick';
import "./MyStyle.css";
"use client";
import banner from "../../public/Banner.jpg"

function ContactUs() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Full Name:" + fullname);
        console.log("Email:" + email);
        console.log("Message:" + message);
    };

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className="mt-36 items-center justify-center text-center">
                    <h1 className="mx-5 text-2xl font-semibold md:text-4xl">
                        CONTACT US {" "}
                        {/* <span className="text-cyan-600"> Here! :)</span> */}
                    </h1>
                    <p className="mt-3">
                        Please fill in the form below
                    </p>

                    {/* <button className=" text-xl bg-cyan-600 text-white mx-5 px-6 py-2 rounded-md hover:bg-cyan-800 duration-300">
                        Back
                    </button> */}
                </div>
            </div>

            {/* LEft Part */}
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-8">
                <div className="w-full md:w-1/2 border ml-6 mr-6">
                    <img src={banner} className="w-92 h-92" alt="" />
                </div>


                {/* Right Part */}
                <div className="w-full md:w-1/2">
                    <form
                        onSubmit={handleSubmit}
                        className=" py-4 mt-1 ml-8 mr-8 border flex flex-col gap-5 ">
                        <div className="ml-3 mr-2">
                            <label htmlFor="fullname">Full Name</label>
                            <input
                                onChange={(e) => setFullname(e.target.value)}
                                value={fullname}
                                type="text"
                                id="fullname"
                                placeholder="Maple Institute" />
                        </div>

                        <div className="ml-3 mr-2">
                            <label htmlFor="email">Email</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="text"
                                id="email"
                                placeholder="mapleinstitute83@gmail.com" />
                        </div>

                        <div className="ml-3 mr-2">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                                className="height-32"
                                id="message"
                                placeholder="Type your message here..">
                            </textarea>
                        </div>

                        <button className=" ml-3 mr-2 bg-cyan-600 p-3 text-white font-bold" type="submit">Send</button>
                        <div className="bg-slate-100 flex flex-col">
                            <div className=" ml-3 mr-2 text-red-600 px-5 py-2">Error Message</div>
                        </div>
                    </form>


                </div>
            </div>

            <div className="mt-6 max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row ">
                <div className="row w100">

                    {/* <form></form> */}






                    {/* <div className="col-md-3 mb1">
                        <div className='boxdiv tac'>
                            <h1 className='heading tac'>CONTACT BRANCH 1 </h1>
                            <p className='p tac mt1 mb1'>
                                Model Town, Near D-Park, Delhi Road, Rohtak 124001, Haryana.
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
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default ContactUs