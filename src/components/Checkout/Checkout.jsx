import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutForm from "./CheckoutForm";
import CheckoutSummary from "./CheckoutSummary";
import CheckoutToast from "./CheckoutToast";

function Checkout() {
  const { cart, totalCartPrice } = useContext(CartContext);

  const summary = cart.map((e) => ({
    option: e.option,
    price: e.price,
    quantity: e.quantity,
    title: e.title,
  }));

  return (
    <article className="w-full flex justify-center gap-10">
      <CheckoutToast />
      <CheckoutSummary summary={summary} totalCartPrice={totalCartPrice} />
      <CheckoutForm summary={summary} totalCartPrice={totalCartPrice} />
    </article>
  );
}

export default Checkout;
