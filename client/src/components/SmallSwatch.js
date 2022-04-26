import styled from 'styled-components';
import { SwatchContainer } from './Swatch';

const SmallSwatchContainer = styled(SwatchContainer)`
  width: 100px;
  height: 100px;

  .bottom {
    padding: 8px 0 2px 8px;
  }
`;

function SmallSwatch({ hex, onClick: handleClick }) {
  return (
    <SmallSwatchContainer onClick={handleClick}>
      <div className="top" style={{ backgroundColor: hex }} />
      <div className="bottom">
        <p>{hex}</p>
      </div>
    </SmallSwatchContainer>
  );
}

export default SmallSwatch;
