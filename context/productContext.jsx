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
  isSingleLoading: false,
  singleProduct: {},
  isGrid: true,
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

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct[0] });
    } catch (error) {
      dispatch({ type: "SINGLE_API_ERROR" });
    }
  };

  const setIsGrid = (isGrid) => {
    dispatch({ type: "SET_ISGRID", payload: isGrid });
  };

  useEffect(() => {
    getApiData(api);
  }, []);

  return (
    <ProductContext.Provider value={{ ...state, getSingleProduct,setIsGrid }}>
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
