import { useOutletContext } from 'react-router';

import ProductCardShop from './ProductCardShop';
import type { Product } from '../../hooks/useProducts';

const ProductCardShopGrid = () => {
  const sortedProducts: Product[] = useOutletContext();

  return (
    <div className='grid grid-cols-3 mt-16 mb-32 px-16 gap-y-32 gap-x-32'>
      {sortedProducts.map((product: Product) => (
        <ProductCardShop key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default ProductCardShopGrid;
