import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/config";

function useFirebaseOrdersId() {
   const [orderId, setOrderId] = useState();
   const [orderLoading, setOrderLoading] = useState(false)

  useEffect(() => {
    setOrderLoading(true)
    const ordersRef = collection(db, "orders");

    getDocs(ordersRef)
      .then((querySnapshot) => {
        const docs = querySnapshot.docs.map((doc) => {
          return {
            ...doc.data().orderId,
          };
        });

        setOrderId(docs);
      })
      .finally( () => setOrderLoading(false))
      
  }, []);

  return {orderId, orderLoading};
}

export default useFirebaseOrdersId;
