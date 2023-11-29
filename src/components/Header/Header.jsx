import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import CartWidget from "../Widgets/CartWidget.jsx";

function Header() {
  return (
  
      <header>
        <div className="bg-gradient-to-b from-emerald-900 to-green-950 flex justify-center py-4">

          <img src="src/components/Header/menta-izq.png" alt="logo-izq" />

          <h1 className="font-sans uppercase font-bold text-stone-100 text-center text-4xl tracking-wider">
            Menta peperina
            <span className="block text-3xl text-stone-400 opacity-50">
              Vivero urbano
            </span>
          </h1>

          <img src="src/components/Header/menta-dre.png" alt="logo-dre" />

        </div>

        <Navbar />
      </header>
   
  );
}

export default Header;
