import { useOutletContext } from 'react-router';

import ProductCardShop from './ProductCardShop';
import ShopSortSelect from '../../../components/ui/ShopSortSelect';

import { type ShopOutletContext } from '../../../pages/ShopPage';
import type { Product } from '../../../types/Product';

const ProductCardShopGrid = () => {
  const { sortedProducts } = useOutletContext<ShopOutletContext>();

  return (
    <div>
      <ShopSortSelect />
      <div className='grid grid-cols-3 mt-16 mb-32 px-16 gap-y-32 gap-x-32'>
        {sortedProducts.map((product: Product) => (
          <ProductCardShop key={product.id} productData={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCardShopGrid;
