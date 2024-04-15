import React, { useState, useLayoutEffect } from 'react';

const UseLayoutEffect = () => {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
      if (value === 0) {
          setValue(Math.random() * 10);
    }
  },[value]);
   
console.log(value);

  return (
    <div>
          <p>{value}</p>
      <button onClick={() => setValue(0)}>Натисни</button> 
    </div>
  )
}

export default UseLayoutEffect
