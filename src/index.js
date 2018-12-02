import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import useCount from './useCount';
import getCountFromServer from './getCountFromServer';
import './styles.css';

function App() {
  const [state, dispatch] = useCount();
  const { count, fetching, error } = state;

  useEffect(() => {
    getCountFromServer()
      .then(count => {
        dispatch({ type: 'SET_COUNT', count });
      })
      .catch(error => {
        dispatch({ type: 'REPORT_ERROR', error });
      });
  }, []);

  return (
    <div className="App">
      <h1>
        {error ? error : fetching ? 'Fetching count...' : `count: ${count}`}
      </h1>

      <button onClick={() => dispatch({ type: 'INCREMENT' })} disabled={error}>
        Up!
      </button>

      <button onClick={() => dispatch({ type: 'DECREMENT' })} disabled={error}>
        Down!
      </button>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
