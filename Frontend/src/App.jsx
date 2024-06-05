import React from 'react';
import Home from './home/Home';
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from './components/Signup';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
import Career from './components/Career';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Enquiry from './components/Enquiry';
import Event from './components/Events';
import HomeWrapper from './homewrapper'
import Course from './components/Course';
function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
  <>
    <Routes>
      <Route path="/" element={<HomeWrapper component={<Home/>}/>} />
      <Route path="/course" element={authUser ? <HomeWrapper component={<Course/>} /> : <Navigate to="/signup" />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/events" element={<HomeWrapper component={<Event/>} />} />
      <Route path="/career" element={<HomeWrapper component={<Career/>} />} />
      <Route path="/contactus" element={<HomeWrapper component={<ContactUs/>} />} />
      <Route path="/aboutus" element={<HomeWrapper component={<AboutUs/>} />} />
      <Route path="/enquiry" element={<HomeWrapper component={<Enquiry/>} />} />
    </Routes>
    <Toaster />
  </>)
}

export default App