function ItemDetail({ item }) {
  return (
    <div className="w-3/4 py-3 flex flex-col items-center gap-5">
      <h3 className="text-5xl text-center font-bold font-serif text-teal-800 bg-emerald-100 py-5 w-full">
        {item.title}
      </h3>
      <img
        className="w-full object-cover h-80"
        src={item.img}
        alt={item.title}
      />

      <p className="text-lg">{item.description}</p>
      <p className="text-3xl mt-7 font-bold text-emerald-700">
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
