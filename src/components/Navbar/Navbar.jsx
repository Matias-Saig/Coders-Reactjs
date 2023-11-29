import React from "react";
import Navbar_Item from "./Navbar_Item";
import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <nav className="flex justify-end mt-5">
      <Navbar_Item content={"Inicio"} url={"#"} />
      <Navbar_Item content={"Productos"} url={"#"} />
      <Navbar_Item content={"Sucursales"} url={"#"} />
      <Navbar_Item content={"Contacto"} url={"#"} />
      <CartWidget/>
    </nav>
  );
}

export default Navbar;
