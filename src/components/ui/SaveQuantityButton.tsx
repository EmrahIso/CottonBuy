import { useState, useRef } from 'react';

import { ShoppingCart } from 'lucide-react';

import QuantityCartUpdateNotification from './QuantityCartUpdateNotification';

type SaveQuantityButtonProps = {
  addProductToCart: (productId: number, productQuantity: number) => void;
  removeProductFromCart: (productId: number) => void;
  productId: number;
  productQuantity: number;
  buttonType: 'cart' | 'shop';
};

const SaveQuantityButton = ({
  addProductToCart,
  removeProductFromCart,
  productId,
  productQuantity,
  buttonType,
}: SaveQuantityButtonProps) => {
  const [notificationSent, setNotificationSent] = useState<boolean>(false);
  const [notificationBarWidth, setNotificationBarWidth] = useState<number>(100);

  const timeoutRef = useRef<number | null>(null);

  const sendNotification = (): void => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setNotificationSent(false);
    setNotificationBarWidth(0);

    requestAnimationFrame(() => {
      setNotificationSent(true);
      setNotificationBarWidth(100);

      const interval = setInterval(() => {
        setNotificationBarWidth((prevState: number) => {
          if (prevState <= 0) {
            clearInterval(interval);
            return 0;
          }
          return prevState - 2;
        });
      }, 40);

      timeoutRef.current = setTimeout(() => {
        setNotificationSent(false);
        timeoutRef.current = null;
      }, 2000);
    });
  };

  const saveQuantityButtonClickHandler = (): void => {
    if (productQuantity === 0) {
      removeProductFromCart(productId);
    } else {
      addProductToCart(productId, productQuantity);
    }
    sendNotification();
  };

  return (
    <div>
      {buttonType === 'shop' ? (
        <button
          type='button'
          className='px-9 py-3.5 rounded-xl shadow-xs hover:shadow-lg transition-shadow text-lg font-medium flex items-center justify-center gap-4 cursor-pointer text-neutral-100 bg-gradient-to-bl from-fuchsia-500 to-purple-500'
          onClick={saveQuantityButtonClickHandler}
        >
          <ShoppingCart size={32} strokeWidth={2.5} />
          <span>Add to cart</span>
        </button>
      ) : (
        <button
          type='button'
          className='px-9 py-3.5 rounded-xl shadow-xs hover:shadow-lg transition-shadow text-lg font-medium flex items-center justify-center gap-4 cursor-pointer text-neutral-100 bg-gradient-to-bl from-fuchsia-500 to-purple-500'
          onClick={saveQuantityButtonClickHandler}
        >
          <span>Save Item</span>
        </button>
      )}
      <QuantityCartUpdateNotification
        notificationSent={notificationSent}
        notificationBarWidth={notificationBarWidth}
      />
    </div>
  );
};

export default SaveQuantityButton;
