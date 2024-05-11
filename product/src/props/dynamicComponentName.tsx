import * as React from 'react';


const testComponent = (e) =>{ 
console.log(`default prop`, e.target.innerHTML);
 }



export default ({ name }) => <h1 onClick={testComponent}>Hel {name}!</h1>;
