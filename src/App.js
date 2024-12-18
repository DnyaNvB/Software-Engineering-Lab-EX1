import React, { useState } from 'react';
import { evaluate } from 'mathjs'; // Import evaluate from mathjs
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const calculateResult = () => {
    try {
      const result = evaluate(input); // Use evaluate instead of eval
      setResult(result.toFixed(2));
    } catch (error) {
      setResult('Error');
    }
  };
  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleUndo = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1>Calculator</h1>
        <div className="display">
          <input type="text" value={input} readOnly />
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')}>+</button>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')}>-</button>
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')}>*</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button> {/* Decimal button */}
          <button onClick={handleClear}>AC</button>
          <button onClick={handleUndo}>←</button>
          <button onClick={calculateResult}>=</button>
          <button onClick={() => handleClick('/')}>/</button>
        </div>
      </div>
    </div>
  );
}

export default App;
