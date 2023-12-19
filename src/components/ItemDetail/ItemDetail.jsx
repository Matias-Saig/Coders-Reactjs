import { useState } from "react";

function ItemDetail( {item}) {
    const [cantidad, setCantidad] = useState(0)
  
    const handleAgregar = () => {
      const itemToCart = {
        ...item,
        cantidad, // => cantidad: cantidad
        color // => color: color
      }
  
      console.log(itemToCart)
    }
   

console.log(item);

    return (
      <div className="w-11/12">
        <h3 className="text-4xl text-center italic font-bold font-serif text-stone-700">{item.title}</h3>
        <hr />
        <div className="flex gap-8 pt-4">
          <img className="w-1/2 object-cover h-1/2" src={item.img} alt={item.title} />
  
          <div>
            <p className="text-lg">{item.description}</p>
            <p className="text-2xl mt-7 font-bold text-emerald-700">Precio: ${item.price}</p>
  {/*  
            <QuantitySelector 
              cantidad={cantidad}
              stock={item.stock}
              setCantidad={ setCantidad }
            />           */}
  
             <button
            className="w-1/2 mb-3 rounded-full py-3 bg-emerald-600 hover:bg-emerald-900 text-stone-50
            uppercase font-extrabold text-lg "
          >
comprar
            
          </button>
          </div>
        </div>
  
      </div>
    );
}

export default ItemDetail;
