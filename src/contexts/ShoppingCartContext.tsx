import { createContext } from "react";

import { IProduct } from "@/types";

interface ShoppingCart {
  addProduct: (product: IProduct) => void;
}

export const ShoppingCartContext = createContext({} as ShoppingCart);

export const ShoppingCartProvider = ({ children }: any) => {

    const isBrowser = typeof window !== 'undefined';
    const SESSION_STORAGE = 'products'

  const addProduct = (product: IProduct) => {
    const products = getProduct()
    products.push(product)
    if(isBrowser) {
        sessionStorage.setItem(SESSION_STORAGE, JSON.stringify(products))
    }
  };

  const getProduct = (): IProduct[] => {
    return [];
  };

  return (
    <ShoppingCartContext.Provider value={{ addProduct }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
