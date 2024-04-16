import React, { useState, useMemo } from 'react';

const NumberList = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const sum = useMemo(() => {
    console.log('Розрахунок суми...');
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }, [numbers]);

  const handleChange = (e) => {
    const newNumbers = e.target.value
      .split(',')
      .map((num) => parseInt(num.trim(), 10));
    setNumbers(newNumbers);
  };

  return (
    <div>
      <label>Введите числа через запятую:</label>
      <input type="text" onChange={handleChange} />
      <p>Сума чисел: {sum}</p>
    </div>
  );
};

export default NumberList;
