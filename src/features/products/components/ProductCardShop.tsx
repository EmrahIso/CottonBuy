import { Link } from 'react-router';
import type { Product } from '../../../types/Product';

type ProductCardShopProps = {
  productData: Product;
};

const ProductCardShop = ({ productData }: ProductCardShopProps) => {
  return (
    <div className='flex flex-col items-center gap-8'>
      <Link
        to={`/shop/${productData.id}`}
        className='bg-white  inline-block border-1 border-transparent rounded-2xl hover:border-fuchsia-600'
      >
        <img
          src={productData.image}
          alt={`${productData.title}, ${productData.category}`}
          className='h-[320px] rounded-2xl p-8'
          height='320px'
          width='243px'
        />
      </Link>
      <h2 className='text-neutral-600 tracking-wider font-medium text-center'>
        {productData.title}
      </h2>
      <span className='inline-block text-indigo-950 font-black text-xl -mt-4'>
        {'$' + productData.price.toFixed(2)}
      </span>
    </div>
  );
};

export default ProductCardShop;
