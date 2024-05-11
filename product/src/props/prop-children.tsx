import * as React from 'react';

export default function PassChild() {
  return (
    <div className="App">
      <Child greeting={<h1>hi, world</h1>} goodbye={<h1>Goodbye, world</h1>}>
        <h1>Hello, world</h1>
      </Child>
    </div>
  );
}

function Child(props) {
  console.log(props);
  return (
    <div>
      <div>{props.children}</div>
      <div className="top">{props.greeting}</div>
      <div className="bottom">{props.goodbye}</div>
    </div>
  );
}
