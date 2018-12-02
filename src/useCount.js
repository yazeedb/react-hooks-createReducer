import { useReducer } from 'react';

const initialState = {
  fetching: true,
  error: null,
  count: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH':
      return {
        ...state,
        fetching: true
      };

    case 'SET_COUNT':
      return {
        ...state,
        fetching: false,
        count: action.count
      };

    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      };

    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      };

    case 'REPORT_ERROR':
      return {
        ...state,
        fetching: false,
        error: action.error
      };

    default:
      return state;
  }
};

export default () => useReducer(reducer, initialState);
