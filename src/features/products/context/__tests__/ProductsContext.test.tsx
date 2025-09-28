import { describe, it, expect, vi } from 'vitest';
import { renderHook } from '@testing-library/react';

import { useProductsContext } from '../../hooks/useProductsContext';
import { ProductsContextProvider } from '../ProductsContext';

vi.mock('../../hooks/useProducts', () => {
  return {
    default: () => ({
      products: [
        {
          id: 1,
          title: 'mock1',
          price: 100,
          description: 'mock1description',
          category: 'electronics',
          image: 'null',
          rating: {
            rate: 4.7,
            count: 22,
          },
        },
      ],
      loading: false,
      error: null,
    }),
  };
});

describe('ProductsContext', () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <ProductsContextProvider>{children}</ProductsContextProvider>
  );

  it('provides products, loading and error values', () => {
    const { result } = renderHook(() => useProductsContext(), { wrapper });

    expect(result.current.products).toEqual([
      {
        id: 1,
        title: 'mock1',
        price: 100,
        description: 'mock1description',
        category: 'electronics',
        image: 'null',
        rating: {
          rate: 4.7,
          count: 22,
        },
      },
    ]);

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });
});
