import React, { createContext, useState, useEffect } from 'react';
const DataContext = createContext();

function Context({ children }) {
  const [colors, setColors] = useState();
  const [families, setFamilies] = useState();
  const [loading, setLoading] = useState(true);
  const [inErrorState, setInErrorState] = useState(false);
  const [layout, setLayout] = useState('selector');
  const [filters, setFilters] = useState({ search: '', baseColor: '' });

  useEffect(() => {
    async function getData() {
      try {
        const baseURL = process.env.REACT_APP_DB_URL || '/db';

        const getColors = async () => {
          const response = await fetch(`${baseURL}/colors`, { method: 'GET' });
          if (!response.ok) return setInErrorState(true);
          const colors = await response.json();

          setColors(colors);
        };

        const getFamilies = async () => {
          const response = await fetch(`${baseURL}/families`, {
            method: 'GET',
          });
          if (!response.ok) return setInErrorState(true);
          const families = await response.json();

          setFamilies(families);
        };

        await Promise.all([getColors(), getFamilies()]);

        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    }

    getData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        colors,
        families,
        loading,
        filters,
        setFilters,
        layout,
        setLayout,
        inErrorState,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export { Context as default, DataContext };
