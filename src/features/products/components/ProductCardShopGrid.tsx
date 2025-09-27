import { useOutletContext } from 'react-router';

import ProductCardShop from './ProductCardShop';
import ShopSortSelect from '../../../components/ui/ShopSortSelect';

import { type ShopOutletContext } from '../../../pages/ShopPage';
import { type Product } from '../../../types/Product';

const ProductCardShopGrid = () => {
  const { sortedProducts } = useOutletContext<ShopOutletContext>();

  return (
    <div>
      <ShopSortSelect />
      <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-16 mb-32 sm:px-16 px-4 gap-y-32 gap-x-32 xl:min-h-[2500px] md:min-h-[3100px] min-h-[5700px]'>
        {sortedProducts.map((product: Product) => (
          <ProductCardShop key={product.id} productData={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCardShopGrid;
