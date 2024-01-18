import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import useIsCartEmpty from "../../Hooks/useIsCartEmpty";
import EmptyCart from "./EmptyCart";

function CartView() {
  const { cart, clearCart, removeItem } = useContext(CartContext);

  // Control de carrito vacio
  const { isCartEmpty } = useIsCartEmpty({ cart });

  return (
    <>
      {isCartEmpty && <EmptyCart />}

      <article className="flex flex-col w-full justify-center items-center pb-20">
        <ul className="flex flex-wrap w-2/3 gap-x-8 gap-y-8">
          <h2 className="text-4xl w-full uppercase tracking-widest font-bold font-serif text-teal-700 self-end">
            Lista de compras
          </h2>

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
                <h4 className="text-teal-900 font-bold leading-5 uppercase w-full">
                  {item.title}
                </h4>
                <p className="text-emerald-800 w-full">&ldquo;{item.option}&rdquo;</p>
                <p className="text-stone-600 w-full">
                  {item.quantity} un. x ${item.price}
                </p>
                <p className="text-stone-600">Total: ${item.totalPrice}</p>

                <button
                  className="bg-stone-300 hover:bg-amber-700 text-zinc-50 w-3/4 px-1 h-8 rounded-lg self-end"
                  onClick={() => removeItem(item)}
                >
                  <figure className=" flex justify-center items-center  gap-1">
                    <img
                      className="w-[24px] opacity-80"
                      src="/public/img/Widgets/trash2-white.png"
                      alt="trash"
                    />
                    <span>Eliminar</span>
                  </figure>
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className="z-20 flex  justify-evenly items-center bg-[rgba(230,255,230,0.7)] backdrop-blur-sm w-screen fixed bottom-0 py-2 border-t-2 border-white">
          <button
            className="border-2 border-red-400 bg-red-300 hover:bg-red-800 font-bold text-zinc-50 w-1/6 py-3 uppercase rounded-lg"
            onClick={() => clearCart()}
          >
            <figure className=" flex justify-center items-center  gap-1">
              <img
                className="w-[24px] opacity-80"
                src="/public/img/Widgets/trash2-white.png"
                alt="trash"
              />
              <span>Eliminar todo</span>
            </figure>
          </button>

          <Link
            to="/checkout"
            className="uppercase w-1/4 rounded-full py-3 bg-sky-700 hover:bg-sky-900 text-zinc-50 font-extrabold text-lg text-center 
        tracking-wider
        border-2 border-sky-800 hover:border-sky-600 hover:text-white"
          >
            Finalizar compra
          </Link>
        </div>
      </article>
    </>
  );
}

export default CartView;
