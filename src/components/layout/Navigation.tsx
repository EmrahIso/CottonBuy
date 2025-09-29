import { useEffect, useState } from 'react';

import { Link } from 'react-router';

import { useCartContext } from '../../features/cart/hooks/useCartContext';

import Logo from '../ui/Logo';
import CartLink from '../ui/CartLink';
import NavigationButton from '../ui/NavigationButton';

import type { CartProduct } from '../../types/CartContextType';

const Navigation = () => {
  const { cartProducts } = useCartContext();

  const [navigationMode, setNavigationMode] = useState<'mobile' | 'desktop'>(
    window.innerWidth >= 640 ? 'desktop' : 'mobile'
  );

  useEffect(() => {
    const handleResize = (): void => {
      setNavigationMode(window.innerWidth >= 640 ? 'desktop' : 'mobile');
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className='sm:h-[80px] h-[60px] flex items-center pt-4'
      data-testid='navigation'
    >
      {navigationMode === 'desktop' ? (
        <DesktopNav cartProducts={cartProducts} />
      ) : (
        <MobileNav cartProducts={cartProducts} />
      )}
    </header>
  );
};

type SubNavProps = {
  cartProducts: CartProduct[];
};

const DesktopNav = ({ cartProducts }: SubNavProps) => {
  return (
    <div
      className='container xl:max-w-[1280px] mx-auto px-4 py-10 flex items-center justify-between'
      data-testid='navigation-desktop'
    >
      <Logo />
      <nav className=' p-2 rounded-4xl'>
        <ul className='flex gap-6'>
          <li>
            <Link
              to='/'
              className='text-neutral-600 hover:bg-gray-200 active:bg-neutral-200 active:text-neutral-900 transition-colors font-medium text-base rounded-full flex items-center px-5 py-2 '
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='shop'
              className='text-neutral-600 hover:bg-gray-200 active:bg-neutral-200 active:text-neutral-900 transition-colors font-medium text-base rounded-full flex items-center px-5 py-2 '
            >
              Shop
            </Link>
          </li>
        </ul>
      </nav>
      <aside>
        <CartLink
          cartProductsCount={cartProducts.length}
          isMobileMode={false}
        />
      </aside>
    </div>
  );
};

const MobileNav = ({ cartProducts }: SubNavProps) => {
  const [isNavigationOpen, setIsNavigationOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isNavigationOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = '';
    }
  }, [isNavigationOpen]);

  const toggleNavigation = (): void => {
    setIsNavigationOpen((prevState: boolean) => !prevState);
  };

  return (
    <div
      className='container xl:max-w-[1280px] mx-auto px-4 py-10 '
      data-testid='navigation-mobile'
    >
      {isNavigationOpen ? (
        <nav>
          <div className='flex items-center justify-between'>
            <Logo />
            <NavigationButton
              isNavigationOpen={isNavigationOpen}
              toggleNavigation={toggleNavigation}
            />
          </div>
          <div className='fixed top-0 left-0  h-screen w-screen bg-white z-9'>
            <ul className='flex flex-col items-center gap-6 fixed top-1/2 left-1/2 translate-[-50%]'>
              <li>
                <Link
                  to='/'
                  className='text-neutral-600 hover:bg-gray-200 active:bg-neutral-200 active:text-neutral-900 transition-colors font-medium text-2xl rounded-full flex items-center px-5 py-2 '
                  onClick={toggleNavigation}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='shop'
                  className='text-neutral-600 hover:bg-gray-200 active:bg-neutral-200 active:text-neutral-900 transition-colors font-medium text-2xl rounded-full flex items-center px-5 py-2 '
                  onClick={toggleNavigation}
                >
                  Shop
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <div className='flex items-center justify-between'>
          <Logo />
          <NavigationButton
            isNavigationOpen={isNavigationOpen}
            toggleNavigation={toggleNavigation}
          />
          <CartLink
            cartProductsCount={cartProducts.length}
            isMobileMode={true}
          />
        </div>
      )}
    </div>
  );
};

export default Navigation;
