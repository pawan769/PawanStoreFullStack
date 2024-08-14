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
    case "DELETE_ITEM": {
      const itemToDelete = state.products.findIndex(
        (obj) => obj.id == action.payload
      );
      console.log(itemToDelete);
      state.products.splice(itemToDelete, 1);

      return { ...state };
    }
    default:
      return state;
  }
};
export default cartReducer;
