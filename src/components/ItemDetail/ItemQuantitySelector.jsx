import { useContext, useState } from "react";
import useQuantity from "../../Hooks/useQuantity";
import { CartContext } from "../../context/CartContext";

function ItemQuantitySelector({ item }) {
  const { addToCart, isInCart, totalQuantity } = useContext(CartContext);

  // control de stock
  const currentProductInCart = isInCart(item.id);
  const quantityInCart = totalQuantity(currentProductInCart);

  // operadores
  const { totalPrice, quantity, setQuantity, handleAdd, handleSubtract } =
    useQuantity({
      stock: item.stock,
      price: item.price,
      quantityInCart: quantityInCart,
    });

  // cambios de estilo
  const styleActive = "text-sky-700 hover:text-sky-400";
  const styleDisabled = "text-stone-400";
  const styleDisabledAdd =
    quantity == item.stock - quantityInCart ? styleDisabled : styleActive;
  const styleDisabledSubtract = quantity == 0 ? styleDisabled : styleActive;

  // cambios en listado de personalización
  const [option, setOption] = useState("Disponible del local");
  const handleChange = (event) => {
    setOption(event.target.value);
  };

  // armado de producto
  const selectedProduct = {
    id: item.id,
    title: item.title,
    img: item.img,
    price: item.price,
    option,
    quantity,
    totalPrice,
  };

  return (
    <>
      <p className="text-center text-xl text-stone-800">
        ¿Como te gustaria? <br />
        Puedes elegir una variante
      </p>

      {/* SELECTOR DE OPCIONES */}

      <select
        value={option}
        onChange={handleChange}
        className="uppercase tracking-wide  font-extrabold p-5 text-center bg-green-100 border-2 border-emerald-100 text-stone-700"
      >
        <option value="Disponible del local">Disponible del local</option>
        {item.options.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>

      {/* BOTON SUMA / RESTA */}

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

      {/* BOTON DE COMPRA */}

      <button
        className={`
      w-1/4 text-stone-50 py-2 mt-1 rounded-full bg-gradient-to-l from-emerald-400 to-emerald-600 hover:from-emerald-600 hover:to-emerald-900 font-extrabold shadow-md text-2xl
      ${
        quantity === 0 &&
        "grayscale hover:from-emerald-400 hover:to-emerald-600"
      } transition-all
      `}
        onClick={() => {
          addToCart(
            selectedProduct,
            selectedProduct.id,
            selectedProduct.quantity,
            selectedProduct.option
          );
          setQuantity(0);
        }}
        disabled={quantity == 0}
      >
        Comprar
      </button>

      <p className="text-xl font-bold text-stone-500">
        Stock: {item.stock} unidades
      </p>

      {
        // CONDICIONAL EN FUNCIÓN DE CARRITO

        currentProductInCart.length !== 0 && (
          <div>
            <p className="text-2xl text-sky-700 text-center">
              De este producto tienes
              <span className="font-bold"> {quantityInCart} </span>
              en el carrito
            </p>
            <ul className="flex gap-5">
              {currentProductInCart.map((e) => (
                <li
                  key={ 10 + Math.random()}
                  className="text-stone-400 text-xl lowercase italic"
                >
                  {e.quantity} x &ldquo;{e.option}&rdquo;
                </li>
              ))}
            </ul>
          </div>
        )
      }
    </>
  );
}

export default ItemQuantitySelector;
