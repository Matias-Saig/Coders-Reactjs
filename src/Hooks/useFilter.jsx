import { useEffect, useState } from "react";

function useFilter({ id, data }) {
  const [itemsFilter, setItemsFilter] = useState([]);

  useEffect(() => {
    const list = id
      ? data.filter((prod) => prod.category === id)
      : console.log("error de carga en filtrado");
    setItemsFilter(list);
    
  }, [id, data]);
  return { itemsFilter };
}

export default useFilter;
