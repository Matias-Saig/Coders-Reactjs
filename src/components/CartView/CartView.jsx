import Checkout from "./Checkout";
import Brief from "./Brief";

function CartView() {


  return (
    <article className="flex flex-col w-full justify-center items-center">

      <h2 className="text-5xl w-1/2 uppercase tracking-widest font-bold font-serif text-teal-700 py-1 my-3 text-center border-solid border-b-2 border-slate-200">
        Carrito
      </h2>

      <h3 className="text-3xl italic uppercase text-stone-400 mt-0 mb-10 tracking-wide">
        Lista de compras
      </h3>
      
      <div className="w-11/12 flex flex-nowrap gap-1 justify-between">
        <Checkout />
        <Brief />  
      </div>

    </article>
  );
}

export default CartView;
