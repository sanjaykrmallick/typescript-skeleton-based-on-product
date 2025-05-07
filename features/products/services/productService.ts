import { Product } from "../types/product";

export const getProducts = async (): Promise<Product[]> => {
  return Promise.resolve([
    { id: "1", name: "Laptop", price: 1200 },
    { id: "2", name: "Phone", price: 800 },
  ]);
};
