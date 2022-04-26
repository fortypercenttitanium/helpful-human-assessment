import styled from 'styled-components';

export const SwatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 260px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.15s;
  :hover {
    transform: scale(1.05);
  }

  .top {
    display: flex;
    height: 100%;
    border-radius: 10px 10px 0px 0px;
    border: 1px solid rgb(200, 200, 200);
    border-bottom: none;
  }

  .bottom {
    display: flex;
    padding: 16px 0 2px 16px;
    align-items: flex-end;
    border: 1px solid rgb(200, 200, 200);
    border-top: none;
    border-radius: 0px 0px 10px 10px;
    color: #363c3c;
  }
`;

function Swatch({ hex, onClick: handleClick }) {
  return (
    <SwatchContainer onClick={handleClick}>
      <div className="top" style={{ backgroundColor: hex }} />
      <div className="bottom">
        <p>{hex}</p>
      </div>
    </SwatchContainer>
  );
}

export default Swatch;
