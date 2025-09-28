import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { RouterProvider, createBrowserRouter } from 'react-router';

import { ProductsContextProvider } from '../../features/products/context/ProductsContext';
import { CartContextProvider } from '../../features/cart/context/CartContext';

import routes from '../routes';

describe('App', () => {
  const router = createBrowserRouter(routes);

  it('App renders with providers', () => {
    render(
      <ProductsContextProvider>
        <CartContextProvider>
          <RouterProvider router={router} />
        </CartContextProvider>
      </ProductsContextProvider>
    );
    expect(
      screen.getByAltText(/A Image of our best seller product/i)
    ).toBeInTheDocument();
  });

  it('renders homepage section', () => {
    render(
      <ProductsContextProvider>
        <CartContextProvider>
          <RouterProvider router={router} />
        </CartContextProvider>
      </ProductsContextProvider>
    );

    expect(screen.getByTestId('homepage')).toBeInTheDocument();
  });

  it('renders navigation section', () => {
    render(
      <ProductsContextProvider>
        <CartContextProvider>
          <RouterProvider router={router} />
        </CartContextProvider>
      </ProductsContextProvider>
    );

    expect(screen.getByTestId('navigation')).toBeInTheDocument();
  });

  it('renders footer section', () => {
    render(
      <ProductsContextProvider>
        <CartContextProvider>
          <RouterProvider router={router} />
        </CartContextProvider>
      </ProductsContextProvider>
    );

    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
