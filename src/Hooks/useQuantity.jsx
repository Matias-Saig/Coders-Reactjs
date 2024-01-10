import { useEffect, useState } from "react";

function useQuantity({ stock, price }) {
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const handleAdd = () => {
    quantity < stock && setQuantity(quantity + 1);
  };

  const handleSubtract = () => {
    quantity >= 1 && setQuantity(quantity - 1);
  };

  useEffect(() => {
    setTotal(quantity * price);
  }, [quantity, price]);

  return { total, quantity, handleAdd, handleSubtract };
}

export default useQuantity;
