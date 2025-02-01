import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProductCalendar from './pages/DemoProductCalendar';
import DemoProductLabels from './pages/DemoProductLabels';
import DemoProductDiary from './pages/DemoProductDiary';
import DemoProductBags from './pages/DemoProductBags';

import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
    
function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("Siva Screen's");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-bwoven-collections" element={<DemoProductCalendar />} /> 
            <Route path="/get-calendar-collections" element={<DemoProductLabels />} /> 
            <Route path="/get-label-collections" element={<DemoProductDiary />} /> 
            <Route path="/get-nwoven-collections" element={<DemoProductBags />} /> 
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
