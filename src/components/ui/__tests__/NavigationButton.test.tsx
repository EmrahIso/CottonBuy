import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import NavigationButton from '../NavigationButton';

const mockHandler = vi.fn();

describe('Navigation Button', () => {
  beforeEach(() => {
    mockHandler.mockClear();
  });

  it('renders navigation button, with correct aria label', () => {
    render(
      <NavigationButton
        toggleNavigation={mockHandler}
        isNavigationOpen={false}
      />
    );

    expect(screen.getByTestId('navigation-toggle-button')).toBeInTheDocument();
    expect(screen.getByLabelText(/Open main navigation/i));
  });

  it('renders navigation button, then toggles on click', async () => {
    const user = userEvent.setup();

    render(
      <NavigationButton
        toggleNavigation={mockHandler}
        isNavigationOpen={false}
      />
    );

    expect(screen.getByTestId('navigation-toggle-button')).toBeInTheDocument();
    expect(screen.getByLabelText(/Open main navigation/i));

    await user.click(screen.getByTestId('navigation-toggle-button'));
    expect(mockHandler).toHaveBeenCalled();

    render(
      <NavigationButton
        toggleNavigation={mockHandler}
        isNavigationOpen={true}
      />
    );

    expect(screen.getByLabelText(/Close main navigation/i));
  });
});
