import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import QuantityPicker from '../QuantityPicker';

const addProductToCartMock = vi.fn();
const removeProductFromCartMock = vi.fn();

describe('Quantity Picker', () => {
  beforeEach(() => {
    addProductToCartMock.mockClear();
    removeProductFromCartMock.mockClear();
  });

  it('renders correctly with default quantity', () => {
    render(
      <QuantityPicker
        addProductToCart={addProductToCartMock}
        removeProductFromCart={removeProductFromCartMock}
        productId={1}
        buttonType='shop'
        defaultProductQuantity={1}
      />
    );

    expect(screen.getByLabelText(/Increase Quantity/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Decrease Quantity/i)).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('increments and decrements quantity within bounds', async () => {
    const user = userEvent.setup();

    render(
      <QuantityPicker
        addProductToCart={addProductToCartMock}
        removeProductFromCart={removeProductFromCartMock}
        productId={1}
        buttonType='shop'
        defaultProductQuantity={1}
      />
    );

    const incrementBtn = screen.getByLabelText(/Increase Quantity/i);
    const decrementBtn = screen.getByLabelText(/Decrease Quantity/i);
    const quantity = screen.getByText('1');

    await user.click(incrementBtn);
    expect(quantity).toHaveTextContent('2');

    await user.click(decrementBtn);
    expect(quantity).toHaveTextContent('1');

    await user.click(decrementBtn);
    expect(quantity).toHaveTextContent('0');
  });
});
