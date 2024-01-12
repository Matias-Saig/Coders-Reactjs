import { useContext, useState } from "react";
import useQuantity from "../../Hooks/useQuantity";
import { CartContext } from "../../context/CartContext";

function ItemQuantitySelector({ item }) {
  const { addToCart, isInCart } = useContext(CartContext);

  const { totalPrice, quantity, handleAdd, handleSubtract } = useQuantity({
    stock: item.stock,
    price: item.price,
  });

  // cambios de estilo
  const styleActive = "text-sky-700 hover:text-sky-400";
  const styleDisabled = "text-stone-400";
  const styleDisabledAdd = quantity == item.stock ? styleDisabled : styleActive;
  const styleDisabledSubtract = quantity == 0 ? styleDisabled : styleActive;

  // cambios en listado de personalización
  const [option, setOption] = useState("Disponible del local");
  const handleChange = (event) => {
    setOption(event.target.value);
  };

  /* const p4 = () => item.id == cart.map((e) => {e.id === item.id ? console.log(e.quantity) : console.log("dont");})
  p4()
 */

  return (
    <>
      <p className="text-center text-xl text-stone-800">
        ¿Como te gustaria? <br />
        Puedes elegir una variante
      </p>
      <select
        value={option}
        onChange={handleChange}
        className="uppercase p-5 text-center bg-green-100 border-2 border-emerald-100 text-stone-800"
      >
        <option value="sin cambios" selected>
          Disponible del local
        </option>
        {item.options.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>

      <div className="flex justify-center items-center gap-4 w-full text-3xl text-center">
        <button
          className={`font-extrabold ${styleDisabledSubtract}`}
          onClick={handleSubtract}
        >
          ↓
        </button>

        <span className="w-1/12 text-stone-700 rounded-lg border-y-2 border-solid border-slate-300 py-2">
          {quantity}
        </span>

        <button
          className={`font-extrabold ${styleDisabledAdd}`}
          onClick={handleAdd}
        >
          ↑
        </button>
      </div>
      <p
        className={`text-2xl ${
          quantity == 0 ? "text-stone-400" : "text-sky-700"
        }`}
      >
        Total: ${totalPrice}
      </p>

      <button
        className={`
      w-1/4 text-stone-50 py-2 mt-1 rounded-full bg-gradient-to-l from-emerald-400 to-emerald-600 hover:from-emerald-600 hover:to-emerald-900 font-extrabold shadow-md text-2xl
      ${quantity === 0 && "grayscale"} transition-all
      `}
        onClick={() => {
          addToCart({
            id: item.id,
            title: item.title,
            img: item.img,
            price: item.price,
            option,
            quantity,
            totalPrice,
          });
        }}
      >
        Comprar
      </button>

      <p className="text-xl font-bold text-stone-500">
        Disponibles: {item.stock} unidades
      </p>

      {isInCart(item.id) ? (
        <p className="text-5xl text-sky-500">
          Tienes x de este producto en el carrito
        </p>
      ) : (
        <p className="text-5xl text-amber-400">No esta en el carrito</p>
      )}
    </>
  );
}

export default ItemQuantitySelector;
