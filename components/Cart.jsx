/* eslint-disable react/prop-types */
import { useState } from "react";
import { useCartContext } from "../context/cartContext";
import Nav from "./home/Nav";
import Modal from "./Modal";
import Loading from "./products/Loading";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Cart = () => {
  const { products, isLoading, deleteCartItem, clearCart } = useCartContext();
  const [isModal, setIsModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState("");
  const [isClearAllModal, setClearAllModal] = useState(false);
  const modal = {
    prompt: "Are you sure? Please, Confirm!",
    btn: [{ name: "Confirm" }, { name: "Cancel" }],
  };

  let total = 0;
  // eslint-disable-next-line react/prop-types
  return (
    <>
      <div>
        {isModal && (
          <Modal
            modal={modal}
            state={setIsModal}
            action={deleteCartItem}
            payload={itemToDelete}
          />
        )}
      </div>
      <div>
        {isClearAllModal && (
          <Modal modal={modal} state={setClearAllModal} action={clearCart} />
        )}
      </div>
      <Nav />
      {isLoading === true ? (
        <Loading />
      ) : (
        <div className="grid justify-center">
          <table className="w-[80vw] h-[100vh] text-center mt-20 text-zinc-500   ">
            <tbody>
              <tr className="grid grid-cols-5 text-left border-b-2 border-zinc-500 pb-2 uppercase  font-semibold">
                <th className="w-[10rem]">Item</th>
                <th className="w-[10rem]">Price</th>
                <th className="w-[10rem]">Quantity</th>
                <th className="w-[10rem]">Subtotal</th>
                <th className="w-[10rem]">Remove</th>
              </tr>
              {products.map((currElem, index) => {
                return (
                  <tr
                    key={index}
                    className="grid grid-cols-5 text-left py-2 text-zinc-500 font-base "
                  >
                    <td className="w-[10rem] flex gap-1">
                      <img
                        src={currElem.img}
                        alt={currElem.name}
                        className="w-[3rem] h-[3rem]"
                      />
                      {currElem.name}
                    </td>
                    <td className="w-[10rem]">{currElem.price}</td>
                    <td className="w-[10rem]">{currElem.quantity}</td>
                    <td className="w-[10rem]">{currElem.subtotal}</td>
                    <td>
                      <button
                        onClick={() => {
                          setIsModal(true);
                          setItemToDelete(currElem.id);
                        }}
                      >
                        <MdDelete className="text-red-500 text-xl" />
                      </button>
                    </td>
                  </tr>
                );
              })}

              <div className="border-t-2 border-zinc-500 flex justify-between pt-5  w-[80vw]">
                <Link to={"/products"}>
                  <button className="w-[10rem] bg-emerald-500  text-white font-semibold py-2">
                    Continue Shopping
                  </button>
                </Link>
                {products.length > 0 ? (
                  <button
                    className="w-[10rem] bg-red-500  text-white font-semibold py-2"
                    onClick={() => {
                      setClearAllModal(true);
                    }}
                  >
                    Clear Cart
                  </button>
                ) : null}
              </div>

              {products.length > 0 ? (
                <tr className="grid grid-cols-5 py-2 mt-5 ">
                  <div className=" col-start-5   font-bold  flex flex-col gap-5 p-2 rounded-sm bg-zinc-200">
                    <div className="flex justify-between">
                      <div>Total:</div>
                      <span className="   text-zinc-700 font-bold">
                        Rs.
                        {products.forEach((element) => {
                          total += element.subtotal;
                        })}
                        {total}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <div>Shipping:</div>
                      <span className="   text-zinc-700 font-bold">Rs.50</span>
                    </div>
                    <div className="border-t-2 border-zinc-500"></div>
                    <div className="flex justify-between">
                      <div>Order Total:</div>
                      <span className="   text-zinc-700 font-bold">
                        Rs.{total + 50}
                      </span>
                    </div>
                  </div>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Cart;
