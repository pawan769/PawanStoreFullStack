import Nav from "../home/Nav";
import { useProductContext } from "../../context/productContext";
const Contacts = () => {
  const myName = useProductContext();
  return (
    <div>
      <Nav />
      contacts
      {myName}
    </div>
  );
};

export default Contacts;
