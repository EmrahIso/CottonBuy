import Logo from './Logo';
import CartButton from './CartButton';

const Navigation = () => {
  return (
    <header className='h-[80px] flex items-center'>
      <div className='container xl:max-w-[1280px] mx-auto px-4 py-10 flex items-center justify-between'>
        <Logo />
        <nav className='flex gap-6 p-2 rounded-4xl'>
          <a
            href='#'
            className='text-neutral-600 hover:bg-gray-200 active:bg-neutral-200 active:text-neutral-900 transition-colors font-medium text-base rounded-full flex items-center px-5 py-2 '
          >
            Home
          </a>
          <a
            href='#'
            className='text-neutral-600 hover:bg-gray-200 active:bg-neutral-200 active:text-neutral-900 transition-colors font-medium text-base rounded-full flex items-center px-5 py-2 '
          >
            Shop
          </a>
        </nav>
        <aside>
          <CartButton />
        </aside>
      </div>
    </header>
  );
};

export default Navigation;
