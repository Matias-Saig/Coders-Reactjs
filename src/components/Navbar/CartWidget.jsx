import React from "react";

function CartWidget() {
  return (
    <>
      <button className="bg-teal-600 hover:bg-lime-500 text-stone-50 w-1/2 flex justify-evenly items-center drop-shadow-md">
        <img className="invert opacity-90" src="src/assets/cart.svg" alt="Carrito" />
      </button>
    </>
  );
}

export default CartWidget;
