import { useParams } from 'react-router';
import { Link } from 'react-router';

import { useProductsContext } from '../hooks/useProductsContext';
import { useCartContext } from '../../cart/hooks/useCartContext';

import QuantityPicker from '../../../components/ui/QuantityPicker';
import type { Product } from '../../../types/Product';
import type { CartProduct } from '../../../types/CartContextType';

const ProductCardDetail = () => {
  const { products, loading, error } = useProductsContext();
  const params = useParams();
  const targetProduct: Product | undefined = products.find(
    (product: Product) => product.id === Number(params.productId)
  );

  const { cartProducts, addProductToCart, removeProductFromCart } =
    useCartContext();

  const targetCartProduct: CartProduct | undefined = cartProducts.find(
    (cartProduct: CartProduct) =>
      cartProduct.productId === Number(params.productId)
  );

  const defaultProductQuantity = !targetCartProduct
    ? 0
    : targetCartProduct.productQuantity;

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  if (targetProduct === undefined) {
    return (
      <section className='container xl:max-w-[1280px] mx-auto py-32 px-4 grid grid-cols-2 gap-32'>
        <h2>The product you are looking for was not found!</h2>
      </section>
    );
  }

  return (
    <section className='container xl:max-w-[1280px] mx-auto pt-16 pb-32 px-4'>
      <Link
        to={'/shop'}
        className='text-neutral-100 relative text-xl cursor-pointer font-medium rounded-full bg-gradient-to-bl from-fuchsia-500 to-purple-500 px-7 py-3.5 shadow-sm hover:from-neutral-100  hover:to-neutral-100 hover:text-indigo-950 transition-colors mt-20'
      >
        Go to Shop Page!
      </Link>
      <div className='grid grid-cols-2 gap-32 pt-16'>
        <div className='p-16 bg-white rounded-4xl shadow-sm'>
          <img
            src={targetProduct.image}
            alt={targetProduct.title + 'image'}
            className='h-full rounded-2xl p-8'
          />
        </div>
        <div className='flex flex-col justify-center'>
          <div>
            <p className='font-semibold tracking-wider text-sm uppercase text-neutral-500'>
              {targetProduct.category}
            </p>
            <h3 className='text-indigo-950 text-4xl font-bold mt-4'>
              {targetProduct.title}
            </h3>
          </div>
          <p className='text-gray-500 font-regular text-sm mt-12 leading-5.75 tracking-wide'>
            {targetProduct.description}
          </p>
          <span className='inline-block text-indigo-950 font-black text-3xl mt-6 mb-16'>
            {'$' + targetProduct.price}
          </span>
          <QuantityPicker
            addProductToCart={addProductToCart}
            removeProductFromCart={removeProductFromCart}
            productId={Number(params.productId)}
            buttonType={'shop'}
            defaultProductQuantity={defaultProductQuantity}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductCardDetail;
