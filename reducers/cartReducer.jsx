const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_PURCHASE_ITEM": {
      const newArray = state.products;
      const itemIndex = newArray.findIndex(
        (elem) => elem.id == action.payload.id
      );
      itemIndex !== -1
        ? (newArray[itemIndex] = {
            ...newArray[itemIndex],
            quantity: newArray[itemIndex].quantity + action.payload.quantity,
          })
        : newArray.push(action.payload);

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

      state.products.splice(itemToDelete, 1);

      return { ...state };
    }
    default:
      return state;
  }
};
export default cartReducer;
