import { describe, it, expect } from 'vitest';

import { renderHook } from '@testing-library/react';
import { useCartContext } from '../useCartContext';

describe('useCartContext', () => {
  it('throws error when hook is called outside of CartContextProvider', () => {
    expect(() => renderHook(() => useCartContext())).toThrowError(
      'useCartContext must be used inside CartContextProvider'
    );
  });
});
