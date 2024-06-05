import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function HomeWrapper(component) {
    return (
      <>
      <Navbar />
      <div className=" min-h-screen">
        {component?.component}
      </div>
      <Footer />
      </>
    )
  }
  
  export default HomeWrapper;