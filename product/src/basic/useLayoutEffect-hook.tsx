import * as React from 'react';
import { useEffect, useLayoutEffect, useRef } from 'react';
// The useLayoutEffect Hook is a variation of the useEffect Hook that runs synchronously before the browser repaints the screen. It was designed to handle side effects that require immediate DOM layout updates.
export function UseLayoutEffectDemo() {
  const myBtn = useRef(null);

  // useLayoutEffect(() => {
  //     const rect = myBtn.current.getBoundingClientRect();
  //     // scroll position before the dom is visually updated
  //     console.log(rect.height);
  // })

  useLayoutEffect(() => {
    console.log('USE LAYOUT EFFECT FUNCTION TRIGGERED');
  });

  const inputRef = useRef();

  const scrollHandler = (_) => {
    console.log(inputRef.current.getBoundingClientRect());
  };

  useEffect(() => {
    console.log('USE EFFECT FUNCTION TRIGGERED');

    window.addEventListener('scroll', scrollHandler, true);
    return () => {
      window.removeEventListener('scroll', scrollHandler, true);
    };
  }, []);
  
  return (
    <div ref={inputRef} className="App1">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
