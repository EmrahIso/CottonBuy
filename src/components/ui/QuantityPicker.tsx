import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

const QuantityPicker = () => {
  const [productQuantity, setProductQuantity] = useState<number>(0);

  const decrementProductQuantity = () => {
    if (productQuantity > 0) {
      setProductQuantity((prevState: number) => prevState - 1);
    }
  };

  const incrementProductQuantity = () => {
    if (productQuantity < 20) {
      setProductQuantity((prevState: number) => prevState + 1);
    }
  };

  return (
    <div className='bg-neutral-100 flex px-9 rounded-xl justify-between'>
      <button
        type='button'
        className='cursor-pointer text-fuchsia-600'
        onClick={() => decrementProductQuantity()}
      >
        <Minus size={20} strokeWidth={3} />
      </button>
      <span className='w-[40px] flex items-center text-center justify-center text-xl font-semibold text-indigo-950'>
        {productQuantity}
      </span>
      <button
        type='button'
        className='cursor-pointer text-fuchsia-600'
        onClick={() => incrementProductQuantity()}
      >
        <Plus size={20} strokeWidth={3} />
      </button>
    </div>
  );
};

export default QuantityPicker;
