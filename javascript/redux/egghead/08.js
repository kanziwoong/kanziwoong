'use strict';
/**
 * Created by kanziw on 2016. 4. 13..
 */

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {id: action.id, text: action.text, completed: false};
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {completed: !state.completed});
    // return {...state, completed: !state.completed}; // ES7, can not use node version 5.10.1
    default:
      return state;
  }
};

// const todos = (state = [], action) => {  // possible when use ./node_modules/.bin/babel-node instead of node
const todos = (state, action) => {
  if (state === undefined) {
    state = [];
  }
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([todo(undefined, action)]);
    // return [...state, todo(undefined, action)]; // node version 5.x
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

// const visibilityFilter = (state = 'SHOW_ALL', action) => { // possible when use ./node_modules/.bin/babel-node instead of node
const visibilityFilter = (state, action) => {
  if (state === undefined) {
    state = 'SHOW_ALL';
  }
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

// const todoApp = (state = {}, action) => {  // possible when use ./node_modules/.bin/babel-node instead of node
const todoApp = (state, action) => {
  if (state === undefined) {
    state = {};
  }
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
  };
};

const createStore = require('redux').createStore;
const store = createStore(todoApp);

console.log('Initial state:');
console.log(store.getState());
console.log('--------------');

console.log('Dispatching ADD_TODO.');
store.dispatch({
  type: 'ADD_TODO',
  id: 0,
  text: 'Learn Redux',
});
console.log('Current state;');
console.log(store.getState());
console.log('--------------');

console.log('Dispatching ADD_TODO.');
store.dispatch({
  type: 'ADD_TODO',
  id: 1,
  text: 'Go shopping',
});
console.log('Current state;');
console.log(store.getState());
console.log('--------------');

console.log('Dispatching TOGGLE_TODO.');
store.dispatch({
  type: 'TOGGLE_TODO',
  id: 0,
});
console.log('Current state;');
console.log(store.getState());
console.log('--------------');

console.log('Dispatching SET_VISIBILITY_FILTER.');
store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED',
});
console.log('Current state;');
console.log(store.getState());
console.log('--------------');
