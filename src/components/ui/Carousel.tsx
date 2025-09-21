import { useState, useEffect } from 'react';
import { useProductsContext } from '../../features/products/hooks/useProductsContext';

import ProductCardCarousel from '../../features/products/components/ProductCardCarousel';
import CarouselSwitchButton from './CarouselSwitchButton';

import { type Product } from '../../types/Product';

const Carousel = () => {
  const { products, loading, error } = useProductsContext();
  const [startIndex, setStartIndex] = useState<number>(0);

  const setShownItemsQuantityCallback = (): 1 | 2 | 3 => {
    if (window.innerWidth >= 1280) {
      return 3;
    } else if (window.innerWidth >= 768) {
      return 2;
    } else {
      return 1;
    }
  };

  const [shownItemsQuantity, setShownItemsQuantity] = useState<1 | 2 | 3>(
    setShownItemsQuantityCallback
  );
  // Number of items shown depends on the browser window width (responsive layout).

  useEffect(() => {
    const handleResize = () => {
      setShownItemsQuantity(setShownItemsQuantityCallback);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const visibleProducts = products.slice(
    startIndex,
    startIndex + shownItemsQuantity
  );

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
    <article className='grid sm:px-24 px-2 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-32 relative h-[468px]'>
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
