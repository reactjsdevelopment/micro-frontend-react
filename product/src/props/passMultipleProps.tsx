import * as React from 'react';

function PassMultipleProps({...props}) {
  console.log(props, 'multiple props');
  return (
    <div>
        <div className="App-header"> </div>
        <h1>{1 + 1}</h1>
        <h1>{1 == 1 ? 'True!' : 'False'}</h1>
        <p>{props.a +props.b }</p>
    </div>
  );
}

export default PassMultipleProps;
