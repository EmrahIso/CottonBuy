import { Link } from 'react-router';

import { useProductsContext } from '../features/products/hooks/useProductsContext';
import { useCartContext } from '../features/cart/hooks/useCartContext';

import ProductCardCart from '../features/products/components/ProductCardCart';
import CartCheckoutBtn from '../features/cart/components/CartCheckoutBtn';

import type { Product } from '../types/Product';
import type { CartProduct } from '../types/CartContextType';

const CartPage: React.FC = () => {
  const { products, loading, error } = useProductsContext();
  const { cartProducts } = useCartContext();

  const checkoutPrice: number = cartProducts.reduce(
    (total: number, cartProduct: CartProduct) => {
      const productData: Product | undefined = products.find(
        (product: Product) => product.id === cartProduct.productId
      );

      if (!productData) return total + 0;

      return total + productData.price * cartProduct.productQuantity;
    },
    0
  );

  if (loading) {
    return (
      <section
        className='min-h-[656px] container xl:max-w-[1280px] mx-auto'
        data-testid='cart-page'
      >
        <p>Loading...</p>
      </section>
    );
  }

  if (error)
    return (
      <section
        className='min-h-[656px] container xl:max-w-[1280px] mx-auto'
        data-testid='cart-page'
      >
        <p>Error: {error}</p>
      </section>
    );

  if (cartProducts.length === 0) {
    return (
      <section
        className='container xl:max-w-[1280px] min-h-[656px] mx-auto py-60 flex flex-col items-center'
        data-testid='cart-page'
      >
        <h3 className='text-center font-bold text-4xl'>
          {' '}
          No items in Cart yet :/
        </h3>
        <Link
          to={'/shop'}
          className='text-neutral-100 relative text-xl cursor-pointer font-medium rounded-full bg-gradient-to-bl from-fuchsia-500 to-purple-500 px-7 py-3.5 shadow-sm hover:from-neutral-100  hover:to-neutral-100 hover:text-indigo-950 transition-colors mt-20'
          onClick={() => window.scrollTo(0, 0)}
        >
          Go to Shop Page!
        </Link>
      </section>
    );
  }

  return (
    <section className='container xl:max-w-[1280px] min-h-[656px] mx-auto py-20'>
      <h1 className='sr-only'>CottonBuy Cart Page</h1>
      <div className='flex flex-col gap-8'>
        {cartProducts.map((cartProduct: CartProduct) => {
          const productData: Product | undefined = products.find(
            (product: Product) => product.id === cartProduct.productId
          );
          if (!productData) return null;
          return (
            <ProductCardCart
              key={cartProduct.productId}
              productData={productData}
              productQuantity={cartProduct.productQuantity}
            />
          );
        })}
      </div>
      <div className='mt-36'>
        <div className='flex items-center justify-center gap-12'>
          <span className='sm:text-2xl text-xl font-medium text-neutral-600 leading-7'>
            Checkout Price:{' '}
          </span>
          <span className='font-bold text-indigo-950 sm:text-4xl text-2xl'>
            {'$' + checkoutPrice.toFixed(2)}
          </span>
        </div>
        <div className='flex justify-center sm:mt-16 mt-8'>
          <CartCheckoutBtn checkoutPrice={checkoutPrice} />
        </div>
      </div>
    </section>
  );
};

export default CartPage;
