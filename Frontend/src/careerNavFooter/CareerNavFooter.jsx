import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Career from '../components/Career';

function CareerNavFooter() {
  return (
    <>
    <Navbar />
    <div className=" min-h-screen">
      <Career />
    </div>
    <Footer />
    </>
  )
}

export default CareerNavFooter;