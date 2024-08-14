/* eslint-disable react/prop-types */
import { useCartContext } from "../context/cartContext";
import Nav from "./home/Nav";
import Loading from "./products/Loading";
import { MdDelete } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const Cart = () => {
  const { products, isLoading, deleteCartItem } = useCartContext();

  let total = 0;
  // eslint-disable-next-line react/prop-types
  return (
    <>
      <Nav />
      {isLoading === true ? (
        <Loading />
      ) : (
        <div className="grid justify-center">
          <table className="w-[80vw] h-[100vh] text-center mt-20   ">
            <tbody>
              <tr className="grid grid-cols-6 text-left border-b-2 border-black pb-2">
                <th className="w-[10rem]"></th>
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
                    className="grid grid-cols-6 text-left py-2 text-zinc-700 font-semibold "
                  >
                    <td className="w-[10rem] grid justify-center">
                      <img
                        src={currElem.img}
                        alt={currElem.name}
                        className="w-[4rem] h-[4rem]"
                      />
                    </td>
                    <td className="w-[10rem]">{currElem.name}</td>
                    <td className="w-[10rem]">{currElem.price}</td>
                    <td className="w-[10rem]">{currElem.quantity}</td>
                    <td className="w-[10rem]">{currElem.subtotal}</td>
                    <td>
                      <button
                        onClick={() => {
                          confirm(
                            `Do you want to delete ${currElem.name} from your cart? `
                          )
                            ? deleteCartItem(currElem.id, currElem.name)
                            : null;
                        }}
                      >
                        <MdDelete className="text-red-500 text-xl" />
                      </button>
                    </td>
                  </tr>
                );
              })}

              {products.length > 0 ? (
                <tr className="grid grid-cols-6 py-2 border-t-2 border-black ">
                  <td className=" col-start-4  text-left font-bold ">Total</td>
                  <td className=" col-start-5  text-left text-zinc-700 font-semibold">
                    {products.forEach((element) => {
                      total += element.subtotal;
                    })}
                    {total}
                  </td>
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
