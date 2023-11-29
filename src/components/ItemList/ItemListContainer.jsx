import React from "react";
import Greeting from "./Greeting";
import ItemList from "./ItemList";

function ItemListContainer() {
  return (
    <div className="container bg-green-50 ">
      <Greeting
        greeting="Hola!!!"
        content= "estos son nuestro productos destacados"
        url="src/components/ItemList/greeting_Image.png"
        alt="Greeting"
      />

      <h3 className="text-4xl italic font-bold text-emerald-950">
        Nuestros productos destacados
      </h3>
      <ul>
        <ItemList />
      </ul>
    </div>
  );
}

export default ItemListContainer;
