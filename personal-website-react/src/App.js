import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Container from './components/Container';
import Scrolldown from './components/Scrolldown';

function App() {
  return (
    <div className="App">

      <div className='background'></div>

      <div className='mainContent'>
        <Header />
        <div className='spacer'></div>
        <Portfolio />
        <div className='spacer2'></div>
        <Container />
        <Scrolldown />
      </div>


    </div>
  );
}

export default App;
