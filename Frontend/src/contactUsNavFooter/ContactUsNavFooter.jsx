import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs';

function ContactUsNavFooter() {
  return (
    <>
    <Navbar />
    <div className=" min-h-screen">
    <ContactUs />
    </div>
    <Footer />
    </>
  )
}

export default ContactUsNavFooter