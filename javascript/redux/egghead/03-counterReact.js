'use strict';
/**
 * Created by kanziw on 2016. 4. 13..
 */

// TODO : 'this is for App.js'

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const Counter = ({value, onIncrement, onDecrement}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
const store = createStore(counter);

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({type: 'INCREMENT'})}
      onDecrement={() => store.dispatch({type: 'DECREMENT'})}
    />,
    document.getElementById('app')
  );
};

store.subscribe(render);
render();
