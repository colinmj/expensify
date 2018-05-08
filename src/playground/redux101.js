import { createStore } from 'redux';

const store = createStore((state = { count: 0 }) => {
  return state;
});

//Actions are simply just objects that get sent to the store. just objects!!

{
  type: 'INCREMENT';
}

//store dispatch is how we send an action to the store

//store subscribe gets a function and is called any time the store changes
