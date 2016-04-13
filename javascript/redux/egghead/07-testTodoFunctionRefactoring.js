'use strict';
/**
 * Created by kanziw on 2016. 4. 13..
 */

const expect = require('expect');
const deepFreeze = require('deep-freeze');

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

const testAddTodo = () => {
  const stateBefore = [];
  const action = {type: 'ADD_TODO', id: 0, text: 'Learn Redux'};
  const stateAfter = [{id: 0, text: 'Learn Redux', completed: false}];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
};

const testToggleTodo = () => {
  const stateBefore = [
    {id: 0, text: 'Learn Redux', completed: false},
    {id: 1, text: 'Go shopping', completed: false},
  ];
  const action = {type: 'TOGGLE_TODO', id: 1};
  const stateAfter = [
    {id: 0, text: 'Learn Redux', completed: false},
    {id: 1, text: 'Go shopping', completed: true},
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
};


testAddTodo();
testToggleTodo();

console.log('All tests passed.');
