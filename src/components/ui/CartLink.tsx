import { Link } from 'react-router';

import { ShoppingCart } from 'lucide-react';

type CartLinkProps = {
  cartProductsCount: number;
  isMobileMode: boolean;
};

const CartLink = ({ cartProductsCount, isMobileMode }: CartLinkProps) => {
  return (
    <div
      className={isMobileMode ? 'z-19 fixed bottom-[36px] right-[24px]' : ''}
    >
      <Link
        to='cart'
        className={
          (isMobileMode ? 'bg-gray-50 shadow-md ' : '') +
          'flex items-center sm:gap-3 gap-2.5 cursor-pointer relative hover:bg-neutral-200 transition-colors p-2 rounded-full'
        }
      >
        <span className='text-neutral-700 sm:text-lg text-base font-medium pl-1.5'>
          Cart
        </span>
        <div className='p-2.5 flex gap-3 bg-gray-200 rounded-full items-center text-neutral-600 '>
          <ShoppingCart size={20} strokeWidth={2.5} />
        </div>
        <span className='bg-gradient-to-b px-1.25 rounded-full from-fuchsia-500 to-purple-500 absolute text-neutral-100 text-sm font-bold bottom-0 right-0 translate-x-0.5 translate-y-0.5'>
          {cartProductsCount}
        </span>
      </Link>
    </div>
  );
};

export default CartLink;
