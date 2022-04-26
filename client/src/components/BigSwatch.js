import styled from 'styled-components';
import { SwatchContainer } from './Swatch';

const BigSwatchContainer = styled(SwatchContainer)`
  width: 100%;
  height: 440px;
  :hover {
    transform: none;
  }
`;

function BigSwatch({ hex, onClick: handleClick }) {
  return (
    <BigSwatchContainer onClick={handleClick}>
      <div className="top" style={{ backgroundColor: hex }} />
      <div className="bottom">
        <p>{hex}</p>
      </div>
    </BigSwatchContainer>
  );
}

export default BigSwatch;
