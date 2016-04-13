'use strict';
/**
 * Created by kanziw on 2016. 4. 13..
 */

// const counter = (state = 0, action) => { // possible when use ./node_modules/.bin/babel-node instead of node
const counter = (state, action) => {
  if (state === undefined) {
    state = 0;
  }
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// import {createStore} from 'redux';
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    // console.log(`state : ${state}, listeners : ${listeners}`);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  dispatch({});

  return {getState, dispatch, subscribe};
};


const store = createStore(counter);

store.subscribe(() => {
  console.log(store.getState());
});

setInterval(store.dispatch.bind(store.dispatch, {type: 'INCREMENT'}), 1000);
