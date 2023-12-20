import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx";
import loader from "../Loader/loader.jsx";
import Loading from "../Loader/Loading.jsx";

function ItemListContainer() {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    loader()
      .then((data) => {
        const list = categoryId
          ? data.filter((prod) => prod.category === categoryId)
          : data;

        setProductsList(list);
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
