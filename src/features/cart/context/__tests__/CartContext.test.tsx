import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { CartContextProvider } from '../CartContext';
import { useCartContext } from '../../hooks/useCartContext';

describe('CartContext', () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => {
    return <CartContextProvider>{children}</CartContextProvider>;
  };

  it('starts with an empty cart', () => {
    const { result } = renderHook(() => useCartContext(), { wrapper });
    expect(result.current.cartProducts).toEqual([]);
  });

  it('adds a new product to the cart', () => {
    const { result } = renderHook(() => useCartContext(), { wrapper });

    act(() => {
      result.current.addProductToCart(1, 1);
    });

    expect(result.current.cartProducts).toEqual([
      { productId: 1, productQuantity: 1 },
    ]);
  });

  it('removes a product from the cart', () => {
    const { result } = renderHook(() => useCartContext(), { wrapper });

    act(() => {
      result.current.addProductToCart(2, 2);
      result.current.removeProductFromCart(2);
    });

    expect(result.current.cartProducts).toEqual([]);
  });

  it('updates quantity if product already exists', () => {
    const { result } = renderHook(() => useCartContext(), { wrapper });

    act(() => {
      result.current.addProductToCart(1, 1);
      result.current.addProductToCart(1, 5);
    });

    expect(result.current.cartProducts).toEqual([
      { productId: 1, productQuantity: 5 },
    ]);
  });

  it('clears the cart', () => {
    const { result } = renderHook(() => useCartContext(), { wrapper });

    act(() => {
      result.current.addProductToCart(1, 1);
      result.current.addProductToCart(2, 2);
      result.current.addProductToCart(4, 2);
      result.current.addProductToCart(3, 3);

      result.current.clearCart();
    });

    expect(result.current.cartProducts).toEqual([]);
  });
});
