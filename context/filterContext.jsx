/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducer from "../reducers/filterReducer.jsx";
import { useProductContext } from "./productContext.jsx";
const FilterContext = createContext();

// const initialState = {
//   filterProducts: [{ name: "pawan" }],
//   isLoading: false,
// };

const initialFilterObj = {
  filterProducts: [],
  company: "All",
  category: "ALL",
  price: 200000,
  isLoading: false,
};

const FilterProvider = ({ children }) => {
  const [filterObj, setFilterObj] = useState(initialFilterObj);
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialFilterObj);

  const setInitialFilter = () => {
    dispatch({ type: "SET_CATEGORY", payload: products });
  };

  useEffect(() => {
    if (products && products.length > 0) {
      setInitialFilter();
    }
  }, [products]);

  const setCategoryFilter = (category) => {
    const filteredProducts = products.filter(
      (elem) => elem.category === category
    );
    dispatch({ type: "SET_CATEGORY", payload: filteredProducts });
  };
  const setCompanyFilter = (company) => {
    const filteredProducts = products.filter(
      (elem) => elem.company === company
    );
    dispatch({ type: "SET_COMPANY", payload: filteredProducts });
  };
  const setPriceFilter = (price) => {
    const filteredProducts = products.filter((elem) => elem.price <= price);
    dispatch({ type: "SET_PRICE", payload: filteredProducts });
  };
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setCategoryFilter,
        setInitialFilter,
        setCompanyFilter,
        setPriceFilter,
        filterObj,
        setFilterObj,
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
