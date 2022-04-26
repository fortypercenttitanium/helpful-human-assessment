import { useState } from 'react';
import styled from 'styled-components';
import SwatchSelector from '../SwatchSelector';
import PageSelector from '../PageSelector';

const SelectorViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;

const swatchesPerPage = 12;

function SelectorView() {
  const [selectedPage, setSelectedPage] = useState(1);

  return (
    <SelectorViewContainer>
      <SwatchSelector
        selectedPage={selectedPage}
        swatchesPerPage={swatchesPerPage}
      />
      <PageSelector
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        swatchesPerPage={swatchesPerPage}
      />
    </SelectorViewContainer>
  );
}

export default SelectorView;
