import * as React from 'react';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

// useImperativeHandle customizes the instance value that is exposed to parent components when using ref
// The useImperativeHandle hook works in the similar phase of useRef hook but only it allows us to modify the instance that is going to be passed with the ref object which provides a reference to any DOM elemen

// chilComp
const UseImperativeHandleDemo = forwardRef((props, ref) =>  {
  const myBtn = useRef(null);

  useImperativeHandle(ref, () => ({
    click: () => {
      console.log('clicking button!');
      // myBtn.current.click();
    },
  }));

    return (
    <div>
      Child
    </div>
  );

})

// parent component
export function ParentComp () {
  const inputRef = useRef(null);

  return (
    <div>
      <p>hello</p>
         <div
      onClick={() => {
        inputRef.current.click();
      }}
    >
      <UseImperativeHandleDemo 
      ref={inputRef} />
    </div>
    </div>
  );
};

// Parent component
export function UseImperativeHandleHook() {
  const controlRef = useRef(null);

  return (
    <div
      onClick={() => {
        controlRef.current.controlPrint();
      }}
    >
      Parent Box
      <ChildComponent ref={controlRef} />
    </div>
  );
}

// Child component
const ChildComponent = forwardRef((props, ref) => {
  const [print, setPrint] = useState(false);

  useImperativeHandle(ref, () => ({
    controlPrint() {
      setPrint(!print);
    },
  }));

  return (
    <div>
      Child Box
      {print && 'I am from the child component'}{' '}
    </div>
  );
});

// export default ChildComponent;
