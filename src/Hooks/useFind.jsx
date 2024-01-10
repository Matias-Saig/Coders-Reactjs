import { useEffect, useState } from "react";

function useFind({id, data}) {
  const [itemFind, setItemFind] = useState(null);
    
  useEffect(() => {
      const foundItem = id
      ? data.find((prod) => prod.id == id)
      : console.log("error de carga en filtrado")
    
    setItemFind(foundItem)
  }, [id, itemFind, data])
  
  return { itemFind }
}

export default useFind;