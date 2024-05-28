import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Events from '../components/Events';

function EventsNavFooter() {
  return (
    <>
    <Navbar />
    <div className=" min-h-screen">
        <Events />
    </div>
    <Footer />
</>
  )
}

export default EventsNavFooter;