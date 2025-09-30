import { describe, it, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router';

import CartLink from '../CartLink';

describe('Cart Link component', () => {
  it('renders correctly in desktop mode', () => {
    render(
      <Router>
        <CartLink cartProductsCount={5} isMobileMode={false} />
      </Router>
    );

    const link = screen.getByRole('link', {
      name: /Cart/i,
    });

    expect(link).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(link).not.toHaveClass('fixed'); // desktop mode
  });

  it('renders correctly in mobile mode', () => {
    render(
      <Router>
        <CartLink cartProductsCount={2} isMobileMode={true} />
      </Router>
    );

    const container = screen.getByRole('link', {
      name: /Cart/i,
    }).parentElement;

    expect(container).toHaveClass('fixed'); // mobile mode
    expect(screen.getByText('2')).toBeInTheDocument();
  });
});
