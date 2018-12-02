import { useReducer } from 'react';

const initialState = {
  fetching: false,
  error: null,
  data: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH':
      return {
        ...state,
        fetching: true
      };

    default:
      return state;
  }
};

export default () => useReducer(reducer, initialState);
