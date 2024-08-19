/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/cartReducer";

const CartContext = createContext();

const cartState = {
  products: [],
  isLoading: false,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, cartState);
  const setCartPurchase = (itemPurchased) => {
    const subtotal = itemPurchased.quantity * itemPurchased.price;
    const correctedPurchase = { ...itemPurchased, subtotal };
    dispatch({ type: "SET_PURCHASE_ITEM", payload: correctedPurchase });
  };
  const deleteCartItem = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{ ...state, setCartPurchase, deleteCartItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider, useCartContext };
