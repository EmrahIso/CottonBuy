import { useEffect, useState } from 'react';
import { type Product } from '../../../types/Product';

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);

  const extractProductsForSell = (defaultProducts: Product[]) => {
    // We sell only clothing.
    const newProducts: Product[] = [];

    defaultProducts.forEach((product: Product) => {
      if (
        product.category !== 'jewelery' &&
        product.category !== 'electronics'
      ) {
        newProducts.push(product);
      }
    });

    return newProducts;
  };

  useEffect(() => {
    const controller: AbortController = new AbortController();

    const fetchData = async () => {
      try {
        const response: Response = await fetch(
          'https://fakestoreapi.com/products',
          {
            signal: controller.signal,
            mode: 'cors',
          }
        );

        if (!response.ok) {
          throw Error(`HTTPS error status: ${response.status}`);
        }

        const data: Product[] = await response.json();

        setProducts(extractProductsForSell(data));
        setError(null);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Unknown Error');
        }

        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return { products, loading, error };
};

export default useProducts;
