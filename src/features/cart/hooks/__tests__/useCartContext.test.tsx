import { describe, it, expect } from 'vitest';

import { renderHook } from '@testing-library/react';
import { useCartContext } from '../useCartContext';

describe('useCartContext', () => {
  it('throws error when hook is called outside of CartContextProvider', () => {
    try {
      renderHook(() => useCartContext());
      throw new Error('Hook did not throw as expected');
    } catch (error) {
      expect(error).toEqual(
        Error('useCartContextProvider must be used inside CartContextProvider')
      );
    }
  });
});
