import { ShoppingCart } from 'lucide-react';

const AddToCartButton = () => {
  return (
    <button className='px-9 py-3.5 rounded-xl shadow-xs hover:shadow-lg transition-shadow text-lg font-medium flex items-center justify-center gap-4 cursor-pointer text-neutral-100 bg-gradient-to-bl from-fuchsia-500 to-purple-500'>
      <ShoppingCart size={32} strokeWidth={2.5} /> Add to cart
    </button>
  );
};

export default AddToCartButton;
