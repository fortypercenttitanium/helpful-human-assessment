import React, { createContext, useState, useEffect } from 'react';
const DataContext = createContext();

function Context({ children }) {
  const [colors, setColors] = useState();
  const [filteredColors, setFilteredColors] = useState([]);
  const [families, setFamilies] = useState();
  const [loading, setLoading] = useState(true);
  const [inErrorState, setInErrorState] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [filters, setFilters] = useState({ search: '', baseColor: '' });

  useEffect(() => {
    // Fetch data and switch loading indicator off
    async function getData() {
      try {
        const baseURL = process.env.REACT_APP_DB_URL || '/';

        const getColors = async () => {
          const response = await fetch(`${baseURL}db/colors`, {
            method: 'GET',
          });
          if (!response.ok) return setInErrorState(true);
          const colors = await response.json();

          setColors(colors);
        };

        const getFamilies = async () => {
          const response = await fetch(`${baseURL}db/families`, {
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

  useEffect(() => {
    // Apply filters as they change
    if (!colors?.length) return;
    let colorsCopy = [...colors];

    if (filters.baseColor) {
      colorsCopy = colorsCopy.filter(
        (color) =>
          color.baseColor.toLowerCase() === filters.baseColor.toLowerCase(),
      );
    }

    if (filters.search) {
      colorsCopy = colorsCopy.filter((color) =>
        color.name.toLowerCase().includes(filters.search.toLowerCase()),
      );
    }

    setFilteredColors(colorsCopy);
  }, [filters, colors, setFilteredColors]);

  return (
    <DataContext.Provider
      value={{
        filteredColors,
        colors,
        families,
        loading,
        filters,
        setFilters,
        selectedColor,
        setSelectedColor,
        inErrorState,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export { Context as default, DataContext };
