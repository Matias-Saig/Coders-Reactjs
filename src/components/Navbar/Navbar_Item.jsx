import { NavLink, useLocation } from "react-router-dom";

function Navbar_Item({ content, href }) {
  const local = useLocation().pathname;

  return (
    <>
      <NavLink
        to={href}
        className={`hover:bg-teal-600 text-stone-300 hover:text-stone-50 transition-all
        font-extrabold font-serif text-lg text-center uppercase tracking-wider
        w-full py-2 
        ${local === href ? " text-stone-200 bg-teal-900" : null}
        `}
      >
        {content}
      </NavLink>
    </>
  );
}

export default Navbar_Item;
