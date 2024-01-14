import NavbarItem from "./NavbarItem";
import CartWidget from "../Widgets/CartWidget";

import NavbarCategoryMenu from "./NavbarCategoryMenu";
import useFirebaseNavbarCategory from "../../Hooks/useFirebaseNavbarCategory";

function Navbar() {
 
  const {categories, categoriesLoading} = useFirebaseNavbarCategory()

  return (
    <nav className="flex w-full bg-teal-900 shadow-lg shadow-slate-300 justify-center items-center sticky top-0">
      <NavbarItem content="Inicio" href="/" w="w-1/5" />

      <NavbarCategoryMenu categoriesLoading={categoriesLoading}>
        {categories.map((e) => (
          <NavbarItem
            key={e.category}
            content={e.category}
            href={e.link}
            w="w-full"
          />
        ))}
      </NavbarCategoryMenu>
  
      <CartWidget />
    </nav>
  );
}

export default Navbar;
