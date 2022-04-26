import { useContext } from 'react';
import styled from 'styled-components';
import { DataContext } from './context/Context';
import Swatch from './Swatch';

const SwatchSelectorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  width: 100%;
  row-gap: 24px;
  flex: 1;
  overflow-x: auto;
  place-items: center;
  padding: 48px 24px 0;

  @media (max-width: 500px) {
    padding: 48px 0 0;
  }
`;

function SwatchSelector({ selectedPage, swatchesPerPage }) {
  const { filteredColors } = useContext(DataContext);

  return (
    <SwatchSelectorContainer>
      {filteredColors
        .slice(
          (selectedPage - 1) * swatchesPerPage,
          swatchesPerPage * selectedPage,
        )
        .map((color) => (
          <Swatch key={color._id} hex={color.hex} />
        ))}
    </SwatchSelectorContainer>
  );
}

export default SwatchSelector;
