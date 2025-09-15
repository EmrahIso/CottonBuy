import { useCartContext } from '../hooks/useCartContext';

type CartCheckoutBtnProps = {
  checkoutPrice: number;
};

const CartCheckoutBtn = ({ checkoutPrice }: CartCheckoutBtnProps) => {
  const { clearCart } = useCartContext();

  const checkoutNotification = (): void => {
    alert(`Thank you for sending me $${checkoutPrice.toFixed(2)} :)`);
  };

  const makeCheckout = (): void => {
    checkoutNotification();
    clearCart();
  };

  return (
    <button
      type='button'
      className='text-neutral-100 relative text-3xl inline-block cursor-pointer font-medium rounded-full tracking-wide bg-gradient-to-bl from-fuchsia-500 to-purple-500 px-9 py-4.5 shadow-lg hover:-translate-1 custom-shadow transition-all'
      onClick={makeCheckout}
    >
      Checkout
    </button>
  );
};

export default CartCheckoutBtn;
