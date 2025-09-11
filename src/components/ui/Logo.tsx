import { Link } from 'react-router';
import { Shirt } from 'lucide-react';

const Logo = () => {
  return (
    <Link
      to='/'
      className='flex items-center gap-3 hover:bg-neutral-200 transition-colors p-2 rounded-full'
    >
      <div className='p-2 bg-gradient-to-bl from-fuchsia-500 to-purple-500 rounded-full rotate-30 text-neutral-100'>
        <Shirt size={24} strokeWidth={2.5} />
      </div>
      <span className='text-neutral-700 text-lg font-medium pr-1.5'>
        CottonBuy
      </span>
    </Link>
  );
};

export default Logo;
