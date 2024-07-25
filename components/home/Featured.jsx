import { useProductContext } from "../../context/productContext";
import FeaturedCard from "../cards/FeaturedCard";

const Featured = () => {
  const { isLoading, featured } = useProductContext();
  console.log(featured);

  if (isLoading) {
    return <div>....loading</div>;
  }

  return (
    <div className=" flex justify-center items-top h-80 mt-20">
      <div className=" w-1/2 h-72">
        <h4 className="uppercase text-xs text-zinc-500">check now!</h4>
        <h2 className="uppercase text-2xl font-semibold mb-5">
          Our featured Products
        </h2>
        <div className="flex justify-between">
          {featured.map((item) => {
            return <FeaturedCard key={item._id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Featured;
