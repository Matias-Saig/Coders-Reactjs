import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar
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
          if (cartItem.id === currentItemId) {
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

  // Busqueda y filtrado del item actual en cart
  const isInCart = (id) => {
    return cart.filter((item) => item.id === id);
  };

  const clearCart = () => {
    setCart([]);
  };

  // Calcular cantidad total
  const redux = (elem) => {
    return elem.reduce((acc, item) => acc + item.quantity, 0);
  };

  const totalCart = () => {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isInCart,
        addToCart,
        clearCart,
        totalCart,
        removeItem,
        redux,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
