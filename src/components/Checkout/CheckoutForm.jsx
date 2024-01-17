import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Firebase/config";
import { useContext, useState } from "react";
import CheckoutFormInput from "./CheckoutFormInput";
import { CartContext } from "../../context/CartContext";
import Toast from "../Toast/Toast";

function CheckoutForm({ summary, totalCartPrice }) {
  const { clearCart } = useContext(CartContext);

  // toast
  const [isOpen, setIsOpen] = useState(false);

  const [orderId, setOrderId] = useState(null);
  const date = new Date();
  const orderDate = date.toLocaleString();
  const orderState = "generada";

  const checkout = {
    orderId,
    date: orderDate,
    products: summary,
    totalCart: totalCartPrice,
    orderState,
  };

  // input values
  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      cliente: values,
      checkout,
    };

    const ordersRef = collection(db, "orders");

    addDoc(ordersRef, order).then((doc) => {
      setOrderId(doc.id);
      setIsOpen(true);

      clearCart();
    });
  };

  return (
    <div className="flex flex-col w-5/12 p-5 shadow-lg bg-[rgba(255,255,255,.9)] rounded-md">
    
    
      <h4 className="text-sky-700 font-bold uppercase text-2xl text-center mb-8 mt-1">
        Finalizar compra
      </h4>

      <form
        className="flex flex-wrap gap-2 justify-center items-center"
        onSubmit={handleSubmit}
      >
        <CheckoutFormInput
          content="nombre"
          type="text"
          placeholder="Jonh"
          values={values.nombre}
          fx={handleInputChange}
        />

        <CheckoutFormInput
          content="apellido"
          type="text"
          placeholder="Due"
          values={values.apellido}
          fx={handleInputChange}
        />

        <CheckoutFormInput
          content="telefono"
          type="tel"
          placeholder="123456789"
          values={values.telefono}
          fx={handleInputChange}
        />

        <CheckoutFormInput
          content="email"
          type="email"
          placeholder="nombre@email.com"
          values={values.email}
          fx={handleInputChange}
        />

        <button
          type="submit"
          className="uppercase w-2/5 rounded-full py-2 mt-10 bg-sky-600 hover:bg-sky-900 text-stone-50 font-bold text-center shadow-md shadow-slate-400 tracking-wider"
        >
          Comprar
        </button>
      </form>

      {isOpen && (
        <Toast classAdd="text-lg text-stone-700">
          <p className="text-center text-sky-900 uppercase font-bold mb-5">
            Orden {checkout.orderState}
          </p>
          <p>
            <span className="font-bold mr-2">Id</span>
            {checkout.orderId}
          </p>
          <p>
            <span className="font-bold mr-2">Fecha</span>
            {checkout.date}
          </p>
        </Toast>
      )}
    </div>
  );
}

export default CheckoutForm;
