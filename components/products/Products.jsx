import Nav from "../home/Nav";
import { useProductContext } from "../../context/productContext";
import FeaturedCard from "../cards/FeaturedCard";
const Products = () => {
  const { products } = useProductContext();

  return (
    <>
      <Nav />
      <div className=" h-[100vh] flex flex-wrap">
        {products.map((currElem, index) => {
          return <FeaturedCard key={index} item={currElem} />;
        })}
      </div>
    </>
  );
};

export default Products;
