import React from 'react';
import Home from './home/Home';
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from './courses/Courses';
import Signup from './components/Signup';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
import EventsNavFooter from './eventsNavFooter/EventsNavFooter';
import Career from './components/Career';
import CareerNavFooter from './careerNavFooter/CareerNavFooter';
import ContactUsNavFooter from './contactUsNavFooter/ContactUsNavFooter';
import AboutUsNavFooter from './aboutUsNavFooter/AboutUsNavFooter';
import EnquiryUsNavFooter from './enquiryUsNavFooter/EnquiryUsNavFooter';

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/events" element={<EventsNavFooter />} />
      <Route path="/career" element={<CareerNavFooter />} />
      <Route path="/contactus" element={<ContactUsNavFooter />} />
      <Route path="/aboutus" element={<AboutUsNavFooter />} />
      <Route path="/enquiry" element={<EnquiryUsNavFooter />} />
    </Routes>
    <Toaster />
  </>)
}

export default App