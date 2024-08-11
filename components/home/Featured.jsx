import { useProductContext } from "../../context/productContext";
import FeaturedCard from "../cards/FeaturedCard";
import { Link } from "react-router-dom";
import Loading from "../products/Loading";

const Featured = () => {
  const { isLoading, featured } = useProductContext();

  if (isLoading) {
    return <Loading />;
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
            console.log(item);
            return (
              <Link to={`/products/${item._id}`} key={item._id}>
                <FeaturedCard item={item} />;
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Featured;
