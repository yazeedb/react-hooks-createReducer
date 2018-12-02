import { useReducer } from 'react';
import createReducer from './createReducer';

const initialState = {
  fetching: true,
  error: null,
  count: null
};

const reducer = createReducer(initialState, {
  FETCH: state => ({ ...state, fetching: true }),
  SET_COUNT: (state, action) => ({
    ...state,
    fetching: false,
    count: action.count
  }),
  INCREMENT: (state, action) => ({
    ...state,
    count: state.count + 1
  }),
  DECREMENT: (state, action) => ({
    ...state,
    count: state.count - 1
  }),
  REPORT_ERROR: (state, action) => ({
    ...state,
    fetching: false,
    error: action.error
  })
});

export default () => useReducer(reducer, initialState);
