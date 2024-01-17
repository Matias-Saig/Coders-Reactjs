 import useFirebaseOrders from "../../Hooks/useFirebaseOrders";
import OrderFoundSummary from "./OrderFoundSummary";

function OrderFound({ orderId }) {
  const { loading, ctrl, item } = useFirebaseOrders(orderId);

  return (
    <div className="flex flex-col w-1/2 p-5 mt-6 shadow-lg bg-[rgba(255,255,255,.9)] rounded-md">
      {ctrl ? (
        <p className="text-center text-2xl text-stone-600">Este Id no corresponde a ninguna orden</p>
      ) : loading ? (
        <p className="text-teal-700 m-3 text-center font-bold text-2xl uppercase italic animate-bounce">
          cargando datos
        </p>
      ) : (
        <OrderFoundSummary item={item} />
      )}
    </div>
  );
}

export default OrderFound;
/* 

{
  "checkout": {
      "products": [
          {
              "quantity": 1,
              "totalPrice": 2600,
              "price": "2600",
              "id": "6j07Ud3lQE6qAhDpINNS",
              "title": "Sansevieria Nana",
              "option": "Disponible del local"
          },
          {
              "price": "2800",
              "title": "Naranjo + Maceta",
              "option": "maceta barro",
              "id": "HipsAKaxBf5L4rXFxdFs",
              "quantity": 3,
              "totalPrice": 8400
          }
      ],
      "totalCart": 11000,
      "orderState": "generada",
      "date": "1/17/2024, 1:34:57 AM",
      "orderId": null
  },
  "cliente": {
      "telefono": "123",
      "nombre": "testN2",
      "apellido": "testAp2",
      "email": "test2@test.com"
  },
  "id": "0Sg5DaJoa6Hi2zukqCm6"
} */
