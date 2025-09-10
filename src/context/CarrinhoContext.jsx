import { createContext } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children, value }) => {
  return (
    <CarrinhoContext.Provider value={value}>
      {children}
    </CarrinhoContext.Provider>
  );
}