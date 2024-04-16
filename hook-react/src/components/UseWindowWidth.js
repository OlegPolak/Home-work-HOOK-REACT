import { useState, useEffect } from 'react';

const UseWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
        <>
            <h4>Ширина екрана: {windowWidth}</h4>
        
        </>
      
  );
};

export default UseWindowWidth;
