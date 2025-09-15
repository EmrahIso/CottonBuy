import type { Product } from '../../../types/Product';

import QuantityPicker from '../../../components/ui/QuantityPicker';
import { useCartContext } from '../../cart/hooks/useCartContext';

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
    <article className='flex items-center gap-8 justify-between'>
      <div className='bg-white inline-block rounded-2xl'>
        <img
          src={productData.image}
          alt={productData.title + 'image'}
          className='h-[160px] w-[160px] rounded-2xl p-8'
        />
      </div>
      <div className='flex flex-col gap-5'>
        <h3 className='text-neutral-600 tracking-wider font-medium text-center'>
          {productData.title}
        </h3>
        <div className='flex gap-10 justify-center'>
          <div className='flex gap-3 items-center'>
            <span className='text-neutral-500 leading-7 text-sm'>
              Product Price:
            </span>
            <span className='inline-block text-indigo-950 font-black text-lg'>
              {'$' + productData.price.toFixed(2)}
            </span>
          </div>
          <div className='flex gap-3 items-center'>
            <span className='text-neutral-500 leading-7 font-bold text-sm'>
              Total Price:
            </span>
            <span className='inline-block text-indigo-950 font-black text-xl'>
              {'$' + (productData.price * productQuantity).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <div className='flex items-center'>
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
