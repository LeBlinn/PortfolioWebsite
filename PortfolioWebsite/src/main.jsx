import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Link ,BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'

const AnimatedApp = () => {
  const location = useLocation();
  const animationRef = useRef();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    if (currentPath !== location.pathname) {
      // Trigger FadeOut animation
      animationRef.current.classList.add('FadeOut');
      setTimeout(() => {
        // Change the path
        setCurrentPath(location.pathname);
        animationRef.current.classList.remove('FadeOut');
        animationRef.current.classList.add('FadeIn');
      }, 250); // Match the duration of your FadeOut animation
    }
  }, [location.pathname, currentPath]);

  return (
    <div ref={animationRef}>
      <App />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AnimatedApp />
    </Router>
  </React.StrictMode>,
)
