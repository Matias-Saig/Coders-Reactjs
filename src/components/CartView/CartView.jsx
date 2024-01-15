import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartView() {
  const { cart, removeItem } = useContext(CartContext);

  console.log(cart);

  return (
    <article className="flex flex-col w-4/5 justify-center items-center">
      <h2 className="text-5xl w-1/2 uppercase tracking-widest font-bold font-serif text-teal-700 py-1 my-3 text-center border-solid border-b-2 border-slate-200">
        Carrito
      </h2>
      <h3 className="text-3xl italic uppercase text-stone-400 mt-0 mb-10 tracking-wide">
        Lista de compras
      </h3>
      <ul className="flex flex-wrap w-full gap-14 justify-center">
        {cart.map((item) => (
          <li
            key={Math.random()}
            className=" w-1/4 flex gap-2 justify-start shadow-lg bg-[rgba(255,255,255,.7)] rounded-md p-3"
          >
            <img
              className="w-1/3 h-full object-cover opacity-70 self-center"
              src={item.img}
              alt={item.title}
            />
            <div className="w-2/3 text-sm flex flex-wrap">
              <h4 className="text-teal-900 font-bold leading-5 uppercase">
                {item.title}
              </h4>
              <p className="text-emerald-800">&ldquo;{item.option}&rdquo;</p>
              <p className="text-stone-600">
                {item.quantity} un. x ${item.price}
              </p>
              <p className="text-stone-600">Total: ${item.totalPrice}</p>

              <button
                className="bg-stone-300 hover:bg-amber-700 text-zinc-50 w-3/4 px-1 h-8 rounded-lg mt-3 flex justify-center items-center justify-self-end gap-1"
                onClick={()=> removeItem(item.id, item.option)}
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
    </article>
  );
}

export default CartView;
