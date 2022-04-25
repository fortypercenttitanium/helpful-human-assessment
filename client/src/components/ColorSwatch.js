import React from 'react';
import styled from 'styled-components';

const Swatch = styled.div`
  height: 200px;
  width: 180px;
  border-radius: 12px;
  background-color: ${(props) => props.bg};
`;

function ColorSwatch({ hex }) {
  return <Swatch bg={hex} />;
}

export default ColorSwatch;
