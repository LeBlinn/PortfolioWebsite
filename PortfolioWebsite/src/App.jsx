import './App.css'

import Intro from './components/intro/Intro.jsx'
import Expertise from './components/expertise/Expertise.jsx'
import Projects from './components/projects/Projects.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {

  return (
    <div className="mainContent">
      <Intro />
      <div className="spacer"/>
      <Expertise />
      <div className="spacer2"/>
      <Projects />
      <Footer />
    </div>
  )
}

export default App