import './App.css'
import './css/Animations.css'

import { useState, useEffect, useRef } from 'react';
import { Link ,BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'

import Intro from './components/intro/Intro.jsx'
import About from './components/about/About.jsx'
import Expertise from './components/expertise/Expertise.jsx'
import Projects from './components/projects/Projects.jsx'
import Footer from './components/footer/Footer.jsx'

import Mode from './components/extra/mode.jsx'
import ScrollToTop from './components/extra/ScrollToTop.jsx'

import ProjectsPage from './components/projects/ProjectsPage.jsx'

import PortfolioWebsiteDetails from './components/projects/portfoliowebsite/PortfolioWebsiteDetails.jsx'

function App() {
  return (
    <div>
      <div className='absolute z-30 m-auto top-3 right-3'><Mode /></div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <div>
            <div className='relative z-20 bg-base-100 break-words'>
              <div className='break-words mr-6 ml-6 mt-12 mb-auto tablet:mr-24 tablet:ml-24 tablet:mt-12 desktop:mr-32 desktop:ml-32'>
                  <Intro />
                  <div className='p-4 tablet:p-8'/>
                  <About />
                  <div className='p-4 tablet:p-8'/>
                  <Expertise />
                  <div className='p-4 tablet:p-8'/>
                  <Projects />
                  <Footer />
              </div>
            </div>
          </div>
          } />
        <Route path="/projects" element={
          <div className='break-words mr-6 ml-6 mt-12 mb-auto tablet:mr-24 tablet:ml-24 tablet:mt-12 desktop:mr-32 desktop:ml-32'>
          <ProjectsPage />
          </div>
        } />
        <Route path="/personalwebsite" element={
          <div>
          <PortfolioWebsiteDetails />
          </div>
        } />
      </Routes>
    </div>
  )
}

export default App