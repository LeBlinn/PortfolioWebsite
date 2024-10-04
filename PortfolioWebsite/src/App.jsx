import './App.css'
import './css/Animations.css'

import React, { useContext, useState, useRef } from 'react'
import { StateContext } from './StateContext.jsx'

import Intro from './components/intro/Intro.jsx'
import Expertise from './components/expertise/Expertise.jsx'
import Projects from './components/projects/Projects.jsx'
import Footer from './components/footer/Footer.jsx'

import PortfolioWebsiteDetails from './components/projects/portfoliowebsite/PortfolioWebsiteDetails.jsx'

function App() {
    const { value, setValue }= useContext(StateContext);
    const [ state, setState ] = useState('A');

    const animationRef = useRef(null);

    function ScrollToTop() {
      window.scrollTo(0, 0);
    }

    const ContextSwitch = () => {
      console.log('ContextSwitch');
      if (value != state) {
        //start animation
        animationRef.current.classList.add('FadeOut');
        setTimeout(() => {
          setState(value);
          animationRef.current.classList.remove('FadeOut');
          ScrollToTop();
          animationRef.current.classList.add('FadeIn');
        }, 250);
      }
    };

    const renderComponent = () => {
      ContextSwitch();
      switch (state) {

        case 'A':
          return (
            <div className="mainContent">
              <div ref={animationRef}>
                <Intro />
                <div className="spacer"/>
                <Expertise />
                <div className="spacer2"/>
                <Projects />
                <Footer />
              </div>
            </div>
          );

        case 'B':
          return (
            <div className="mainContent">
              <div ref={animationRef}>
                <PortfolioWebsiteDetails/>
              </div>
            </div>
          );

        case 'C':
          return <div>Component C</div>;

        default:
          return <div>Error no state set</div>;
      }
    };

  return (
    <div>{renderComponent()}</div>
  )
}

export default App