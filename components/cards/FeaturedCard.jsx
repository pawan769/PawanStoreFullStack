/* eslint-disable react/prop-types */
const FeaturedCard = ({ item }) => {
  return (
    <div className=" w-fit m-2 relative  w-[30%] cursor-pointer hover:animate-pulse">
      <div className="h-[250px] w-[250px] ">
        <img src={item.img} alt={item._id} className="size-full" />
        <span className="absolute top-3 right-3 bg-emerald-500  px-3 py-1 rounded-2xl text-zinc-200 font-medium">
          {item.category}
        </span>
      </div>
      <div className="flex justify-between items-center py-1 bg-zinc-100 px-2">
        <h4 className="text-sm text-zinc-500">{item.name}</h4>
        <h4 className="text-emerald-500">रु{item.price}</h4>
      </div>
    </div>
  );
};

export default FeaturedCard;
