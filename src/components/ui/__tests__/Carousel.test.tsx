import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen, render } from '@testing-library/react';

import { useProductsContext } from '../../../features/products/hooks/useProductsContext';

import { type Product } from '../../../types/Product';
import Carousel from '../Carousel';
import { MemoryRouter } from 'react-router';

vi.mock('../../../features/products/hooks/useProductsContext');

describe('Carousel', () => {
  const mockProducts: Product[] = [
    {
      id: 1,
      title: '1',
      price: 1,
      description: '1',
      category: 'electronics',
      image: '1',
      rating: {
        rate: 1,
        count: 1,
      },
    },
    {
      id: 2,
      title: '2',
      price: 2,
      description: '2',
      category: 'electronics',
      image: '2',
      rating: {
        rate: 2,
        count: 2,
      },
    },
    {
      id: 3,
      title: '3',
      price: 3,
      description: '3',
      category: 'electronics',
      image: '3',
      rating: {
        rate: 3,
        count: 3,
      },
    },
  ];

  beforeEach(() => {
    vi.mocked(useProductsContext).mockReturnValue({
      products: mockProducts,
      loading: false,
      error: null,
    });
  });

  it('renders products correctly', () => {
    render(
      <MemoryRouter>
        <Carousel />
      </MemoryRouter>
    );

    mockProducts.slice(0, 2).forEach((product: Product) => {
      expect(screen.getByText('$' + product.title)).toBeInTheDocument();
    });
  });

  it('shows loading state', () => {
    vi.mocked(useProductsContext).mockReturnValue({
      products: [],
      loading: true,
      error: null,
    });

    render(
      <MemoryRouter>
        <Carousel />
      </MemoryRouter>
    );

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it('shows error state', () => {
    vi.mocked(useProductsContext).mockReturnValue({
      products: [],
      loading: false,
      error: 'Network Error',
    });

    render(
      <MemoryRouter>
        <Carousel />
      </MemoryRouter>
    );

    expect(screen.getByText(/Error: Network Error/i)).toBeInTheDocument();
  });
});
