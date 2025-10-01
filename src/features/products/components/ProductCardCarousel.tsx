import { Link } from 'react-router';

import { type Product } from '../../../types/Product';

type ProductCardCarouselProps = {
  productData: Product;
};

const ProductCardCarousel = ({ productData }: ProductCardCarouselProps) => {
  return (
    <Link
      to={`/shop/${productData.id}`}
      onClick={() => window.scrollTo(0, 0)}
      className='flex flex-col items-center gap-10'
    >
      <img
        src={productData.image}
        alt={`${productData.title}, ${productData.category}`}
        className='h-[320px] w-[240px]'
        loading='lazy'
        height='320px'
        width='240px'
      />
      <h3 className='text-neutral-600 tracking-wider font-medium text-center flex flex-col'>
        {productData.title}
        <span className='inline-block text-indigo-950 font-black text-xl mt-2'>
          {'$' + productData.price}
        </span>
      </h3>
    </Link>
  );
};

export default ProductCardCarousel;
