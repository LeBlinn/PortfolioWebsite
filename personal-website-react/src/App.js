import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Scrolldown from './components/Scrolldown';

function App() {
  return (
    <div className="App">

      <div className='background'></div>

      <div className='mainContent'>
        <Header />
        <div className='spacer'></div>
        <Scrolldown />
      </div>


    </div>
  );
}

export default App;
