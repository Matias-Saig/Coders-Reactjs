import NavbarItem from "./NavbarItem";
import CartWidget from "../Widgets/CartWidget";

import NavbarCategoryMenu from "./NavbarCategoryMenu";
import useFirebaseNavbarCategory from "../../Hooks/useFirebaseNavbarCategory";

function Navbar() {
 
  const {categories, categoriesLoading} = useFirebaseNavbarCategory()

  return (
    <nav className="z-50 flex items-center w-full bg-teal-900 shadow-lg shadow-slate-300 px-3  sticky top-0 gap-1">
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

      
  
      <NavbarItem content="Mis Compras" href="/cart" w="w-1/5   ml-[40%]" />
      <CartWidget />

    </nav>
  );
}

export default Navbar;
