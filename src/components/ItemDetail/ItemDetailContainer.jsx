import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loader from "../Loader/loader";
import Loading from "../Loader/Loading";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer(  ) {
   
  
 const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);

  const { itemId } = useParams()

  useEffect(() => {

    loader()
      .then((data) => {
        setItem( data.find(prod => prod.id === itemId) )
      })
      .finally(() => setLoading(false));
  }, []);

console.log(item);

  return (
    <>
      {loading ? <Loading /> : (
        <ItemDetail item={item}/>
      )}

        </>
  );
}

export default ItemDetailContainer;
