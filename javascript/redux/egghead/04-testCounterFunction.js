'use strict';
/**
 * Created by kanziw on 2016. 4. 13..
 */

const expect = require('expect');
const deepFreeze = require('deep-freeze');

const addCounter = (list) => {
  // list.push(0);
  // return list; // if list is immutable, it was fail.

  return list.concat([0]);
  // return [...list, 0]; // node version 5.x
};

const removeCounter = (list, index) => {
  // list.splice(index, 1);
  // return list; // if list is immutable, it was fail.

  return list.slice(0, index).concat(list.slice(index + 1));
  // return [...list.slice(0, index), ...list.slice(index + 1)]; // node version 5.x
};

const incrementCounter = (list, index) => {
  // list[index]++;
  // return list; // if list is immutable, it was fail.

  return list.slice(0, index).concat([list[index] + 1]).concat(list.slice(index + 1));
  // return [...list.slice(0, index), list[index] + 1, ...list.slice(index + 1)];  // node version 5.x
};

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  deepFreeze(listBefore);

  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
};

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];

  deepFreeze(listBefore);

  expect(
    removeCounter(listBefore, 1)
  ).toEqual(listAfter);
};

const testIncrementCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];

  deepFreeze(listBefore);

  expect(
    incrementCounter(listBefore, 1)
  ).toEqual(listAfter);
};

testAddCounter();
testRemoveCounter();
testIncrementCounter();

console.log('All tests passed.');
