function ItemList({ items }) {
  return (
    <>
      {items.map((elem) => (
        <li
          className=" bg-white drop-shadow-md
        flex flex-col items-center justify-beetween
        w-full"
          key={elem.id}
        >
          <img
            className="object-cover h-56 w-full"
            src={elem.img}
            alt={elem.title}
          />
          <div className="flex flex-col justify-around gap-1 w-11/12 mt-2">
            <h4 className="font-bold text-xl text-neutral-800">{elem.title}</h4>
            <p className="text-neutral-700">{elem.description}</p>
            <p className="text-stone-700 text-right font-bold mt-4">
              ${elem.price}
            </p>
          </div>
          <button
            className="mt-5 w-full bg-sky-500 text-stone-50 uppercase"
            onClick={""}
          >
            Comprar
          </button>
        </li>
      ))}
    </>
  );
}

export default ItemList;
