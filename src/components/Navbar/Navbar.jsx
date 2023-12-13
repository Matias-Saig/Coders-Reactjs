import Navbar_Item from "./Navbar_Item";
import CartWidget from "../Widgets/CartWidget";
import { useState } from "react";

function Navbar() {
  const [a, b] = useState(true);
  
  return (
    <nav className="flex bg-emerald-700 shadow-lg shadow-slate-300">
      <Navbar_Item content={"Inicio"} url={"#"} active={"bg-emerald-800"} />
      <Navbar_Item content={"Productos"} url={"#"} />
      <Navbar_Item content={"Preguntas frecuentes"} url={"#"} />
      <Navbar_Item content={"Contacto"} url={"#"} />

      <CartWidget />
    </nav>
  );
}

export default Navbar;
