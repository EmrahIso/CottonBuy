import Card from './Card';
import CarouselSwitchButton from './CarouselSwitchButton';

const Carousel = () => {
  return (
    <article className='grid px-24 grid-cols-3 gap-32 relative'>
      {[1, 2, 3].map((key: number) => (
        <Card key={key} />
      ))}
      <CarouselSwitchButton orientation={'left'} />
      <CarouselSwitchButton orientation={'right'} />
    </article>
  );
};

export default Carousel;
