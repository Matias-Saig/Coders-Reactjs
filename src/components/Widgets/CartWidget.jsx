function CartWidget() {
  return (
    <>
      <button
        className=" text-stone-300  hover:text-zinc-100 text-2xl 
      bg-teal-700 hover:bg-sky-700
        transition-all
          w-1/12 rounded-2xl 
        flex justify-center items-center gap-x-3 ml-[45%]"
      >
        <img
          className="h-6"
          src="../../../public/img/Widgets/CartWidget.svg"
          alt="Shopping Bag"
        ></img>
        <p> 0 </p>

      </button>
    </>
  );
}

export default CartWidget;
