import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar en función del id y el option, con control de duplicados
  const addToCart = (
    currentItem,
    currentItemId,
    currentItemQuantity,
    currentItemOption
  ) => {
    setCart(() => {
      const isItemsFound = cart.find(
        (cartItem) =>
          cartItem.id === currentItemId && cartItem.option === currentItemOption
      );
      if (isItemsFound) {
        return cart.map((cartItem) => {
          if (cartItem.id === currentItemId && cartItem.option === currentItemOption) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + currentItemQuantity,
              option: currentItemOption,
            };
          } else {
            return cartItem;
          }
        });
      } else {
        return [...cart, currentItem];
      }
    });
  };

  const removeItem = (currentItem) => {
    const itemFound = cart.find(
      (cartItem) =>
        (cartItem.id && cartItem.option) === (currentItem.id && currentItem.option)
    );
    if (itemFound) {
      setCart(cart.filter((item) => item !== currentItem));
    }
  };

  // Busqueda y filtrado del item actual en cart
  const isInCart = (id) => cart.filter((item) => item.id === id)


  // Calcular cantidad total
  const totalQuantity = (elem) => elem.reduce((acc, item) => acc + item.quantity, 0)
  const totalQuantityInCart = totalQuantity(cart);
  const totalCartPrice = cart.reduce((acc, item) => acc + item.totalPrice, 0)

  // Control de stock: reducción de option y quantity por Id
  const reduxIdQuantity = cart.reduce((acc, item) => {
    acc[item.id] = (acc[item.id] || 0) + item.quantity;
    return acc;
  }, {});

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isInCart,
        addToCart,
        clearCart,
        reduxIdQuantity,
        removeItem,
        totalCartPrice,
        totalQuantity,
        totalQuantityInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
