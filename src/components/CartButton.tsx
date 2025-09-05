import { ShoppingCart } from 'lucide-react';

const CartButton = () => {
  return (
    <button
      type='button'
      className='flex items-center gap-3 cursor-pointer relative hover:bg-neutral-200 transition-colors p-2 rounded-full'
    >
      <span className='text-neutral-700 text-lg font-medium pl-1.5'>Cart</span>
      <div className='p-2.5 flex gap-3 bg-gray-200 rounded-full items-center text-neutral-600 '>
        <ShoppingCart size={20} strokeWidth={2.5} />
      </div>
      <span className='bg-gradient-to-b px-1.25 rounded-full from-fuchsia-500 to-purple-500 absolute text-neutral-100 text-sm font-bold bottom-0 right-0 translate-x-0.5 translate-y-0.5'>
        0
      </span>
    </button>
  );
};

export default CartButton;
