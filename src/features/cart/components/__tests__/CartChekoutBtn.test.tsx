import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CartContext } from '../../context/CartContext';
import CartCheckoutBtn from '../CartCheckoutBtn';

describe('CartCheckoutBtn', () => {
  it('calls clearCart and shows alert on click', async () => {
    const clearCartMock = vi.fn();
    const alertMock = vi.fn();
    window.alert = alertMock;

    render(
      <CartContext.Provider
        value={{
          cartProducts: [],
          addProductToCart: vi.fn(),
          removeProductFromCart: vi.fn(),
          clearCart: clearCartMock,
        }}
      >
        <CartCheckoutBtn checkoutPrice={25.5} />
      </CartContext.Provider>
    );

    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /checkout/i }));

    expect(alertMock).toHaveBeenCalledWith(
      'Thank you for sending me $25.50 :)'
    );
    expect(clearCartMock).toHaveBeenCalledTimes(1);
  });
});
