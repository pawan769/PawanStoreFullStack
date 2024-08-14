import Nav from "../home/Nav";

import { useProductContext } from "../../context/productContext";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  TbTruckDelivery,
  TbExchange,
  TbShieldCheckFilled,
} from "react-icons/tb";
import { LiaGiftSolid } from "react-icons/lia";

import StarRating from "../StarRating.jsx";
import NavigationBar from "../NavigationBar.jsx";
import Loading from "./Loading.jsx";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/cartContext.jsx";

const SingleProduct = () => {
  const { id } = useParams();

  const { isSingleLoading, singleProduct, getSingleProduct } =
    useProductContext();
  const { setCartPurchase } = useCartContext();

  const Url = `https://restapi-production-fe9e.up.railway.app/api/products/id`;
  const navigate = useNavigate();

  useEffect(() => {
    getSingleProduct(`${Url}/${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [no_of_items, setItems] = useState(1);

  return (
    <>
      <Nav />
      {isSingleLoading ? (
        <Loading />
      ) : (
        <>
          <NavigationBar title={singleProduct.name} />
          <div className="flex justify-center items-center h-screen">
            <div className="container flex justify-center items-center h-[70%]  w-[60%] ">
              <div className="imgs w-1/2 h-full ">
                <img
                  className="w-full h-full"
                  src={singleProduct.img}
                  alt={singleProduct.img}
                />
              </div>
              <div className="description  w-1/2 h-full  ">
                <div className="flex flex-col justify-around items-left h-full w-full ">
                  <h2 className="text-2xl ">{singleProduct.name}</h2>
                  <div className="rating flex items-center text-zinc-500 gap-2">
                    <StarRating rating={singleProduct.rating} />
                    {`(${singleProduct.rating} costumer review)`}
                  </div>
                  <div className="font-medium text-sm text-zinc-700">
                    MRP :
                    <span className="font-medium">रु{singleProduct.price}</span>
                  </div>
                  <div className="font-normal text-base text-zinc-700 text-justify">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sapiente voluptatibus veritatis commodi deleniti harum velit
                    magnam accusantium possimus quam sequi, illum quis vero sed
                    consequuntur quidem consequatur, ratione reprehenderit.
                    Maxime?
                  </div>

                  <div className="border-b-2 border-zinc-500 flex justify-between mr-1">
                    <div className="flex flex-col items-center">
                      <TbTruckDelivery className="text-3xl" />
                      <h4 className="font-semibold text-xs text-zinc-700">
                        Free Delivery
                      </h4>
                    </div>
                    <div className="flex flex-col items-center">
                      <TbExchange className="text-3xl" />
                      <h4 className="font-semibold text-xs text-zinc-700">
                        30 Days Replacement
                      </h4>
                    </div>
                    <div className="flex flex-col items-center">
                      <TbShieldCheckFilled className="text-3xl" />
                      <h4 className="font-semibold text-xs text-zinc-700">
                        2 Year Warranty
                      </h4>
                    </div>
                    <div className="flex flex-col items-center">
                      <LiaGiftSolid className="text-3xl" />
                      <h4 className="font-semibold text-xs text-zinc-700">
                        Special Gifts
                      </h4>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 text-zinc-500">
                    <div className="font-medium ">
                      ID :{" "}
                      <span className="font-medium text-black">
                        {singleProduct._id}
                      </span>
                    </div>
                    <div className="font-medium">
                      Brand :{" "}
                      <span className="font-medium text-black">
                        {singleProduct.company}
                      </span>
                    </div>
                    <div className="border-b-2 border-black mr-20"></div>
                  </div>

                  <div className="incDec flex flex-col justify-center items-left gap-3 ">
                    <div className="ml-1 gap-5 flex">
                      <button
                        className=" text-3xl font-bold text-center"
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
                        onChange={(e) => setItems(Number(e.target.value))}
                        className="w-[50px]  text-3xl font-bold text-center text-zinc-500"
                      />
                      <button
                        className="text-3xl font-bold text-center"
                        onClick={() => {
                          setItems(no_of_items + 1);
                        }}
                      >
                        +
                      </button>
                    </div>
                    {/* <Link to="/cart" state={{ singleProduct, no_of_items }}> */}
                    <button
                      className="flex border-2 text-white font-semibold border-emerald-500 bg-emerald-500 w-1/4 h-[3rem] items-center justify-center"
                      onClick={() => {
                        const purchaseData = {
                          id: singleProduct._id,
                          name: singleProduct.name,
                          img: singleProduct.img,
                          category: singleProduct.category,
                          price: singleProduct.price,
                          quantity: no_of_items,
                        };

                        setCartPurchase(purchaseData);
                        navigate("/cart");
                      }}
                    >
                      Add To Cart
                    </button>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SingleProduct;
