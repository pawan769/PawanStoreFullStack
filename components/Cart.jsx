/* eslint-disable react/prop-types */
import { useCartContext } from "../context/cartContext";
import Nav from "./home/Nav";
import Loading from "./products/Loading";
import { MdDelete } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const Cart = () => {
  const { products, isLoading } = useCartContext();
  console.log(products);
  // eslint-disable-next-line react/prop-types
  return (
    <>
      <Nav />
      {isLoading === true ? (
        <Loading />
      ) : (
        <table className="w-[80%] flex">
          <tbody>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Remove</th>
            </tr>
            {products.map((currElem, index) => {
              return (
                <tr key={index}>
                  <td>{currElem.name}</td>
                  <td>{currElem.price}</td>
                  <td>{currElem.quantity}</td>
                  <td>{currElem.subtotal}</td>
                  <td>
                    <button>
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Cart;
