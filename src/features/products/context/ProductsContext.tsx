import { createContext } from 'react';
import useProducts from '../hooks/useProducts';
import { type ProductsContextType } from '../../../types/ProductsContextType';

export const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

export const ProductsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { products, loading, error } = useProducts();

  return (
    <ProductsContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductsContext.Provider>
  );
};
