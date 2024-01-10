import useQuantity from "../../Hooks/useQuantity";

function ItemQuantifySelector({ stock, price }) {
  const { total, quantity, handleAdd, handleSubtract } = useQuantity({
    stock,
    price,
  });

  const styleActive = "text-sky-700 hover:text-sky-400"
  const styleDisabled = "text-stone-400"
  const styleDisabledAdd = quantity == stock ? styleDisabled : styleActive
  const styleDisabledSubtract = quantity == 0 ? styleDisabled : styleActive
  

  return (
    <>
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
      <p className={`text-2xl ${quantity == 0 ? "text-stone-400" : "text-sky-700"}`}>Total: ${total}</p>

      <button className="w-1/4 text-stone-50 py-2 mt-1 rounded-full bg-gradient-to-l from-emerald-400 to-emerald-600 hover:from-emerald-600 hover:to-emerald-900 font-extrabold hover:drop-shadow-[0_1px_3px_rgba(25,25,25,0.5)] text-2xl">
        Comprar
      </button>
    </>
  );
}

export default ItemQuantifySelector;
