import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function CartView() {
const { cart, removeItem } = useContext(CartContext);



  return (
    <article className="flex flex-col w-full justify-center items-center">

      <Link to="/checkout" className="fixed bottom-6 right-6 uppercase
      w-[18%] rounded-full py-3 bg-sky-600 hover:bg-sky-900 text-stone-50
       font-bold text-base text-center shadow-lg shadow-slate-400 tracking-wider"
      >
        Finalizar compra</Link>

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
            <h4 className="text-teal-900 font-bold leading-5 uppercase w-full">{item.title}</h4>
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

    </article>
  
  )
}

export default CartView;
