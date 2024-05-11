import * as React from 'react';
import { createRef, forwardRef, useEffect, useRef } from 'react';

// Ref forwarding is a technique for automatically passing a ref through a component to one of its React.Children

export function Ref_Forwarding() {
  const refhook = useRef();
  const ref2 = createRef(); // Create ref to the DOM button
  const inputRef = useRef();

  function focus() {
    console.log(refhook);
    if(refhook.current){
    // refhook.current.focus();
    }
  }

  useEffect(() => {
    // console.log(inputRef,inputRef?.current.value, 'inputRef');
  });

  return (
    <div>
      <input ref={refhook} placeholder="my input" />
      <button onClick={focus}>Focus</button>
      <br/>
      <input type="text" defaultValue="foo" ref={inputRef} />

      <Demo/>
      <br/>

      <ButtonElement ref={ref2}>
        {'Click me!'}
      </ButtonElement>
    </div>
  );
}

const ButtonElement = forwardRef((props, ref) => (
    // console.log(props, ref, 'forwardRef');
  <button ref={ref} className="CustomButton">
    {props.children}
  </button>
));

export class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.myInput = React.createRef();
    }
    render() {
      return (
        <div>
          <input ref={this.myInput} />
  
          <button
            onClick={() => {
              this.myInput.current.focus();
            }}
          >
            focus!
          </button>
        </div>
      );
    }
  }
  