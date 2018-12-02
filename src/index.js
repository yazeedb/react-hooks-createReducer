import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import useFetchData from './useFetchData';
import getCountFromServer from './getCountFromServer';
import './styles.css';

function App() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useFetchData();

  getCountFromServer().then(console.log);

  console.log(state);

  return (
    <div className="App">
      <h1>count: {count}</h1>

      <button onClick={() => dispatch({ type: 'FETCH' })}>fetch</button>

      <button onClick={() => setCount(prevCount => prevCount + 1)}>Up!</button>

      <button onClick={() => setCount(prevCount => prevCount - 1)}>
        Down!
      </button>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
