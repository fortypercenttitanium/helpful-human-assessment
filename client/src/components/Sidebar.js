import { useContext } from 'react';
import styled from 'styled-components';
import { DataContext } from './context/Context';

const baseColorSelections = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Brown',
  'Grey',
];

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #adadad;
  background-color: #d6d8d8;
  padding: 48px 20px;
  gap: 16px;
  width: clamp(180px, 23%, 260px);
  color: #363c3c;

  @media (max-width: 768px) {
    display: ${(props) => (props.mobileHide ? 'none' : 'flex')};
  }

  .button-container {
    button {
      text-align: center;
      font-weight: bold;
      font-size: 0.9rem;
      padding: 6px 8px;
      width: 100%;
      border-radius: 6px;
      box-shadow: none;
      border: 1px solid grey;
      background-color: white;
      cursor: pointer;
      transition: 0.3s;

      :hover {
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
      }
    }
  }

  .base-color-filters {
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    li {
      padding: 6px 0;
    }

    .base-color-selector {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      cursor: pointer;
    }
  }
`;

function Sidebar() {
  const { colors, filters, setFilters, selectedColor, setSelectedColor } =
    useContext(DataContext);

  function handleClickSelection(selection) {
    setSelectedColor(null);

    if (filters.baseColor === selection) {
      return setFilters({
        ...filters,
        baseColor: '',
      });
    }

    return setFilters({
      ...filters,
      baseColor: selection,
    });
  }

  function handleClickRandom() {
    setFilters({
      baseColor: '',
      search: '',
    });
    const random = Math.floor(Math.random() * colors.length);

    setSelectedColor(colors[random]);
  }

  return (
    <SidebarContainer mobileHide={selectedColor}>
      <div className="button-container">
        <button onClick={handleClickRandom}>Random Color</button>
      </div>
      <div className="base-color-filters">
        <ul>
          {baseColorSelections.map((selection) => (
            <li key={selection}>
              <button
                onClick={() => handleClickSelection(selection)}
                className="base-color-selector"
                style={{
                  fontWeight:
                    filters.baseColor === selection ? 'bold' : 'normal',
                }}
              >
                {selection}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </SidebarContainer>
  );
}

export default Sidebar;
