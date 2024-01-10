import useQuantity from "../../Hooks/useQuantity";


function ItemQuantifySelector({ stock, price }) {
  /* const [quantify, setQuantify] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
    
  const handleAdd = () => {
    quantify < stock && setQuantify(quantify + 1);
  };

  const handleSubtract = () => {
    quantify >= 1 && setQuantify(quantify - 1);
  };

  useEffect( () => {
    setTotalPrice(quantify * price)
  }, [quantify, price]) */

  const { total, quantity, handleAdd, handleSubtract } = useQuantity({ stock, price });
  
 /*  const styleDisabledAdd =
    quantify == stock ? "text-stone-400" : "text-sky-700 hover:text-sky-400"

  const styleDisabledSubtract =
    quantify == 0 ? "text-stone-400" : "text-sky-700 hover:text-sky-400" */

  return (
    <>
      <div className="flex justify-center items-center gap-4 w-full text-3xl text-center">
        <button
          className={`font-extrabold `}
          onClick={handleSubtract}
        >
          ↓
        </button>

        <span className="w-1/12 text-stone-700 rounded-lg border-y-2 border-solid border-slate-300 py-2">
          {quantity}
        </span>

        <button
          className={`font-extrabold `}
          onClick={handleAdd}
        >
          ↑
        </button>
      </div>
      <p className="text-stone-600 text-2xl">Total: ${total}</p>

      <button className="w-1/4 text-stone-50 py-2 mt-1 rounded-full bg-gradient-to-l from-emerald-400 to-emerald-600 hover:from-emerald-600 hover:to-emerald-900 font-extrabold hover:drop-shadow-[0_1px_3px_rgba(25,25,25,0.5)] text-2xl">
        Comprar
      </button>
    </>
  );
}

export default ItemQuantifySelector;
