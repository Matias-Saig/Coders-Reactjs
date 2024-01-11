import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import ItemDetail from "./ItemDetail";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/config";

function ItemDetailContainer() {
  const [loading, setLoading] = useState(true)
  const [ctrl, setCtrl] = useState()
  const [item, setItem] = useState(null)


  const { itemId } = useParams();


  useEffect(() => {
    setLoading(true);
    
    // Control de id de documentos en firebase
    const ctrlRef = collection(db, "productsList");
  
    getDocs(ctrlRef)
      .then((querySnapshot) => {
        const docsId = querySnapshot.docs.map((doc) => ({ id: doc.id }));
        const docsFind = docsId.find( (e) => e.id === itemId)
        console.log(docsFind)
        !docsFind ? setCtrl(docsFind) : console.log(docsFind, "true");       
      })

      const docRef = doc(db, "productsList", itemId);

    // Llamado de documento del producto
    getDoc(docRef)
      .then((docSnapshot) => {
        const doc = {
          ...docSnapshot.data(),
          id: docSnapshot.id,
        };
        setItem(doc);
      })
     .finally(() => setLoading(false));

  }, [itemId]);
  
console.log("control", ctrl);

  

  return( <>
  {loading ? <Loading /> : <ItemDetail item={item} />}
    </>)
}

export default ItemDetailContainer;
