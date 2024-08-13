const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_PURCHASE_ITEM": {
      const newArray = state.products;
      newArray.push(action.payload);

      return {
        ...state,
        products: newArray,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
export default cartReducer;
