import Nav from "../home/Nav";
import { useProductContext } from "../../context/productContext";
import FeaturedCard from "../cards/FeaturedCard";
import { IoGrid, IoList } from "react-icons/io5";

import { Link } from "react-router-dom";
import { useFilterContext } from "../../context/filterContext";
const Products = () => {
  const { isGrid, setIsGrid } = useProductContext();
  const {
    filterProducts,
    allProducts,
    setFilterSource,

    sortingValue,
    setSortingValue,
    filterSource,
    clearFilter,
  } = useFilterContext();

  const getUniqueData = (data, property) => {
    let newVal = data.map((currElem) => {
      return currElem[property];
    });
    newVal = ["All", ...new Set(newVal)];
    return newVal;
  };
  const allCategories = getUniqueData(allProducts, "category");

  return (
    <>
      <Nav />
      <div className="flex justify-center items-center mt-16 ml-40">
        <div className="container w-[78vw] flex flex-col gap-2">
          <div className="header flex items-center gap-36">
            <input
              type="text"
              placeholder="Search"
              value={filterSource.searchText}
              name="searchText"
              className="border-2 border-zinc-400 text-zinc-500 px-2 w-[12rem]"
              onChange={setFilterSource}
            />
            <div className="flex gap-6 text-lg">
              <IoGrid
                className="cursor-pointer"
                onClick={() => {
                  setIsGrid(true);
                }}
              />
              <IoList
                className="cursor-pointer"
                onClick={() => {
                  setIsGrid(false);
                }}
              />
            </div>
            <h4 className="text-sm text-zinc-500">{`${filterProducts.length} total products`}</h4>
            <select
              name="price_filter"
              id="price_filter"
              value={sortingValue}
              className="border-2 border-zinc-400 text-zinc-500"
              onChange={setSortingValue}
            >
              <option value="lowest">price(lowest)</option>
              <option value="highest">price(highest)</option>
              <option value="a-z">price(a-z)</option>
              <option value="z-a">price(z-a)</option>
            </select>
          </div>
          <div className="flex gap-1">
            <section className="flex flex-col gap-8 min-w-[12rem] max-w-[12rem] text-zinc-500">
              <div className="flex flex-col gap-2 mt-10 *:cursor-pointer">
                <h2 className="font-bold text-zinc-600 text-lg">Category</h2>
                {allCategories.map((elem, index) => {
                  return (
                    <button
                      className="text-left focus:outline-none focus:border-b-2 focus:border-emerald-500"
                      name={"category"}
                      value={elem}
                      onClick={setFilterSource}
                      key={index}
                    >
                      {elem}
                    </button>
                  );
                })}
              </div>
              <div>
                <h2 className="font-bold text-zinc-600 mb-[0.5rem] text-lg">
                  Company
                </h2>
                <select
                  name="company"
                  id="company"
                  value={filterSource.company}
                  onChange={setFilterSource}
                >
                  <option value="All">All</option>
                  <option value="apple">Apple</option>
                  <option value="samsung">Samsung</option>
                  <option value="dell">Dell</option>
                  <option value="mi">MI</option>
                  <option value="lenovo">Lenovo</option>
                </select>
              </div>
              <div className=" flex flex-col w-[9rem]">
                <h2 className="font-bold text-zinc-600 mb-[0.5rem] text-lg">
                  Price
                </h2>
                <label htmlFor="price_range" className="text-sm">
                  {" "}
                  रु{filterSource.price}
                </label>
                <input
                  type="range"
                  name="price"
                  min={1000}
                  max={200000}
                  step={10000}
                  value={filterSource.price}
                  onChange={setFilterSource}
                />
              </div>
              <button
                className="border-2  border-emerald-500 bg-emerald-500 text-white font-semibold h-[3rem] max-w-[9rem] min-w-[8rem] "
                onClick={clearFilter}
              >
                Clear Filters
              </button>
            </section>
            <section className="max-w-[65rem] min-w-[65rem]  ">
              {!filterProducts || filterProducts.length === 0 ? (
                <div className=" mt-16  flex items-top justify-center  h-[200%] w-[64rem]">
                  <p>No products available</p>{" "}
                </div>
              ) : (
                <div
                  className={` mt-16  flex ${
                    isGrid ? "flex-wrap" : "flex-col"
                  } gap-3 items-center justify-left `}
                >
                  {filterProducts.map((currElem, index) => {
                    return (
                      <div key={index}>
                        <Link to={`/products/${currElem._id}`}>
                          <FeaturedCard item={currElem} isGrid={isGrid} />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
