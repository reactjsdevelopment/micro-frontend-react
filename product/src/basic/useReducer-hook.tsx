import * as React from 'react';
import { useReducer } from 'react';

type ACTIONTYPE =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: string };

const initialStateValue = { count: 0 };

// simple way
function reducer2(state, action) {
  switch(action) {
      case 'increment':
          return state+1;
      case 'decrement':
          return state-1;
      default:
          throw new Error();
  }
}

// logic according to action
function reducer3(state: typeof initialStateValue, action: ACTIONTYPE) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - Number(action.payload) };
    default:
      throw new Error();
  }
}

export function UseReducerComp() {
  const [show, toggle] = useReducer((state) => !state, true);

  const [state, dispatch] = useReducer(reducer3, initialStateValue);

  return (
    <div>
      {/* Count : {state}
        <button onClick={() => dispatch({type:'decrement'})}>-</button>
        <button onClick={() => dispatch({type:'increment'})}>+</button> */}

 Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement", payload: "5" })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        +
      </button>

      <div>
        <button onClick={toggle}>Toggle Details</button>
      </div>
      {show && <h2>test </h2>}

      <Bar/>
    </div>
  );
}


const initialState = { width: 15 };

const reducer = (state, action) => {
  switch (action) {
    case 'plus':
      return { width: state.width + 15 }
    case 'minus':
      return { width: Math.max(state.width - 15, 2) }
    default:
      throw new Error("what's going on?" )
  }
}

export const Bar = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <div>
    <div style={{ background: 'teal', height: '30px', width: state.width }}></div>
    <div style={{marginTop: '3rem'}}>
        <button onClick={() => dispatch('plus')}>Increase bar size</button>
        <button onClick={() => dispatch('minus')}>Decrease bar size</button>
    </div>
    </div>
}