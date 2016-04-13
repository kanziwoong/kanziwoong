'use strict';
/**
 * Created by kanziw on 2016. 4. 13..
 */

const expect = require('expect');
const deepFreeze = require('deep-freeze');

const toggleTodo = (todo) => {
  // todo.complete = !todo.complete;
  // return todo;

  return Object.assign({}, todo, {
    completed: !todo.complete,
  });
  // return {...todo, completed: !todo.completed}; // ES7, can not use node version 5.10.1
};

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false,
  };
  const todoAfter = {
    id: 0,
    text: 'Learn Redux',
    completed: true,
  };

  deepFreeze(todoBefore);

  expect(
    toggleTodo(todoBefore)
  ).toEqual(todoAfter);
};

testToggleTodo();

console.log('All tests passed.');
