import React, { useState, useEffect } from 'react';

const UseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Ви натиснули ${count} разів`);
    } 
)
  return (
      <div>
          <p>Ви натиснули {count} разів</p>
          <button type='button' onClick={() => setCount (count + 1)}>Натисни</button>
      
    </div>
  )
}

export default UseEffect;
