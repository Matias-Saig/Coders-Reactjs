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
          if (
            cartItem.id === currentItemId &&
            cartItem.option === currentItemOption
          ) {
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

  const removeItem = (currentItemId, currentItemOption) => {
    const itemFound = cart.find(
      (cartItem) =>
        (cartItem.id && cartItem.option) ===
        (currentItemId && currentItemOption)
    );
    if (itemFound) {
      
      setCart(
        cart.filter((item) => (item.id) !== (currentItemId && currentItemOption))
      );
    }
  };

  // Busqueda y filtrado del item actual en cart
  const isInCart = (id) => {
    return cart.filter((item) => item.id === id);
  };

  const clearCart = () => {
    setCart([]);
  };

  // Calcular cantidad total
  const totalQuantity = (elem) => {
    return elem.reduce((acc, item) => acc + item.quantity, 0);
  };

  const totalQuantityInCart = totalQuantity(cart);

  const totalCart = () => {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
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
        totalQuantity,
        totalQuantityInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
