import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Enquiry from '../components/Enquiry'

function EnquiryUsNavFooter() {
  return (
    <>
    <Navbar />
    <div className=" min-h-screen">
        <Enquiry />
    </div>
    <Footer />
    </>
  )
}

export default EnquiryUsNavFooter