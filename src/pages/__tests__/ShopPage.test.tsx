import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { ProductsContext } from '../../features/products/context/ProductsContext';
import { CartContextProvider } from '../../features/cart/context/CartContext';

import { createMemoryRouter, RouterProvider } from 'react-router';
import routes from '../../app/routes';
import type { Product } from '../../types/Product';

const mockProducts: Product[] = [
  {
    id: 1,
    title: 'mock1',
    price: 100,
    description: 'mock1description',
    category: 'electronics',
    image: 'null',
    rating: {
      rate: 4.7,
      count: 22,
    },
  },
  {
    id: 2,
    title: 'mock2',
    price: 200,
    description: 'mock2description',
    category: 'electronics',
    image: 'null',
    rating: {
      rate: 4.2,
      count: 43,
    },
  },
];

type MockProductsProviderProps = {
  children: React.ReactNode;
};

const MockProductsProvider = ({ children }: MockProductsProviderProps) => (
  <ProductsContext.Provider
    value={{
      products: mockProducts,
      loading: false,
      error: null,
    }}
  >
    {children}
  </ProductsContext.Provider>
);

describe('ShopPage', () => {
  function renderShopPage(): void {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/shop'],
    });

    render(
      <MockProductsProvider>
        <CartContextProvider>
          <RouterProvider router={router} />
        </CartContextProvider>
      </MockProductsProvider>
    );
  }

  it('renders ShopPage by default', () => {
    renderShopPage();

    expect(screen.getByTestId('shop-page')).toBeInTheDocument();
  });

  it('renders select filter for sorting', () => {
    renderShopPage();

    expect(screen.getByTestId('shop-select-filter')).toBeInTheDocument();
  });

  it('renders products grid', async () => {
    renderShopPage();

    expect(
      await screen.findByTestId(
        'product-card-shop-heading-' + mockProducts[0].id
      )
    ).toBeInTheDocument();
    expect(
      await screen.findByTestId(
        'product-card-shop-heading-' + mockProducts[1].id
      )
    ).toBeInTheDocument();
    expect(screen.getByText(mockProducts[0].title)).toBeInTheDocument();
    expect(screen.getByText(mockProducts[1].title)).toBeInTheDocument();
  });

  it('renders loading state', () => {
    render(
      <ProductsContext.Provider
        value={{ products: [], loading: true, error: null }}
      >
        <CartContextProvider>
          <RouterProvider
            router={createMemoryRouter(routes, { initialEntries: ['/shop'] })}
          />
        </CartContextProvider>
      </ProductsContext.Provider>
    );
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('renders error state', () => {
    render(
      <ProductsContext.Provider
        value={{ products: [], loading: false, error: 'Server error' }}
      >
        <CartContextProvider>
          <RouterProvider
            router={createMemoryRouter(routes, { initialEntries: ['/shop'] })}
          />
        </CartContextProvider>
      </ProductsContext.Provider>
    );
    expect(screen.getByText(/Error/i)).toBeInTheDocument();
  });
});
