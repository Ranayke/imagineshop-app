import { createContext } from "react";

import { IProduct } from "@/types";

interface ShoppingCart {
  addProduct: (product: IProduct) => void;
  getProducts: () => IProduct[];
}

export const ShoppingCartContext = createContext({} as ShoppingCart);

export const ShoppingCartProvider = ({ children }: any) => {
  const isBrowser = typeof window !== "undefined";
  const SESSION_STORAGE = "products";

  const addProduct = (product: IProduct) => {
    const products = getProducts();
    products.push(product);
    if (isBrowser) {
      sessionStorage.setItem(SESSION_STORAGE, JSON.stringify(products));
    }
  };

  const getProducts = (): IProduct[] => {
    if (isBrowser) {
      const products = sessionStorage.getItem(SESSION_STORAGE);
      return products ? JSON.parse(products) : [];
    }
    return [];
  };

  return (
    <ShoppingCartContext.Provider value={{ addProduct, getProducts }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
