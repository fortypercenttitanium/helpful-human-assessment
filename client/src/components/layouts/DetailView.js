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
`;

function DetailView() {
  const { selectedColor, setSelectedColor } = useContext(DataContext);

  function handleClickBig() {
    setSelectedColor(null);
  }

  function handleClickSmall(color) {
    setSelectedColor(color);
  }

  return (
    <DetailViewContainer>
      <BigSwatch hex={selectedColor.hex} onClick={handleClickBig} />
      <SimilarShades onClick={handleClickSmall} />
      <div className="clear"></div>
    </DetailViewContainer>
  );
}

export default DetailView;
