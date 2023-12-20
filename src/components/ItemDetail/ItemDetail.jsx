function ItemDetail({ item }) {
  return (
    <div className="w-3/4 py-3 flex flex-col items-center gap-5">
      <h3 className="text-5xl text-center font-bold font-serif text-teal-800 my-4 py-1 w-full border-solid border-b-2 border-slate-200">
        {item.title}
      </h3>
      <div className="flex gap-5 justify-center w-4/5 items-center">
      <img
        className="object-contain h-64 border-solid border-4 border-slate-300"
        src={item.img}
        alt={item.title}
      />

      <p className="text-lg">{item.description}</p>
      </div>

      <p className="text-3xl mt-5 pt-7 font-bold text-emerald-700 border-solid border-t-2 border-slate-200 w-full text-center">
        Precio: ${item.price}
      </p>
      <p className="text-xl mt-3 font-bold text-stone-500">
        Disponibles: {item.stock} unidades
      </p>

      <button
        className="w-1/2 mb-3 rounded-full py-3 bg-emerald-600 hover:bg-emerald-900 text-stone-50
            uppercase font-extrabold text-2xl"
      >
        comprar
      </button>
    </div>
  );
}

export default ItemDetail;
