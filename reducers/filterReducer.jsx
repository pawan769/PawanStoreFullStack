const FilterReducer = (state, action) => {
  switch (action.type) {
    case "SET_CATEGORY": {
      return { ...state, filterProducts: action.payload };
    }
    case "SET_COMPANY": {
      return { ...state, filterProducts: action.payload };
    }
    case "SET_PRICE": {
      return { ...state, filterProducts: action.payload };
    }
    default:
      return { ...state };
  }
};

export default FilterReducer;
