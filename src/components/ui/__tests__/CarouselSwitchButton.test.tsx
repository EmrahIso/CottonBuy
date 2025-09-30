import { describe, it, expect, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CarouselSwitchButton from '../CarouselSwitchButton';

describe('Carousel Switch Button', () => {
  it('renders left button and triggers clickHandler', async () => {
    const user = userEvent.setup();

    const clickMock = vi.fn();

    render(
      <CarouselSwitchButton orientation='left' clickHandler={clickMock} />
    );

    const button = screen.getByRole('button', { name: /Previous Item/i });
    expect(button).toBeInTheDocument();

    await user.click(button);
    expect(clickMock).toHaveBeenCalledTimes(1);
  });

  it('renders right button and triggers clickHandler', async () => {
    const user = userEvent.setup();

    const clickMock = vi.fn();

    render(
      <CarouselSwitchButton orientation='right' clickHandler={clickMock} />
    );

    const button = screen.getByRole('button', { name: /Next Item/i });
    expect(button).toBeInTheDocument();

    await user.click(button);
    expect(clickMock).toHaveBeenCalledTimes(1);
  });
});
