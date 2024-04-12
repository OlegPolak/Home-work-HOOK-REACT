import React, { useState } from 'react'

const UseState = () => {
    const [arrName] = useState(['Kate', 'Josh', 'Ivan', 'Olya', 'Alex',]);
    const [name, selectName] = useState('');

    const getRandomName = () => {
         const random = Math.floor(Math.random() * arrName.length);
         selectName(arrName[random]);
    }
  return (
    <div>
       <button onClick={getRandomName}>Ім'я</button>
          <p>Hello {name}</p>
    </div>
  )
}

export default UseState
