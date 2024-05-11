import * as React from 'react';
import { useEffect, useRef } from 'react';

export function UseRefComp() {
    const myBtn = useRef(null);
    const handleBtn = () => myBtn.current.click();

    const test = () => {return console.log('5');}
    return (
        <div>
        <button  onClick={handleBtn} >myBtn
        </button>
      <input ref={myBtn} type="text" onClick={test} />

        <Foo/>
        <TextInputWithFocusButton/>
        </div>
    )
}

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <div>
      <input ref={inputEl} type="text"  />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
}

function Foo() {
  // - If possible, prefer as specific as possible. For example, HTMLDivElement
  //   is better than HTMLElement and way better than Element.
  // - Technical-wise, this returns RefObject<HTMLDivElement>
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Note that ref.current may be null. This is expected, because you may
    // conditionally render the ref-ed element, or you may forgot to assign it
    if (!divRef.current) throw Error("divRef is not assigned");

    // Now divRef.current is sure to be HTMLDivElement
    console.log(divRef.current, 'current');
  });

  return <div ref={divRef}>Give the ref to an element so React can manage it for you</div>;
}

function Foo2() {
  // Technical-wise, this returns MutableRefObject<number | null>
  const intervalRef = useRef<number | null>(null);

  // You manage the ref yourself (that's why it's called MutableRefObject!)
  useEffect(() => {
    intervalRef.current = setInterval(()=>{});
    return () => clearInterval(intervalRef.current);
  }, []);

//   // The ref is not passed to any element's "ref" prop
//   return <button onClick={/* clearInterval the ref */}>Cancel timer</button>;
}