import { createBrowserRouter } from "react-router-dom";
import App from "../src/App.jsx";
import About from "../components/about/About.jsx";
import Contacts from "../components/contacts/Contacts.jsx";
import Products from "../components/products/Products.jsx";
import SingleProduct from "../components/products/SingleProduct.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:id",
    element: <SingleProduct />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
]);

export default router;
