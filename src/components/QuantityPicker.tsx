import { Minus, Plus } from 'lucide-react';

const QuantityPicker = () => {
  return (
    <div className='bg-neutral-100 flex px-9 rounded-xl justify-between'>
      <button type='button' className='cursor-pointer text-fuchsia-600'>
        <Minus size={20} strokeWidth={3} />
      </button>
      <input
        type='text'
        min='0'
        className='w-[40px] flex items-center text-center justify-center text-xl font-semibold text-indigo-950'
        value='0'
      />
      <button type='button' className='cursor-pointer text-fuchsia-600'>
        <Plus size={20} strokeWidth={3} />
      </button>
    </div>
  );
};

export default QuantityPicker;
