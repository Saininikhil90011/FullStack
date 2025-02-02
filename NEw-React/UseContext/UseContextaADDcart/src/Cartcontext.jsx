import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  let [obj, setobj] = useState(
    JSON.parse(localStorage.getItem("cartitem")) || []
  );
  const add_add = (objj) => {
    // console.log("hello",objj);
    setobj([...obj, objj]); //
  };
  localStorage.setItem("cartitem", JSON.stringify(obj));

  return (
    <CartContext.Provider value={{ obj, add_add }}>
      {children}
    </CartContext.Provider>
  );
};
