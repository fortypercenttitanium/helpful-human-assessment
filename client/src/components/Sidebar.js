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
  padding: 48px 24px;
  gap: 16px;
  width: clamp(200px, 20%, 240px);
  color: #363c3c;

  .button-container button {
    text-align: center;
    font-weight: bold;
    padding: 6px 16px;
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
  const { filters, setFilters } = useContext(DataContext);

  return (
    <SidebarContainer>
      <div className="button-container">
        <button>Random Color</button>
      </div>
      <div className="base-color-filters">
        <ul>
          {baseColorSelections.map((selection) => (
            <li>
              <button className="base-color-selector">{selection}</button>
            </li>
          ))}
        </ul>
      </div>
    </SidebarContainer>
  );
}

export default Sidebar;
