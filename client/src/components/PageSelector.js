import { useContext, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { DataContext } from './context/Context';

const PageSelectorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid grey;
  padding: 24px;
  gap: 24px;
  width: 100%;
  font-size: 1rem;

  .page-button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  @media (max-width: 500px) {
    gap: 12px;
    padding: 24px 6px;
  }
`;

function PageSelector({ selectedPage, setSelectedPage, swatchesPerPage }) {
  const { filteredColors, filters } = useContext(DataContext);

  useEffect(() => {
    setSelectedPage(1);
  }, [filters, setSelectedPage]);

  const renderPageNumbers = useCallback(() => {
    let pages = [];

    const numPages = filteredColors.length
      ? Math.ceil(filteredColors.length / swatchesPerPage)
      : 1;

    for (let i = 1; i <= numPages; i++) {
      pages.push(i);
    }

    return pages.map((page) => (
      <div className="page-container" key={page}>
        <button
          style={{
            fontWeight: selectedPage === page ? 'bold' : 'normal',
            textDecorationLine: selectedPage === page ? 'underline' : 'none',
          }}
          className="page-button"
          onClick={() => handleClickPage(page)}
        >
          {page}
        </button>
      </div>
    ));

    function handleClickPage(page) {
      if (selectedPage === page) return;

      setSelectedPage(page);
    }
  }, [filteredColors, selectedPage, setSelectedPage, swatchesPerPage]);

  return <PageSelectorContainer>{renderPageNumbers()}</PageSelectorContainer>;
}

export default PageSelector;
