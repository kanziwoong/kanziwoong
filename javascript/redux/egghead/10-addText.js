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

const React = require('react');
const ReactDOM = require('react-dom');
const Redux = require('redux');
const combineReducers = Redux.combineReducers;
const todoApp = combineReducers({todos, visibilityFilter});

const createStore = Redux.createStore;
const store = createStore(todoApp);

let nextTodoId = 0;
class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <input ref={node => this.input = node}/>
        <button onClick={() => {
          store.dispatch({type: 'ADD_TODO', text: this.input.value, id: nextTodoId++});
          this.input.value = '';
        }}>
          Add Todo
        </button>
        <ul>
          {this.props.todos.map(todo => <li key={todo.id}> {todo.text} </li>)}
        </ul>
      </div>
    );
  }
}

const render = () => {
  ReactDOM.render(
    <TodoApp todos={store.getState().todos}/>,
    document.getElementById('app')
  )
};

store.subscribe(render);
render();
