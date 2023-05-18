import React, {useState} from 'react';
import Numbers from './Numbers/number';
import './App.css';

const App = () => {
  const [numbers, setNumbers] = useState<number[]>([]);

  const randomNums = () => {
    const newNumbers: number[] = [];

    while (newNumbers.length < 5) {
      const randomNumber = Math.floor(Math.random() * 36) + 1;

      if (!newNumbers.includes(randomNumber)) {
        newNumbers.push(randomNumber);
      }
    }

    newNumbers.sort((a, b) => a - b);
    setNumbers(newNumbers);
  };

  return (
    <div className="App">
      <button onClick={randomNums} className="changeBtn" >New numbers</button>
      <div className='num-wrap'>
        {numbers.map((number) => (
          <Numbers number={number} />
        ))}
      </div>
    </div>
  );
};

export default App;
