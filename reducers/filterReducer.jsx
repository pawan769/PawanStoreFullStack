const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS": {
      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
      };
    }
    case "SORTING": {
      const { sortingValue } = state;
      let newSortData = [];
      let tempData = [...state.filterProducts];

      const sortFilter = (a, b) => {
        if (sortingValue === "lowest") {
          return a.price - b.price;
        }
        if (sortingValue === "highest") {
          return b.price - a.price;
        }
        if (sortingValue === "a-z") {
          return a.name.localeCompare(b.name);
        }
        if (sortingValue === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };
      newSortData = tempData.sort(sortFilter);
      return {
        ...state,
        filterProducts: newSortData,
      };
    }

    case "SET_SORTING_VALUE": {
      return {
        ...state,
        sortingValue: action.payload,
      };
    }
    case "SET_FILTER_SOURCE": {
      const { name, value } = action.payload;
      console.log(name, value);
      return {
        ...state,
        filterSource: { ...state.filterSource, [name]: value },
      };
    }
    case "SET_FILTER_PRODUCTS": {
      let tempData = [...state.allProducts];
      let text = state.filterSource.searchText;
      let company = state.filterSource.company;
      let category = state.filterSource.category;
      let price = state.filterSource.price;

      if (text) {
        tempData = tempData.filter((elem) => {
          return elem.name.toLowerCase().includes(text);
        });
      }
      if (company != "All") {
        tempData = tempData.filter((elem) => {
          return elem.company.toLowerCase() === company;
        });
      }
      if (category != "All") {
        tempData = tempData.filter((elem) => {
          return elem.category.toLowerCase() === category.toLowerCase();
        });
      }
      if (price) {
        tempData = tempData.filter((elem) => {
          return elem.price <= price;
        });
      }

      return { ...state, filterProducts: tempData };
    }

    case "CLEAR_FILTER": {
      const { searchText, category, company, price } =
        action.payload.filterSource;
      const { sortingValue } = action.payload;
      return {
        ...state,
        filterSource: {
          ...state.filterSource,
          searchText,
          category,
          company,
          price,
        },
        sortingValue,
      };
    }

    default:
      return { ...state };
  }
};

export default FilterReducer;
