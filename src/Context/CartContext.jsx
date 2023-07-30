import { createContext, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    
  const AddtoCart = (details) => {
    console.log(details);
  };

  const contextValues = {
    context: "cartContext",
    AddtoCart,
    // ...and the rest
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export function UseCartContext() {
  return useContext(CartContext);
}
