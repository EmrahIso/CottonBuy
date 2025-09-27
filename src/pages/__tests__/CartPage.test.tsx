import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { CartContext } from '../../features/cart/context/CartContext';
import { ProductsContext } from '../../features/products/context/ProductsContext';

import { createMemoryRouter, RouterProvider } from 'react-router';
import routes from '../../app/routes';
import type { CartProduct } from '../../types/CartContextType';
import type { Product } from '../../types/Product';

const mockCart: CartProduct[] = [
  {
    productId: 1,
    productQuantity: 21,
  },
  {
    productId: 2,
    productQuantity: 99,
  },
];

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

function renderCartPage({
  products = [],
  cartProducts = [],
  loading = false,
  error = null,
}: {
  products?: Product[];
  cartProducts?: CartProduct[];
  loading?: boolean;
  error?: string | null;
}) {
  const router = createMemoryRouter(routes, { initialEntries: ['/cart'] });

  return render(
    <ProductsContext.Provider value={{ products, loading, error }}>
      <CartContext.Provider
        value={{
          cartProducts,
          addProductToCart: vi.fn(),
          removeProductFromCart: vi.fn(),
          clearCart: vi.fn(),
        }}
      >
        <RouterProvider router={router} />
      </CartContext.Provider>
    </ProductsContext.Provider>
  );
}

describe('CartPage', () => {
  it('renders CartPage by default', () => {
    renderCartPage({});

    expect(screen.getByTestId('cart-page')).toBeInTheDocument();
  });

  it('renders loading state', () => {
    renderCartPage({ loading: true });
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('renders error state', () => {
    renderCartPage({ error: 'error' });
    expect(screen.getByText(/Error/i)).toBeInTheDocument();
  });

  it('renders cart items grid', async () => {
    renderCartPage({ cartProducts: mockCart, products: mockProducts });

    expect(
      await screen.findByTestId(
        'product-cart-shop-heading-' + mockProducts[0].id
      )
    ).toBeInTheDocument();
    expect(
      await screen.findByTestId(
        'product-cart-shop-heading-' + mockProducts[1].id
      )
    ).toBeInTheDocument();
    expect(screen.getByText(mockProducts[0].title)).toBeInTheDocument();
    expect(screen.getByText(mockProducts[1].title)).toBeInTheDocument();
  });
});
