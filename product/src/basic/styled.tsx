import * as React from 'react';

import styled from "styled-components";

// Styled component named StyledButton
const StyledButton = styled.button`
  background-color: black;
  font-size: 32px;
  color: white;
`;

const StyledButton2 = styled.button`
  min-width: 200px;
  border: none;
  font-size: 18px;
  padding: 7px 10px;
  /* The resulting background color will be based on the bg props. */
  background-color: ${props => props.bg === "black" ? "black" : "blue"}
`;

export default function StyledComp() {
  return (
    <div>
    <StyledButton> Login </StyledButton>
      <StyledButton2 bg="red">Button A</StyledButton2>
      <StyledButton2 bg="blue">Button B</StyledButton2>
      </div>
      );
}
