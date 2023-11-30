import React from "react";

function ItemList({ listArray }) {
  return (
    <>
      {listArray.map((elem) => (
        <li className=" bg-white drop-shadow-md
        flex flex-col items-center justify-beetween
        w-full"
         key={elem.id}>
          <img
            className="object-cover h-56 w-full"
            src={elem.url}
            alt={elem.title}
          />
          <div className="flex flex-col justify-between gap-1 w-11/12 mt-2">
            <h4 className="font-bold text-xl text-neutral-800">{elem.title}</h4>
            <p className="text-neutral-700">{elem.content}</p>
            <p className="text-stone-700 text-right font-bold mt-4">${elem.price}</p>
          </div>
          <button className="w-full bg-sky-500 text-stone-50 uppercase" onClick={''}>Comprar</button>
        </li>
      ))}
    </>
  );
}

export default ItemList;
