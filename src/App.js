import './App.css';
import React, { useState } from 'react';

function App() {
  const [hasil, setHasil] = useState('');

  const handleClick = (e) => {
    setHasil(hasil.concat(e.target.name));
  };
  const clear = () => {
    setHasil('');
  };
  const backspace = () => {
    setHasil(hasil.slice(0, hasil.length - 1));
  };
  const hitung = () => {
    try {
      setHasil(eval(hasil).toString());
    } catch {
      setHasil('Error');
    }
  };
  return (
    <div className="container">
      <form>
        <input type="text" value={hasil} />
      </form>

      <div className="keypad">
        <button className="highlight" id="clear" onClick={clear}>
          Clear
        </button>
        <button className="highlight" id="backspace" onClick={backspace}>
          C
        </button>
        <button className="highlight" name="/" onClick={handleClick}>
          &divide;
        </button>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button className="highlight" name="*" onClick={handleClick}>
          &times;
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button className="highlight" name="-" onClick={handleClick}>
          &ndash;
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button className="highlight" name="+" onClick={handleClick}>
          +
        </button>
        <button name="0" onClick={handleClick}>
          0
        </button>
        <button name="." onClick={handleClick}>
          .
        </button>
        <button className="highlight" id="result" onClick={hitung}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
