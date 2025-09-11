import { Link } from 'react-router';

const ShopNowLink = () => {
  return (
    <Link
      to='shop'
      className='text-neutral-100 relative text-xl inline-block cursor-pointer font-medium rounded-full bg-gradient-to-bl from-fuchsia-500 to-purple-500 px-7 py-3.5 shadow-lg mt-14 hover:-translate-1 custom-shadow transition-all'
    >
      Shop Now
    </Link>
  );
};

export default ShopNowLink;
