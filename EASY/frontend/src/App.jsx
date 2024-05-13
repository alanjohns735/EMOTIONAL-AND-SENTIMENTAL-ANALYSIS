import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from "./components/Pages/Dashboard/Navigation";
import { Header } from "./components/Pages/Dashboard/header";
import { Features } from "./components/Pages/Dashboard/features";
import { About } from "./components/Pages/Dashboard/about";
import { Testimonials } from "./components/Pages/Dashboard/testimonials";
import { Contact } from "./components/Pages/Dashboard/contact";
import EmotionDetection from "./components/Pages/GetStart/EmotionDetection";
import JsonData from "./data/data.json";
import Emotion from "./components/Pages/Emotion/emotion";
import Etest from "./components/Pages/Etest/Etest";
import GradientButtons from "./components/Pages/Etest/GradientButtons";
import axios from 'axios';
import MoodStory from "./components/Pages/Games/MoodStory";
import SmoothScroll from "smooth-scroll";
import LoginSignup from "./components/Pages/LS/LoginSignup";
import { UserContextProvider } from './context/userContext';
import InnerContent from "./components/Pages/InnerContent";
import ProtectedRoutes from "./context/ProtectedRoutes";
import PublicRoutes from "./context/PublicRoutes";
import { Toaster } from 'react-hot-toast'
axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.withCredentials = true

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
 
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div>
      <UserContextProvider>
        <Navigation />
        <Toaster position='bottom-right' toastOptions={{duration: 3000}} />
        <Routes>
          <Route path="/" element={<div><Header data={landingPageData.Header} /><Features   data={landingPageData.Features} /> <About data={landingPageData.About} /> <Testimonials data={landingPageData.Testimonials}  /> <Contact data={landingPageData.Contact} /> </div>} />
          <Route path="/features" element={<Features data={landingPageData.Features} />} />
          <Route path="/about" element={<About data={landingPageData.About} />} />
          <Route path="/testimonials" element={<Testimonials data={landingPageData.Testimonials} />} />
          <Route path="/contact" element={<Contact data={landingPageData.Contact} />} />
          <Route path="/" element={<ProtectedRoutes/>}>
            <Route path="/" element={<InnerContent/>} >
              <Route path="/" element={<div><Header data={landingPageData.Header} /><Features   data={landingPageData.Features} /> <About data={landingPageData.About} /> <Testimonials data={landingPageData.Testimonials}  /> <Contact data={landingPageData.Contact} /> </div>} />
              <Route path="/features" element={<Features data={landingPageData.Features} />} />
              <Route path="/about" element={<About data={landingPageData.About} />} />
              <Route path="/testimonials" element={<Testimonials data={landingPageData.Testimonials} />} />
              <Route path="/contact" element={<Contact data={landingPageData.Contact} />} />
              <Route path="/emotiondetection" element={<EmotionDetection />} />
              <Route path="/emotion" element={<Emotion />} />
              <Route path="/Etest" element={<Etest />} />
              <Route path="/GradientButtons" element={<GradientButtons />} />
              <Route path="/MoodStory" element={<MoodStory />} />          <Route path="/emotion" element={<Emotion />} />
              <Route path="/Etest" element={<Etest />} />
              <Route path="/GradientButtons" element={<GradientButtons />} />
            </Route>
          </Route>
          <Route path="/loginsignup" element={<PublicRoutes/>}>
            <Route path="/loginsignup" element={<LoginSignup/>} />
          </Route>
        </Routes>
        </UserContextProvider>
      </div>
    </Router>
  );
};

export default App;



