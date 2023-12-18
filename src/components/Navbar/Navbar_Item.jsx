import { NavLink } from "react-router-dom";

function Navbar_Item({ content, href }) {
  return (
    <>
      <NavLink
        to={href}
        className={`hover:bg-teal-600 text-stone-300 hover:text-stone-50 transition-all
        font-extrabold font-serif text-lg text-center uppercase tracking-wider
        w-full py-2`}
      >
        {content}
      </NavLink>
    </>
  );
}

export default Navbar_Item;