import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { ProductsContextProvider } from '../../features/products/context/ProductsContext';
import { CartContextProvider } from '../../features/cart/context/CartContext';

import { createMemoryRouter, RouterProvider } from 'react-router';
import routes from '../../app/routes';

describe('NotFoundPage', () => {
  function renderNotFoundPage(): void {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/no'],
    });

    render(
      <ProductsContextProvider>
        <CartContextProvider>
          <RouterProvider router={router} />
        </CartContextProvider>
      </ProductsContextProvider>
    );
  }

  it('renders 404 Error heading', () => {
    renderNotFoundPage();

    expect(screen.getByRole('heading', { level: 3 }).textContent).toMatch(
      /404 Error!/i
    );
  });

  it('renders link to homepage', () => {
    renderNotFoundPage();

    expect(
      screen.getByTestId('not-found-page-link-to-homepage')
    ).toBeInTheDocument();
  });
});
