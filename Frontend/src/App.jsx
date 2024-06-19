import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from "react-router-dom";
import AboutUs from './components/AboutUs';
import Career from './components/Career';
import ContactUs from './components/ContactUs';
import Course from './components/Course';
import Enquiry from './components/Enquiry';
import Event from './components/Events';
import Home from './home/Home';
import HomeWrapper from './homewrapper';
function App() {
  // const [authUser, setAuthUser] = useAuth();
  // console.log(authUser);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeWrapper component={<Home />} />} />
        <Route path="/course" element={<HomeWrapper component={<Course />} />} />
        <Route path="/events" element={<HomeWrapper component={<Event />} />} />
        <Route path="/career" element={<HomeWrapper component={<Career />} />} />
        <Route path="/contactus" element={<HomeWrapper component={<ContactUs />} />} />
        <Route path="/aboutus" element={<HomeWrapper component={<AboutUs />} />} />
        <Route path="/enquiry" element={<HomeWrapper component={<Enquiry />} />} />
      </Routes>
      <Toaster />
    </>)
}

export default App