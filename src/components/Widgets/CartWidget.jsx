function CartWidget() {
  return (
    <>
      <button
        className="bg-emerald-800 hover:bg-teal-900 text-stone-300 text-ms hover:text-xl transition-all
        w-1/4      
        rounded-full mx-2 my-1 
        flex justify-center items-center gap-x-3"
      >
        <img
          className="w-1/3"
          src="../../../public/img/Widgets/CartWidget.svg"
          alt="Shopping Bag"
        ></img>

        <span> 0 </span>
      </button>
    </>
  );
}

export default CartWidget;
