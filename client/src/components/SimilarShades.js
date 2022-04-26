import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { DataContext } from './context/Context';
import SmallSwatch from './SmallSwatch';

const ShadesContainer = styled.div`
  display: flex;
  overflow-x: auto;
  width: 100%;

  .overflow {
    display: flex;
    gap: 12px;
    padding: 4px 12px;
    justify-content: center;
    align-items: center;
  }
`;

function SimilarShades({ onClick: handleClick }) {
  const { selectedColor, families, colors } = useContext(DataContext);
  const [shades, setShades] = useState([]);

  useEffect(() => {
    const { family } = selectedColor;
    const selectedFamily = families.find(
      (familyObj) => familyObj._id === family,
    );

    const shadesOfFamily = colors.filter((color) =>
      selectedFamily.shades.includes(color._id),
    );
    setShades(shadesOfFamily);
  }, [selectedColor, families, colors]);

  return (
    <ShadesContainer>
      <div className="overflow">
        {shades.map((shade) => (
          <SmallSwatch
            onClick={() => handleClick(shade)}
            key={shade.__id}
            hex={shade.hex}
          />
        ))}
      </div>
    </ShadesContainer>
  );
}

export default SimilarShades;
