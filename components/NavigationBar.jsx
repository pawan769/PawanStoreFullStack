import { NavLink } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const NavigationBar = ({ title }) => {
  return (
    <div className="text-xl font-semibold ml-5">
      <NavLink to={"/"} className={" text-emerald-500"}>
        Home
      </NavLink>
      /{title}
    </div>
  );
};

export default NavigationBar;
