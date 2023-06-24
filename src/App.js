import React from 'react'
import navbar from '/Users/user/Desktop/interactive-react-portfolio/src/components/navbar/navbar.js';
import Navbar from '/Users/user/Desktop/interactive-react-portfolio/src/components/navbar/navbar.js';
import Banner from '/Users/user/Desktop/interactive-react-portfolio/src/components/banner/banner.js';
import Features from '/Users/user/Desktop/interactive-react-portfolio/src/components/features/features.js';
import Projects from '/Users/user/Desktop/interactive-react-portfolio/src/components/projects/projects';
import Resume from '/Users/user/Desktop/interactive-react-portfolio/src/components/resume/resume';
import Testimonials from '/Users/user/Desktop/interactive-react-portfolio/src/components/testimonials/testimonials';
import Contact from '/Users/user/Desktop/interactive-react-portfolio/src/components/contact/contact';

function App() {
  return (
    <div className='w-full h-auto bg-[#333] text-white'>
      <div className='max-w-screen-xl mx-auto px-16'>
        <Navbar />
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
