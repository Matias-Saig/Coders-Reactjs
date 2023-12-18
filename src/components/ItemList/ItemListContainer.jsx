import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx";
import loader  from "../../utils/loader.jsx"; 
import Loading from "../Loader/Loading.jsx";

 
function ItemListContainer() {
   
  const [productsList, setProductsList] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()
   

  useEffect(() => {
    setLoading(true)
    loader() // <= Promise
        .then((data) => {
            const list = categoryId 
                            ? data.filter(prod => prod.category === categoryId)
                            : data

            setProductsList(list)
        })
        .finally(() => setLoading( false ))
}, [categoryId])
 


  return (
    <ul className="flex gap-10 w-11/12">


{


loading ? ( 
  
  <Loading />
   
          ) : (
            <ItemList items={productsList} />
          )
          
        }
  
    </ul>
  );
}

export default ItemListContainer;
