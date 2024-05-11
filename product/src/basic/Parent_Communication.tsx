// parent - 2 states create
// child - each
// child - each

// Create three component - Parent, Child1, Child2,
// Create two state in Parent Component state-1, state-2, pass them as a prop to child and create two buttons button-1&button-2 to update those state
// Now your task is to prevent re-rendering
// Child-1 should re-render only when state-1 is updated and re-render child2 only when state-2 is updated

import { FC, useLayoutEffect, useRef, useState } from 'react';
import * as React from 'react';

export const Parent: FC<{ app: string }> = ({ app }) => {
let [demo, setDemo] = useState(1);
const [test, setTest] = useState(10);

let ref = useRef(0);

function handleClick(){
  console.log(ref.current )
  ref.current = ref.current + 1;
  setDemo(ref.current)
  // setTest(100)
  //setDemo(20)
}

// function handleClick(){
// demo = demo + 1;
//   setDemo(demo)
  // setTest(100)
  //setDemo(20)
// }



  return (
    <div>
      <h1>Parent {app}!</h1>
      <Child name={demo}/>
      <Child1 name={test}/>
      <button onClick={handleClick}> btn1 </button>
        {/* <button onCLick={handleClick1}>btn2</button> */}
    </div>
  );
};

export const Child: FC<{ name: number }> = ({ name }) => {
    console.log('Child');
  return (
    <div>
      <h1>Child {name}!</h1>
 
    </div>
  );
};

export const Child1: FC<{ name: number }> = ({ name }) => {
    console.log('Child1');
    return (
      <div>
        <h1>Child1 {name}!</h1>
   
      </div>
    );
  };
  