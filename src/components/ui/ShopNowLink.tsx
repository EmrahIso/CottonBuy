import { Link } from 'react-router';

const ShopNowLink: React.FC = () => {
  return (
    <Link
      to='shop'
      className='text-neutral-100 relative sm:text-xl text-lg inline-block cursor-pointer font-medium rounded-full bg-gradient-to-bl from-fuchsia-500 to-purple-500 sm:px-7 px-6 sm:py-3.5 py-3 shadow-lg mt-14 hover:-translate-1 custom-shadow transition-all'
    >
      Shop Now
    </Link>
  );
};

export default ShopNowLink;
