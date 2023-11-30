import React from "react";
import Greeting from "./Greeting";
import ItemList from "./ItemList";

function ItemListContainer() {
  return (
    <div className="container bg-green-50 ">
      <Greeting
        greeting="Hola!!!"
        content="estos son nuestro productos destacados"
        url="src/components/ItemList/greeting_Image.png"
        alt="Greeting"
      />

      <ul>
        <ItemList url="" alt="" title="" content="" price="" />
        <ItemList url="" alt="" title="" content="" price="" />
        <ItemList url="" alt="" title="" content="" price="" />
        <ItemList url="" alt="" title="" content="" price="" />
      </ul>
    </div>
  );
}

export default ItemListContainer;
