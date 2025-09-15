import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';

import { useProductsContext } from '../features/products/hooks/useProductsContext';

import { type Product } from '../types/Product';

export type sortType = 'price' | 'popularity';

export type ShopOutletContext = {
  sortedProducts: Product[];
  selectSortChangeHandler: React.ChangeEventHandler;
  selectSortValue: sortType;
};

const ShopPage = () => {
  const { products, loading, error } = useProductsContext();
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);

  const [selectSortValue, setSelectSortValue] =
    useState<sortType>('popularity');

  useEffect(() => {
    // We need this because products is async.

    setSortedProducts(products);
  }, [products]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const selectSortChangeHandler: React.ChangeEventHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = e.target.value as sortType;

    setSelectSortValue(value);
    sortProductsHandler(value);
  };

  const sortProductsHandler = (sortBy: sortType) => {
    const sorted = [...products].sort(
      (productA: Product, productB: Product) => {
        if (sortBy === 'price') return productA.price - productB.price;
        if (sortBy === 'popularity')
          return productA.rating.count - productB.rating.count;
        return 0;
      }
    );

    setSortedProducts(sorted);
  };

  return (
    <div className='container xl:max-w-[1280px] mx-auto py-10'>
      <Outlet
        context={{ sortedProducts, selectSortChangeHandler, selectSortValue }}
      />
    </div>
  );
};

export default ShopPage;
