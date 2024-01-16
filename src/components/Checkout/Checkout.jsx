import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

function Checkout() {
  const { cart, totalCartPrice } = useContext(CartContext);

  const [orderId, setOrderId] = useState(1);
  const date = new Date();
  const orderDate = date.toLocaleString();
  const orderState = "Generada";

  const summary = cart.map((e) => ({
    option: e.option,
    price: e.price,
    quantity: e.quantity,
    title: e.title,
  }));

  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
  });


  const checkout = {
    orderId,
    orderDate,
    ...summary,
    totalCartPrice,
  }

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    
    const orden = {
      cliente: values,
      checkout
    };

    console.log(orden);
/*
     const ordersRef = collection(db, "orders");

    // cart.forEach(item => {
    //     const docRef = doc(db, 'productos', item.id)
    //     getDoc(docRef)
    //         .then(doc => {
    //             const stock = doc.data().stock
    //             if (stock >= item.cantidad) {
    //                 updateDoc(docRef, {
    //                     stock: doc.data().stock - item.cantidad
    //                 })
    //             }
    //         })
    // })

    addDoc(ordersRef, orden).then((doc) => {
        setOrderId(doc.id)
        clearCart()

        Swal.fire("Gracias por tu compra!")
    });
 */

  };

  return (
    <article className="w-full flex justify-center gap-10">
      {/* RESUMEN DE COMPRA */}
      <div className="flex flex-col w-5/12 p-5 shadow-lg bg-[rgba(255,255,255,.9)] rounded-md">
        <h4 className="text-teal-700 font-bold uppercase text-2xl text-center mb-5 mt-1">
          Resumen de compra
        </h4>
        <h5 className="uppercase text-lg text-stone-700 font-bold">Productos </h5>
        <ul>
          {summary.map((e) => (
            <li key={Math.random()} className="border-b-2 border-stone-100">
              <p className="text-base text-stone-600">
                {e.title}
                <span className="text-sm text-stone-400 ml-1">
                  ${e.price} c/u x {e.quantity} un.
                </span>
              </p>
              <p className="text-xs text-stone-500">{e.option}</p>
            </li>
          ))}
        </ul>

        <h5 className="uppercase text-2xl text-center font-bold mt-3 text-sky-900">
          Total
          <br /> ${totalCartPrice}
        </h5>

        <p className="mt-5 text-sm text-stone-500 text-right">
          Orden {orderState} nº {orderId} <br />
          {orderDate}
        </p>
      </div>

      {/* FORMULARIO */}

      <div className="flex flex-col w-5/12 p-5 shadow-lg bg-[rgba(255,255,255,.9)] rounded-md">
        <h4 className="text-sky-700 font-bold uppercase text-2xl text-center mb-8 mt-1">
          Finalizar compra
        </h4>

        <form className="flex flex-wrap gap-2 text-stone-700 font-bold text-xl justify-center"
         onSubmit={handleSubmit}>
          <label className="w-2/12" htmlFor="nombre">
            Nombre
          </label>
          <input
            className=" w-9/12 mb-3 text-lg text-stone-500  border-b-2 border-sky-100"
            type="text"
            placeholder="Jonh"
            name="nombre"
            value={values.nombre}
            onChange={handleInputChange}
            required
          />

          <label className="w-2/12" htmlFor="apellido">
            Apellido
          </label>
          <input
            className="w-9/12 mb-3 text-lg text-stone-500  border-b-2 border-sky-100"
            type="text"
            placeholder="Due"
            name="apellido"
            value={values.apellido}
            onChange={handleInputChange}
            required
          />

          <label className="w-2/12" htmlFor="telefono">
            Teléfono
          </label>
          <input
            className="w-9/12 mb-3 text-lg text-stone-500 border-b-2 border-sky-100"
            type="tel"
            placeholder="123456789"
            name="telefono"
            value={values.telefono}
            onChange={handleInputChange}
            required
          />

          <label className="w-2/12" htmlFor="email">
            Email
          </label>
          <input
            className="w-9/12 mb-3 text-lg text-stone-500 border-b-2 border-sky-100"
            type="email"
            placeholder="email@email.com"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            required
          />

          <button
            type="submit"
            className="uppercase
      w-1/3 rounded-full py-1 mt-10 bg-sky-600 hover:bg-sky-900 text-stone-50
       font-bold text-center shadow-md shadow-slate-300 tracking-wider"
          >
            Comprar
          </button>
        </form>
      </div>
    </article>
  );
}

export default Checkout;
