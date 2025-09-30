import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SaveQuantityButton from '../SaveQuantityButton';

const addProductToCartMock = vi.fn();
const removeProductFromCartMock = vi.fn();

describe('Save Quantity Button', () => {
  beforeEach(() => {
    addProductToCartMock.mockClear();
    removeProductFromCartMock.mockClear();
  });

  it('renders correctly for shop button type', () => {
    render(
      <SaveQuantityButton
        addProductToCart={addProductToCartMock}
        removeProductFromCart={removeProductFromCartMock}
        productId={1}
        productQuantity={1}
        buttonType={'shop'}
      />
    );

    expect(
      screen.getByRole('button', { name: /Add to cart/i })
    ).toBeInTheDocument();
  });

  it('renders correctly for cart button type', () => {
    render(
      <SaveQuantityButton
        addProductToCart={addProductToCartMock}
        removeProductFromCart={removeProductFromCartMock}
        productId={1}
        productQuantity={1}
        buttonType={'cart'}
      />
    );

    expect(
      screen.getByRole('button', { name: /Save Item/i })
    ).toBeInTheDocument();
  });

  it('calls addProductCart when quantity > 0', async () => {
    const user = userEvent.setup();

    render(
      <SaveQuantityButton
        addProductToCart={addProductToCartMock}
        removeProductFromCart={removeProductFromCartMock}
        productId={1}
        productQuantity={1}
        buttonType={'shop'}
      />
    );

    await user.click(screen.getByRole('button', { name: /Add to cart/i }));

    expect(addProductToCartMock).toHaveBeenCalled();
    expect(removeProductFromCartMock).not.toHaveBeenCalled();
  });

  it('calls removeProductCart when quantity === 0', async () => {
    const user = userEvent.setup();

    render(
      <SaveQuantityButton
        addProductToCart={addProductToCartMock}
        removeProductFromCart={removeProductFromCartMock}
        productId={1}
        productQuantity={0}
        buttonType={'shop'}
      />
    );

    await user.click(screen.getByRole('button', { name: /Add to cart/i }));

    expect(removeProductFromCartMock).toHaveBeenCalled();
    expect(addProductToCartMock).not.toHaveBeenCalled();
  });
});
