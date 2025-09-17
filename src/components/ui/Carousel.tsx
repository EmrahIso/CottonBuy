import { useState } from 'react';
import { useProductsContext } from '../../features/products/hooks/useProductsContext';

import ProductCardCarousel from '../../features/products/components/ProductCardCarousel';
import CarouselSwitchButton from './CarouselSwitchButton';

import { type Product } from '../../types/Product';

const Carousel = () => {
  const { products, loading, error } = useProductsContext();
  const [startIndex, setStartIndex] = useState<number>(0);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const visibleCount: number = 3;
  const visibleProducts = products.slice(startIndex, startIndex + visibleCount);

  const slideCarouselLeft = () => {
    if (startIndex > 0) {
      setStartIndex((prevState) => prevState - 1);
    }
  };

  const slideCarouselRight = () => {
    if (startIndex < products.length - 3) {
      setStartIndex((prevState) => prevState + 1);
    }
  };

  return (
    <article className='grid px-24 grid-cols-3 gap-32 relative h-[468px]'>
      {visibleProducts.map((product: Product) => (
        <ProductCardCarousel key={product.id} productData={product} />
      ))}
      <CarouselSwitchButton
        orientation={'left'}
        clickHandler={slideCarouselLeft}
      />
      <CarouselSwitchButton
        orientation={'right'}
        clickHandler={slideCarouselRight}
      />
    </article>
  );
};

export default Carousel;
