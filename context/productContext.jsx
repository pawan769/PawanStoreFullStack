import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/productReducer";

const ProductContext = createContext();
const api = "https://restapi-production-fe9e.up.railway.app/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featured: [],
};
// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const productData = await res.data;

      dispatch({ type: "SET_API_DATA", payload: productData });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };
  useEffect(() => {
    getApiData(api);
  }, []);
  return (
    <ProductContext.Provider value={{ ...state }}>
      {children}
    </ProductContext.Provider>
  );
};
//custom hook
const useProductContext = () => {
  return useContext(ProductContext);
};
// eslint-disable-next-line react-refresh/only-export-components
export { AppProvider, ProductContext, useProductContext };
