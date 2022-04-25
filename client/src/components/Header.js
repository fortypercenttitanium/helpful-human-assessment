import { useContext } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { DataContext } from './context/Context';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #363c3c;
  padding: 8px 20px;

  .logo img {
    height: 50px;
  }

  .search input {
    font-size: 1rem;
    padding: 12px;
    border-radius: 10px;
    width: 240px;
  }
`;

function Header() {
  const { filters, setFilters } = useContext(DataContext);

  function handleSearchChange(e) {
    setFilters({
      ...filters,
      search: e.target.value,
    });
  }

  return (
    <HeaderContainer>
      <div className="logo">
        <img src={logo} alt="Helpful Human Logo" />
      </div>
      <div className="search">
        <input
          type="text"
          name="search-bar"
          id="search-bar"
          value={filters.search}
          onChange={handleSearchChange}
          placeholder="Search"
        />
      </div>
    </HeaderContainer>
  );
}

export default Header;
