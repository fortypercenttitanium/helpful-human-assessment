import { useContext } from 'react';
import styled from 'styled-components';
import BigSwatch from '../BigSwatch';
import { DataContext } from '../context/Context';
import SimilarShades from '../SimilarShades';

const DetailViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
  width: clamp(360px, 80%, 600px);
  margin: auto;

  .clear button {
    border-radius: 6px;
    border: 1px solid #363c3c;
    padding: 2px 48px;
    font-weight: bold;
    color: #363c3c;
    background-color: white;
    cursor: pointer;
  }
`;

function DetailView() {
  const { selectedColor, setSelectedColor } = useContext(DataContext);

  function handleClickClear() {
    setSelectedColor(null);
  }

  function handleClickSmall(color) {
    setSelectedColor(color);
  }

  return (
    <DetailViewContainer>
      <BigSwatch hex={selectedColor.hex} onClick={handleClickClear} />
      <SimilarShades onClick={handleClickSmall} />
      <div className="clear">
        <button onClick={handleClickClear}>Clear</button>
      </div>
    </DetailViewContainer>
  );
}

export default DetailView;
