import React from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    case "DEVIDE":
      return {
        count: state.count /2,
      };
    case "MULTIPLICATION":
      return {
        count: state.count *2,
      };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div style={{ textAlign: "center" }}>
      <h1>USEREDUCER HOOK</h1>
      <h2>count:{state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
      <button onClick={() => dispatch({ type: "DEVIDE" })}>DEVIDE</button>
      <button onClick={() => dispatch({ type: "MULTIPLICATION" })}>MULTIPLICATION</button>
    </div>
  );
};

export default UseReducer;

// useReducer is also a state management hook in react thsi is used for managing more complex state logics

// in usereducer we start by defining a reducer funtion
// reducer function is having two parameters
// state :initial state of our application
// action : describes the type of action to occur , usually action is an object with type property , that describes the type of action

// we have to use  usereducer in our functional component

// const [initial state,updated]=useState(initial state)

// const [state,dispatch]=useReducer(reducer,initial state )

// DISPATCHING function is responsible fpr specifying which type of action should occur

//key props: key prop is a special attribute used to identify elements uniquely within a list or a collection. When rendering lists of elements, React needs a way to track each item to efficiently manage updates, reorders, and removals. The key prop provides this mechanism, enabling React to identify each item and apply minimal changes to the DOM
