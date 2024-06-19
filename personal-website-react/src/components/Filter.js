import React, { useRef, useEffect } from 'react';


function Filter({ children }){

    const filterRef = useRef();

    // Scroll event handler
    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (filterRef.current) {
            const invertValue = 100 - (scrollY*0.1);
            if(invertValue <= 0){
                filterRef.current.style.filter = `invert(${0})`;
            } else {
                filterRef.current.style.filter = `invert(${invertValue}%)`;
            }
            
        }
    };

    // Event listener
    useEffect(() => {
        handleScroll(); //runs the code once setting the invert instantly
        window.addEventListener('scroll', handleScroll);

    // Unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    }, []);

    return (
        <div ref={filterRef}>{ children }</div>
    )
}

export default Filter