import React from "react";
import ItemList from "./ItemList.jsx";
import featuredProducts from "../ProductList/featuredProducts.jsx";

function ItemListContainer() {
  return (
      <ul className="flex gap-10 w-11/12">
        <ItemList listArray={featuredProducts} />
      </ul>
  );
}

export default ItemListContainer;
