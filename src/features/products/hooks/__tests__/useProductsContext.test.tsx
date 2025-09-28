import { describe, it, expect } from 'vitest';

import { renderHook } from '@testing-library/react';
import { useProductsContext } from '../useProductsContext';

describe('useProductsContext', () => {
  it('throws error when hook is called outside of ProductsContextProvider', () => {
    expect(() => renderHook(() => useProductsContext())).toThrowError(
      'useProductsContext must be used inside ProductsContextProvider'
    );
  });
});
