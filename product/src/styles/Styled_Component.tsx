import React, { useState } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

function randomColor() {
  return `#${Math.random().toString(16).substr(-6)}`;
}

const Card = styled.div`
  padding: 20px;
  text-align: center;
  color: white;
  background-color: ${(props) => props.color};
`;

const Container = styled.div`
  padding: 20px;
`;

function Styled_Component() {
  const [color, setColor] = useState('skyblue');
  console.log(color, 'color');
  return (
    <Container>
      <Card color={color} className="test">
        <input
          type={'button'}
          value={'Randomize Color'}
          onClick={() => setColor(randomColor())}
        />
      </Card>
    </Container>
  );
}

export default Styled_Component;
