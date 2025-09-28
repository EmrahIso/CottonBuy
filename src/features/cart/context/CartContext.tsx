import { createContext, useState } from 'react';

import {
  type CartContextType,
  type CartProduct,
} from '../../../types/CartContextType';

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  const addProductToCart = (
    productId: number,
    productQuantity: number
  ): void => {
    const newCart: CartProduct[] = structuredClone(cart);

    const targetProduct: CartProduct | undefined = newCart.find(
      (cartProduct: CartProduct) => cartProduct.productId === productId
    );

    if (targetProduct === undefined) {
      const newProduct: CartProduct = {
        productId: productId,
        productQuantity: productQuantity,
      };
      newCart.push(newProduct);
    } else {
      targetProduct.productQuantity = productQuantity;
    }

    setCart(newCart);
  };

  const removeProductFromCart = (productId: number): void => {
    const cartCopy: CartProduct[] = structuredClone(cart);

    const newCart: CartProduct[] = cartCopy.filter(
      (cartProduct: CartProduct) => cartProduct.productId !== productId
    );

    setCart(newCart);
  };

  const clearCart = (): void => {
    const newCart: CartProduct[] = [];

    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts: cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        clearCart: clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
