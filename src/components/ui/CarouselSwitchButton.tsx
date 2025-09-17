import { ChevronLeft, ChevronRight } from 'lucide-react';

type CarouselSwitchButtonProps = {
  orientation: 'left' | 'right';
  clickHandler: React.MouseEventHandler<HTMLButtonElement>;
};

const CarouselSwitchButton = ({
  orientation,
  clickHandler,
}: CarouselSwitchButtonProps) => {
  return (
    <button
      type='button'
      aria-label={orientation === 'left' ? 'Previous item' : 'Next item'}
      className={
        'cursor-pointer bg-white shadow-md text-fuchsia-600 absolute rounded-full flex items-center justify-center p-3 pr-3.5 -translate-y-1/2 top-1/2 hover:shadow-lg ' +
        (orientation === 'left'
          ? 'left-0 -translate-x-1/2'
          : 'right-0 translate-x-1/2')
      }
      onClick={clickHandler}
    >
      {orientation === 'left' ? (
        <ChevronLeft size={40} strokeWidth={2.5} />
      ) : (
        <ChevronRight size={40} strokeWidth={2.5} />
      )}
    </button>
  );
};

export default CarouselSwitchButton;
