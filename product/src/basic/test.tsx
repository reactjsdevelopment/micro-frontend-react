import * as React from 'react';

import Person from './person';



export default function TestApp() {
const initialState = [
  {
    person: 'Ela',
    age: 48,
  },
  {
    person: 'Natalia',
    age: 28,
  },
];
  return (
    <div>
      <h2>
        {initialState.map((per, i) => {
          return <Person person={per}  index={i}/>;
        })}
      </h2>
    </div>
  );
}
