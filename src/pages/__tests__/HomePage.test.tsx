import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { ProductsContextProvider } from '../../features/products/context/ProductsContext';
import { CartContextProvider } from '../../features/cart/context/CartContext';

import { createMemoryRouter, RouterProvider } from 'react-router';
import routes from '../../app/routes';

describe('Homepage', () => {
  function renderHomePage(): void {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });

    render(
      <ProductsContextProvider>
        <CartContextProvider>
          <RouterProvider router={router} />
        </CartContextProvider>
      </ProductsContextProvider>
    );
  }

  it('renders HomePage by default', () => {
    renderHomePage();

    expect(screen.getByTestId('homepage')).toBeInTheDocument();
  });

  it('renders hero section', () => {
    renderHomePage();

    expect(screen.getByTestId('hero')).toBeInTheDocument();
  });

  it('renders featured products section', () => {
    renderHomePage();

    expect(screen.getByTestId('featured-products')).toBeInTheDocument();
  });

  it('renders newsletter section', () => {
    renderHomePage();

    expect(screen.getByTestId('newsletter')).toBeInTheDocument();
  });
});
