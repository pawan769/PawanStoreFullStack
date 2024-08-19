/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/filterReducer.jsx";
import { useProductContext } from "./productContext.jsx";
const FilterContext = createContext();

const initialFilterObj = {
  filterProducts: [],
  allProducts: [],
  filterSource: {
    searchText: "",
    category: "All",
    company: "All",
    price: 200000,
  },
  sortingValue: "lowest",
};

const FilterProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialFilterObj);

  const loadFilterProducts = () => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  };

  const setSortingValue = (event) => {
    dispatch({ type: "SET_SORTING_VALUE", payload: event.target.value });
  };
  const setFilterSource = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
    dispatch({ type: "SET_FILTER_SOURCE", payload: { name, value } });
  };

  const clearFilter = () => {
    dispatch({ type: "CLEAR_FILTER", payload: initialFilterObj });
  };

  useEffect(() => {
    loadFilterProducts();
  }, [products]);

  useEffect(() => {
    dispatch({ type: "SET_FILTER_PRODUCTS" });
    dispatch({ type: "SORTING" });
  }, [state.filterSource, products, state.sortingValue]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setFilterSource,
        loadFilterProducts,
        clearFilter,
        setSortingValue,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};
export { FilterProvider, useFilterContext };
