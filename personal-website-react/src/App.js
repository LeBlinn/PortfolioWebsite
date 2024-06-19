import React from 'react';
import logo from './logo.svg';
import './App.css';

import Filter from './components/Filter';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Projects from './components/Project/Projects';
import Expertise from './components/Expertise';
import Footer from './components/Footer';

import Width from './components/Width';

function App() {
  return (
    <div className="App">
      <Filter>
        <div className='background'></div>

        <div className='mainContent'>
          <Header />
          <div className='spacer'></div>
          <Portfolio />
          <div className='spacer2'></div>
          <Projects />
          <div className='spacer'></div>
          <Width>
            <Expertise />
          </Width>
          <div className='spacer'></div>
          <Footer />
        </div>

      </Filter>
    </div>
  );
}

export default App;
