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

const ShopPage: React.FC = () => {
  const { products, loading, error } = useProductsContext();
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);

  const [selectSortValue, setSelectSortValue] =
    useState<sortType>('popularity');

  useEffect(() => {
    // We need this because products is async.

    setSortedProducts(products);
  }, [products]);

  if (loading)
    return (
      <section
        className='container xl:min-h-[2500px] md:min-h-[3100px] min-h-[5700px] xl:max-w-[1280px] mx-auto py-10'
        data-testid='shop-page'
      >
        <p>Loading...</p>
      </section>
    );

  if (error)
    return (
      <section
        className='container xl:min-h-[2500px] md:min-h-[3100px] min-h-[5700px] xl:max-w-[1280px] mx-auto py-10'
        data-testid='shop-page'
      >
        <p>Error: {error}</p>
      </section>
    );

  const selectSortChangeHandler: React.ChangeEventHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const value = e.target.value as sortType;

    setSelectSortValue(value);
    sortProductsHandler(value);
  };

  const sortProductsHandler = (sortBy: sortType): void => {
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
    <section
      className='container xl:max-w-[1280px] mx-auto py-10 '
      data-testid='shop-page'
    >
      <h1 className='sr-only'>CottonBuy Shop Page</h1>
      <Outlet
        context={{ sortedProducts, selectSortChangeHandler, selectSortValue }}
      />
    </section>
  );
};

export default ShopPage;
