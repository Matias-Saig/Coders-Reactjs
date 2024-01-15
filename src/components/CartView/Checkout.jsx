import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Checkout() {
  const { cart, removeItem } = useContext(CartContext);
  return (
    <ul className="flex flex-wrap w-[70%] gap-x-8 gap-y-8 ">
      {cart.map((item) => (
        <li
          key={Math.random()}
          className="w-[30%] h-[180px] flex gap-2 justify-start shadow-lg bg-[rgba(255,255,255,.8)] rounded-md p-3"
        >
          <img
            className="w-1/3 h-full object-cover opacity-70 self-center"
            src={item.img}
            alt={item.title}
          />
          <div className="w-2/3 text-sm flex flex-wrap">
            <h4 className="text-teal-900 font-bold leading-5 uppercase">{item.title}</h4>
            <p className="text-emerald-800">&ldquo;{item.option}&rdquo;</p>
            <p className="text-stone-600">
              {item.quantity} un. x ${item.price}
            </p>
            <p className="text-stone-600">Total: ${item.totalPrice}</p>

            <button
              className="bg-stone-300 hover:bg-amber-700 text-zinc-50 w-3/4 px-1 h-8 rounded-lg mt-3 flex justify-center items-center justify-self-end gap-1"
              onClick={() => removeItem(item)}
            >
              <img
                className="w-[24px] opacity-80"
                src="/public/img/Widgets/trash2-white.png"
                alt="trash"
              />
              Eliminar
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Checkout;
