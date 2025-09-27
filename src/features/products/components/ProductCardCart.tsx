import { useCartContext } from '../../cart/hooks/useCartContext';

import QuantityPicker from '../../../components/ui/QuantityPicker';

import type { Product } from '../../../types/Product';

type ProductCardCartProps = {
  productData: Product;
  productQuantity: number;
};

const ProductCardCart = ({
  productData,
  productQuantity,
}: ProductCardCartProps) => {
  const { addProductToCart, removeProductFromCart } = useCartContext();

  return (
    <article className='lg:flex lg:items-center lg:gap-8 lg:justify-between grid sm:grid-cols-2 sm:gap-12 justify-items-center grid-cols-1 gap-12 border-b-1 pb-8 border-gray-100'>
      <div className='bg-white inline-block rounded-2xl'>
        <img
          src={productData.image}
          alt={`${productData.title}, ${productData.category}`}
          height={160}
          width={160}
          className='sm:h-[160px] h-[240px] sm:w-[160px] w-[240px] object-cover rounded-2xl p-8'
          loading='lazy'
        />
      </div>
      <div className='flex flex-col gap-5 sm:col-start-1 sm:row-start-2 sm:col-span-2 row-start-3'>
        <h2
          className='text-neutral-600 tracking-wider font-medium text-center line-clamp-2'
          data-testid={'product-cart-shop-heading-' + productData.id}
        >
          {productData.title}
        </h2>
        <div className='flex sm:gap-10 sm:flex-row flex-col gap-3 justify-center'>
          <div className='flex gap-3 items-center sm:justify-start justify-center'>
            <span className='text-neutral-500 leading-7 text-sm'>
              Product Price:
            </span>
            <span className='inline-block text-indigo-950 font-black text-lg'>
              {'$' + productData.price.toFixed(2)}
            </span>
          </div>
          <div className='flex gap-3 items-center sm:justify-start  justify-center'>
            <span className='text-neutral-500 leading-7 font-bold text-sm'>
              Total Price:
            </span>
            <span className='inline-block text-indigo-950 font-black text-xl'>
              {'$' + (productData.price * productQuantity).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <div className='flex xl:flex-row lg:flex-col items-center'>
        <QuantityPicker
          buttonType={'cart'}
          addProductToCart={addProductToCart}
          removeProductFromCart={removeProductFromCart}
          productId={productData.id}
          defaultProductQuantity={productQuantity}
        />
      </div>
    </article>
  );
};

export default ProductCardCart;
