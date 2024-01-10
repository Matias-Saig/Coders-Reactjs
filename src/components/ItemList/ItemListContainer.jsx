import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx";
import Loading from "../Loading/Loading.jsx";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Firebase/config.js";

function ItemListContainer() {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productsListRef = collection(db, "productsList");

    const docsRef = categoryId
      ? query(productsListRef, where("category", "==", categoryId))
      : productsListRef;

    getDocs(docsRef)
      .then((querySnapshot) => {
          const docs = querySnapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });

        setProductsList(docs);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <>
      <h2 className="text-4xl uppercase w-full text-center text-stone-400 mb-3 tracking-wide">
        {categoryId}
      </h2>
      {loading ? (
        <Loading />
      ) : (
        <ul className="flex flex-wrap w-full gap-10 place-content-center">
          <ItemList items={productsList} />
        </ul>
      )}
    </>
  );
}

export default ItemListContainer;
