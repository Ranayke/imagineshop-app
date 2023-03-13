import { createContext } from "react";

import { IProduct } from "@/types";

interface ShoppingCart {
  addProduct: (product: IProduct) => void;
  getProducts: () => IProduct[];
  deleteProduct: (id: string) => void;
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

  const deleteProduct = (id: string): void => {
    let products = getProducts();
    const newProducts = products.filter((product) => product._id !== id);
    if (isBrowser) {
      sessionStorage.setItem(SESSION_STORAGE, JSON.stringify(newProducts));
    }
  };

  return (
    <ShoppingCartContext.Provider
      value={{ addProduct, getProducts, deleteProduct }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
