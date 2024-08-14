import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./nav.css";
import { useCartContext } from "../../context/cartContext";
const Nav = () => {
  const { products } = useCartContext();
  return (
    <nav className="flex justify-between items-center px-6 py-3 ">
      <h1 className="text-2xl font-bold border-4 border-black p-1 cursor-pointer">
        <span className="bg-emerald-500 px-1 mr-1 text-white ">Pawan</span>
        <span>Store</span>
      </h1>

      <div className="flex justify-center items-center gap-10">
        <div className="flex items-center mx-10">
          <ol className="flex justify-center items-center gap-10 font-semibold text-base">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ol>
        </div>

        <div className="flex justify-center items-center gap-5">
          <h4 className="text-zinc-600">Welcome,Pawan Bhandari</h4>

          <button className="bg-emerald-500 px-2 py-1 font-semibold text-white rounded-sm">
            Log Out
          </button>

          <div className="cart-wrapper flex justify-center">
            <Link to={"/cart"}>
              <FiShoppingCart size={25} className="cart" />
            </Link>
            <span
              className={`${products.length > 0 ? "cart-badge " : "hidden"} `}
            >
              {products.length}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
