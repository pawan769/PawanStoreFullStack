import Nav from "../home/Nav";

import { useProductContext } from "../../context/productContext";
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

const Products = () => {
  const id = "Iphone 14 Pro Max";
  const { isSingleLoading, singleProduct, getSingleProduct } =
    useProductContext();

  const API = `https://restapi-production-fe9e.up.railway.app/api/products?name=${id}`;

  useEffect(() => {
    getSingleProduct(API);
  }, []);

  const [no_of_items, setItems] = useState(0);

  if (isSingleLoading) {
    return <div>....singleloading</div>;
  }

  return (
    <>
      <Nav />
      <div className="flex justify-center items-center h-screen">
        <div className="container flex justify-center items-center h-[70%] border-2 w-[60%] border-red-500">
          <div className="imgs w-1/2 h-full border-2 border-blue-500">
            <img src={singleProduct.img} alt={singleProduct.img} />
          </div>
          <div className="description  w-1/2 h-full border-2 border-blue-500">
            <div className="flex flex-col justify-between items-left h-full w-full border-2 border-green-500">
              <h2 className="text-2xl ">{singleProduct.name}</h2>
              <div className="rating">{singleProduct.rating}</div>
              <div>MRP:{singleProduct.price}</div>
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sapiente voluptatibus veritatis commodi deleniti harum velit
                magnam accusantium possimus quam sequi, illum quis vero sed
                consequuntur quidem consequatur, ratione reprehenderit. Maxime?
              </div>
              <div>
                <div>Id:{singleProduct._id}</div>
                <div>Brand:{singleProduct.company}</div>
              </div>
              <div className="incDec flex justify-left items-center">
                <button
                  onClick={() => {
                    if (no_of_items != 0) setItems(no_of_items - 1);
                  }}
                >
                  -
                </button>
                <input
                  type="text"
                  name="no_of_items"
                  id="no_of_items"
                  value={no_of_items}
                  className="w-[25px] text-center"
                />
                <button
                  onClick={() => {
                    setItems(no_of_items + 1);
                  }}
                >
                  +
                </button>
              </div>
              <button>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
