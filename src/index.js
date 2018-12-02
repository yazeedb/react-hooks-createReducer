import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import useCount from './useCount';
import getCountFromServer from './getCountFromServer';
import './styles.css';

function App() {
  const [state, dispatch] = useCount();
  const { count, fetching } = state;

  useEffect(() => {
    getCountFromServer().then(count => {
      dispatch({ type: 'SET_COUNT', count });
    });
  }, []);

  return (
    <div className="App">
      <h1>{fetching ? 'Fetching count...' : `count: ${count}`}</h1>

      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Up!</button>

      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Down!</button>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
