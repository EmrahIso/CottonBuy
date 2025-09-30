import { Menu } from 'lucide-react';
import { X } from 'lucide-react';

type NavigationButtonProps = {
  isNavigationOpen: boolean;
  toggleNavigation: () => void;
};

const NavigationButton = ({
  isNavigationOpen,
  toggleNavigation,
}: NavigationButtonProps) => {
  return (
    <button
      type='button'
      data-testid='navigation-toggle-button'
      id='navigation-mobile-button'
      aria-label={
        isNavigationOpen ? 'Close main navigation' : 'Open main navigation'
      }
      className={
        (isNavigationOpen ? 'fixed z-99 right-[16px] top-[16px]' : '') +
        'text-neutral-700 cursor-pointer hover:bg-neutral-200 active:bg-neutral-200 transition-colors p-2.5 rounded-2xl'
      }
      onClick={toggleNavigation}
    >
      {isNavigationOpen ? (
        <X size={24} strokeWidth={2.5} />
      ) : (
        <Menu size={24} strokeWidth={2.5} />
      )}
    </button>
  );
};

export default NavigationButton;
