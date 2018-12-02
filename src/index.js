import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import './styles.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>count: {count}</h1>

      <button onClick={() => setCount(prevCount => prevCount + 1)}>Up!</button>

      <button onClick={() => setCount(prevCount => prevCount - 1)}>
        Down!
      </button>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
