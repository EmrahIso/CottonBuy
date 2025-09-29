import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';

import Navigation from '../Navigation';
import { CartContext } from '../../../features/cart/context/CartContext';
import { type CartContextType } from '../../../types/CartContextType';

const mockCartContext: CartContextType = {
  cartProducts: [],
  addProductToCart: vi.fn(),
  removeProductFromCart: vi.fn(),
  clearCart: vi.fn(),
};

describe('Navigation component', () => {
  beforeEach(() => {
    window.innerWidth = 1024; // desktop size
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <MemoryRouter>
        <CartContext.Provider value={mockCartContext}>
          {children}
        </CartContext.Provider>
      </MemoryRouter>
    );
  };

  it('renders DesktopNavigation on desktop screens', () => {
    render(<Navigation />, { wrapper });

    expect(screen.getByTestId('navigation')).toBeInTheDocument();
    expect(screen.getByTestId('navigation-desktop')).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Shop/i)).toBeInTheDocument();
  });

  it('renders MobileNavigation on mobile screens', async () => {
    window.innerWidth = 500;
    window.dispatchEvent(new Event('resize'));

    render(<Navigation />, { wrapper });

    expect(screen.getByTestId('navigation')).toBeInTheDocument();
    expect(screen.getByTestId('navigation-mobile')).toBeInTheDocument();

    const toggleBtn = screen.getByRole('button');

    expect(toggleBtn).toBeInTheDocument();
  });

  it('renders MobileNavigation on mobile screens, when navigation button is clicked', async () => {
    const user = userEvent.setup();

    window.innerWidth = 500;
    window.dispatchEvent(new Event('resize'));

    render(<Navigation />, { wrapper });

    expect(screen.getByTestId('navigation')).toBeInTheDocument();
    expect(screen.getByTestId('navigation-mobile')).toBeInTheDocument();

    const toggleBtn = screen.getByRole('button');

    expect(toggleBtn).toBeInTheDocument();

    await user.click(toggleBtn);

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Shop/i)).toBeInTheDocument();

    await user.click(toggleBtn); // close menu
  });
});
