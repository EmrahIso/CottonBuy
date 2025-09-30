import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as ReactRouter from 'react-router';
import ShopSortSelect from '../ShopSortSelect';

const mockHandler = vi.fn();

describe('ShopSortSelect', () => {
  it('renders and allows selecting sort option', async () => {
    vi.spyOn(ReactRouter, 'useOutletContext').mockReturnValue({
      selectSortChangeHandler: mockHandler,
      selectSortValue: 'price',
    });

    render(<ShopSortSelect />);

    expect(screen.getByLabelText(/Sort Products/i)).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toHaveValue('price');

    await userEvent.selectOptions(screen.getByRole('combobox'), 'popularity');
    expect(mockHandler).toHaveBeenCalled();
  });
});
