const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_ISGRID":
      return {
        ...state,
        isGrid: action.payload,
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
    case "SET_SINGLE_PRODUCT": {
      return {
        ...state,
        isSingleLoading: false,

        singleProduct: action.payload,
      };
    }
    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SINGLE_API_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };
    default:
      state;
  }
};

export default productReducer;
