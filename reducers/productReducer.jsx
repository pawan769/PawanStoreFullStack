const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "SET_API_DATA": {
      const featuredData = action.payload.filter((elem) => {
        return elem.featured === true;
      });

      return {
        ...state,
        isLoading: false,

        featured: featuredData,
        products: action.payload,
      };
    }
    default:
      state;
  }
};

export default productReducer;
