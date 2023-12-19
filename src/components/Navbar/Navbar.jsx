import Navbar_Item from "./Navbar_Item";
import CartWidget from "../Widgets/CartWidget";

const links = [
  {
    content: "Inicio",
    href: "/",
  },
  {
    content: "aromatica",
    href: "/category/aromaticas",
  },
  {
    content: "decorativa",
    href: "/category/decorativas",
  },
  {
    content: "frutal",
    href: "/category/frutales",
  },
  {
    content: "Contacto",
    href: "/contacto",
  },
];

function Navbar() {
  return (
    <nav className="flex bg-emerald-700 shadow-lg shadow-slate-300">
      {links.map((link) => (
        <Navbar_Item key={link.href} content={link.content} href={link.href} />
      ))}

      <CartWidget />
    </nav>
  );
}

export default Navbar;
