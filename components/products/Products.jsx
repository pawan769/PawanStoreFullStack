import Nav from "../home/Nav";
import { useProductContext } from "../../context/productContext";
import FeaturedCard from "../cards/FeaturedCard";
import { IoGrid, IoList } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
const Products = () => {
  const { products, isGrid, setIsGrid } = useProductContext();
  const [sliderValue, setSliderValue] = useState(10000);

  return (
    <>
      <Nav />
      <div className="flex justify-center items-center mt-16 ml-40">
        <div className="container w-[74vw] flex flex-col gap-2">
          <div className="header flex items-center gap-36">
            <input
              type="text"
              placeholder="Search"
              className="border-2 border-zinc-400 text-zinc-500 px-2 w-[12rem]"
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
            <h4 className="text-sm text-zinc-500">{`${products.length} total products`}</h4>
            <select
              name="price_filter"
              id="price_filter"
              defaultValue={"lowest"}
              className="border-2 border-zinc-400 text-zinc-500"
            >
              <option value="lowest">price(lowest)</option>
              <option value="highest">price(highest)</option>
            </select>
          </div>
          <div className="flex gap-1">
            <section className="flex flex-col gap-8 min-w-[12rem] max-w-[12rem] text-zinc-500">
              <div className="flex flex-col gap-2 mt-10">
                <h2 className="font-bold text-zinc-600 text-lg">Category</h2>
                <h4>All </h4>
                <h4>Mobile </h4>
                <h4>Laptop </h4>
                <h4>Computer </h4>
                <h4>Accessories </h4>
                <h4>Watch </h4>
              </div>
              <div>
                <h2 className="font-bold text-zinc-600 mb-[0.5rem] text-lg">
                  Company
                </h2>
                <select name="company" id="company">
                  <option value="All" defaultValue="All">
                    All
                  </option>
                </select>
              </div>
              <div className=" flex flex-col w-[9rem]">
                <h2 className="font-bold text-zinc-600 mb-[0.5rem] text-lg">
                  Price
                </h2>
                <label htmlFor="price_range" className="text-sm">
                  {" "}
                  रु{sliderValue}
                </label>
                <input
                  type="range"
                  id="price_range"
                  name="price_range"
                  min={1000}
                  max={200000}
                  step={10000}
                  defaultValue={100000}
                  onChange={(rangeObject) => {
                    setSliderValue(rangeObject.target.value);
                  }}
                />
              </div>
              <button className="border-2  border-emerald-500 bg-emerald-500 text-white font-semibold h-[3rem] max-w-[9rem] min-w-[8rem]">
                Clear Filters
              </button>
            </section>
            <section className="max-w-[65rem]  ">
              <div
                className={` mt-16  flex ${
                  isGrid ? "flex-wrap" : "flex-col"
                } gap-3 items-center justify-left`}
              >
                {products.map((currElem, index) => {
                  return (
                    <div key={index}>
                      <Link to={`/products/${currElem._id}`}>
                        <FeaturedCard item={currElem} isGrid={isGrid} />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
