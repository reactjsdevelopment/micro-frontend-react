import * as React from 'react';

import { useState } from 'react';

export default function Person({ person, index }) {
  console.log(person, index, 'test');
  let green = '#39D1B4';
  let yellow = '#FFD712';
  const [buttonColor, setButtonColor] = useState(green);

  function handleColorChange() {
    const newColor = buttonColor === green ? yellow : green;
    setButtonColor(newColor);
  }

  return (
    <div style={{ color: buttonColor }}>
      <p>
        My name is {person.person}. My age is {person.age}. index is {index}
      </p>
      <button onClick={handleColorChange}>handleColorChange</button>
    </div>
  );
}
