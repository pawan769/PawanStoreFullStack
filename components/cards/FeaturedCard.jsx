/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const FeaturedCard = ({ item, isGrid }) => {
  return (
    <div
      className={`w-fit m-2 relative  w-[30%] cursor-pointer  ${
        !isGrid ? "flex " : null
      } `}
    >
      <div className="h-[20rem] max-w-[10rem] min-w-[20rem] relative hover:animate-pulse">
        <img src={item.img} alt={item._id} className="size-full" />
        <div className=" absolute top-3 right-3 bg-emerald-500  px-3 py-1 rounded-2xl text-zinc-200 font-medium">
          {item.category}
        </div>
      </div>
      {isGrid ? (
        <div className="flex justify-between items-center py-1 bg-zinc-100 px-2 w-[20rem]">
          <h4 className="text-sm text-zinc-500">{item.name}</h4>
          <h4 className="text-emerald-500">रु{item.price}</h4>
        </div>
      ) : (
        <div className="flex gap-5 items-left py-1 bg-zinc-100 px-2 w-[25rem] flex flex-col ">
          <h4 className="text-xl text-zinc-500">{item.name}</h4>
          <h4 className="text-emerald-500">रु{item.price}</h4>
          <h4 className="text-sm text-zinc-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
            dignissimos deleniti incidunt quasi numquam impedit temporibus
            dolorem earum nulla. Quia.
          </h4>
          <Link to={`/products/${item._id}`}>
            <button className="w-[8rem] bg-emerald-500 p-1 h-[3rem] text-white text-sm uppercase">
              Read More
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default FeaturedCard;
